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

## Repository Layout

```
io-workload-platform/
├── agents/                     # Telemetry agents running on storage nodes
│   └── telemetry_agent/
├── ingestion/                  # Kafka producers, topic schemas, Avro/Protobuf
│   ├── kafka/
│   └── schemas/
├── feature_engineering/        # Stream and batch feature computation
│   ├── streaming/              # Flink/Spark Structured Streaming jobs
│   └── batch/                  # Historical feature backfill
├── feature_store/              # Online (Redis) + Offline (Parquet/Iceberg)
│   ├── online/
│   └── offline/
├── ml/                         # All ML: training, evaluation, registry, MLOps
│   ├── classification/
│   ├── hotspot_detection/
│   ├── forecasting/
│   ├── model_registry/
│   └── mlops/
├── inference/                  # Model serving / inference hub
│   └── serving/
├── decision_engine/            # SLO-aware policy + action planning
├── rebalancer/                 # Volume/LUN rebalance optimizer
├── autoscaler/                 # Capacity planning + scale-out recommendations
├── actuators/                  # CSI driver / array API integrations
├── execution_monitor/          # Progress tracking, rate-limiting, rollback
├── observability/              # Metrics, tracing, alerting, drift detection
├── config/                     # Global config, environment profiles
├── scripts/                    # Dev / ops shell scripts
├── tests/                      # Unit, integration, e2e
├── data/sample/                # Synthetic sample data for local dev
├── docs/                       # Architecture docs, runbooks
└── deploy/                     # Docker Compose + Kubernetes manifests
    ├── docker/
    └── k8s/
```

## Quickstart

```bash
# 1. Clone and set up Python environment
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt

# 2. Start local infrastructure (Kafka, Redis, Postgres)
docker compose -f deploy/docker/docker-compose.yml up -d

# 3. Ingest sample data
python scripts/ingest_sample.py --file data/sample/io_workload_data_sample.csv

# 4. Run feature engineering
python -m feature_engineering.batch.backfill --input data/sample/io_workload_data_sample.csv

# 5. Train classification model
python -m ml.classification.train --config config/ml/classification.yaml

# 6. Evaluate model
python -m ml.classification.evaluate --run-id latest
(OR)
python -m ml.classification.evaluate \
  --model models/workload_classifier_latest.pkl \
  --data data/sample/io_workload_data_sample.csv

# 7. Start inference server
uvicorn inference.serving.app:app --host 0.0.0.0 --port 8080

# 8. Start decision engine
python -m decision_engine.engine --config config/decision_engine.yaml

# 9. ui
streamlit run ui/Home.py
```

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
