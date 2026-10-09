# IO Workload Classification & Hotspot Detection Platform

An ML-driven control plane that classifies storage workloads, detects hotspots, predicts capacity exhaustion, and auto-rebalances data across nodes and media tiers to meet SLOs.

## Architecture Overview

```
Telemetry Agents
      │
      ▼
Kafka Message Bus
      │
      ▼
Stream Processing (Feature Engineering)
      │
   ┌──┴──┐
   ▼     ▼
Online  Offline
Feature Feature
Store   Store
   │     │
   └──┬──┘
      ▼
Model Inference Hub
(Classification · Hotspot Detection · Forecasting)
      │
      ▼
Decision & Policy Engine
      │
   ┌──┴──┐
   ▼     ▼
Rebalancer  Auto-Scaler
      │
      ▼
Actuators (CSI / Array APIs)
      │
      ▼
Execution Monitor + Observability (feedback loop)
```

## Workload Classes

| Class | IOPS Profile | Throughput | Latency | Block Size |
|---|---|---|---|---|
| `DB_OLTP` | High (30k–60k) | Medium | Very Low (<600µs) | Small (4–8KB) |
| `VM` | Medium (5k–20k) | Medium | Medium (~1ms) | Mixed (8–64KB) |
| `Backup` | Low (<2k) | Very High (>800 MB/s) | High (>5ms) | Large (256KB–1MB) |
| `AI_Training` | Low–Medium | Extreme (>1.5 GB/s) | High | Very Large (256KB–1MB) |
| `AI_Inference` | Medium–High | High | Low (<1ms) | Small–Medium (4–16KB) |


## Success Criteria

- ≥ 95% precision/recall for workload classification per volume/LUN
- Reduce p95/p99 latency spikes and node utilization variance by 20–40%
- Hotspot detection within seconds
- Zero SLO breaches during automated actions; rollback rate < 1%

## Tech Stack

| Layer | Technology |
|---|---|
| Message Bus | Apache Kafka |
| Stream Processing | Apache Flink (or Spark Structured Streaming) |
| Online Feature Store | Redis |
| Offline Feature Store | Parquet + DuckDB (upgradeable to Iceberg) |
| ML Framework | scikit-learn, XGBoost, LightGBM, PyTorch (optional) |
| Model Registry | MLflow |
| Inference Serving | FastAPI + ONNX Runtime |
| Observability | Prometheus + Grafana |
| Orchestration | Docker Compose (dev) / Kubernetes (prod) |
