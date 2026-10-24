# Autonomous Storage Control Plane

A closed-loop platform that classifies storage workloads, detects hotspots, forecasts capacity and latency risk, and rebalances data across nodes and tiers on its own, with safety guardrails around every action.

## The Problem

Shared storage clusters mix databases, VMs, backups and AI workloads on the same nodes. One heavy job can starve its neighbors, latency creeps past the SLO, and pools fill up with little warning. Fixing this by hand is slow and reactive. This project makes the cluster observe itself, decide, and act, while staying safe enough to trust.

## What It Does

| Capability | In short |
|---|---|
| **Classify** | Labels every volume as a database, VM, backup, AI training or AI inference workload, and notices when that behavior drifts. |
| **Detect** | Flags hotspots and noisy neighbors within seconds, and names which volume is hurting which. |
| **Forecast** | Predicts days until a pool fills and the time until latency breaches the SLO. |
| **Act** | Migrates volumes, caps IOPS, changes tiers or adds a node, after simulating the result first. |
| **Protect** | Watches every action and rolls it back if latency gets worse. |

## The Closed Loop

```
Observe  ->  Predict  ->  Decide  ->  Act  ->  Monitor
   ^                                              |
   +----------------- feedback -------------------+
```

1. **Observe:** telemetry streams in from every volume (IOPS, latency, throughput, queue depth, capacity).
2. **Predict:** ML models classify workloads, score hotspots and forecast risk.
3. **Decide:** a policy engine tests candidate actions in a what-if simulator and picks the best one.
4. **Act:** the action runs through an actuator (a stub locally, a Kubernetes CSI driver in production).
5. **Monitor:** results are checked and fed back into the loop.

## Workload Classes

| Class | IOPS Profile | Throughput | Latency | Block Size |
|---|---|---|---|---|
| `DB_OLTP` | High (30k–60k) | Medium | Very Low (<600µs) | Small (4–8KB) |
| `VM` | Medium (5k–20k) | Medium | Medium (~1ms) | Mixed (8–64KB) |
| `Backup` | Low (<2k) | Very High (>800 MB/s) | High (>5ms) | Large (256KB–1MB) |
| `AI_Training` | Low–Medium | Extreme (>1.5 GB/s) | High | Very Large (256KB–1MB) |
| `AI_Inference` | Medium–High | High | Low (<1ms) | Small–Medium (4–16KB) |

## The Intelligence Layer

| Task | Approach |
|---|---|
| Workload classification | LightGBM for batch, plus a streaming classifier with drift detection (ARF + ADWIN) |
| Hotspot detection | Three-tier ensemble: rolling z-score, Isolation Forest and an LSTM autoencoder |
| Noisy-neighbor detection | Finds aggressor → victim volume pairs on shared nodes |
| Capacity forecasting | N-BEATS, rolled forward into a Days-to-Fill estimate |
| Latency forecasting | Temporal Fusion Transformer with quantile outputs, giving a Time-to-Violation |
| Explainability | SHAP, so every classification can be explained |

All models sit behind a single inference hub that runs them in-process, or on remote GPU servers (Triton / KServe) with a safe fallback if a server is slow or unavailable.

## Safety by Design

| Guardrail | What it does |
|---|---|
| Persistence check | A hotspot must last for a couple of minutes before any action, so a blip never triggers a move. |
| Rate limits | At most 3 migrations per hour and one at a time. |
| What-if simulation | Every action is simulated first; moves that would overload the target node are rejected. |
| Auto-rollback | Latency is tracked after each action; a 20% regression reverses it. |
| Circuit breaker | If more than 1% of actions are rolled back, autonomy is disabled until someone resets it. |
| Autoscale cap | Capacity is added one node at a time, never in bulk. |

## Streaming Backbone

Telemetry flows through an event bus with two interchangeable backends: **Redis Streams** for local development and **Apache Kafka** for production. Both implement the same interface, so one environment variable switches the whole system between them. The Kafka side adds a consumer group for horizontal scaling, a dead-letter topic for poison messages, a compacted state topic that keeps control-plane instances in sync, and trace context carried through messages for end-to-end tracing.

## Goals and Where It Stands

| Goal | Where it stands |
|---|---|
| Over 95% precision/recall for workload classification | Overall held-out accuracy clears the target. `DB_OLTP`, which overlaps with VM and AI inference behavior, is the hardest class. |
| 20–40% fewer p95/p99 latency spikes and less node utilization variance | The target for a live deployment. This proof of concept validates the decision loop on simulated telemetry. |
| Hotspot detection within seconds | Detected on the live stream; actions wait for persistence before they fire. |
| No SLO breaches from automated actions, rollback rate under 1% | Enforced by simulation-first planning, auto-rollback and the circuit breaker. |

## Tech Stack

| Layer | Technology |
|---|---|
| Messaging | Apache Kafka, Redis Streams |
| Telemetry parsing | C++ parser with a Python fallback |
| ML | LightGBM, River (ARF + ADWIN), scikit-learn, PyTorch, SHAP, Optuna, MLflow |
| API | FastAPI, JWT auth, Server-Sent Events |
| Dashboard | Streamlit |
| Storage | TimescaleDB (production), local files (development) |
| Observability | OpenTelemetry, Prometheus, Grafana |
| Deployment | Docker Compose (local), Kubernetes + Helm (production) |

## Scope

This is a proof of concept built for the HPE Career Preview Program. It was developed and validated on synthetic telemetry: 50 volumes across 5 nodes over 30 days, about 432,000 samples, with injected noisy-neighbor events. The production hooks (Kafka, Kubernetes actuator, remote GPU inference) are built in, ready for a real cluster.
