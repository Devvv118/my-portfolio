# Portfolio Intelligence & Cloud Monitoring Platform

A serverless AWS system that reads my Gmail on a schedule, uses Gemini to extract job openings and reported errors, monitors the services behind my projects, and shows everything, plus portfolio visitor activity, in a single React dashboard.

## How It Works

```
EventBridge schedules
      │
 ┌────┼──────────────────────┐
 ▼    ▼                      ▼
Email report            Health checker        Fault-log collector
(Gmail + Gemini)        (Render services)     (Render logs)
 │                       │                     │
 ▼                       ▼                     ▼
DynamoDB                SNS email alert       S3 fault reports
 │
 ▼
API Gateway ──► Report reader ──► React dashboard ◄── Portfolio backend stats
```

## Components

| Component | What it does |
|---|---|
| Email report generator | Reads the last 24 hours of Gmail, asks Gemini for a summary, job openings and reported errors, and saves the report |
| Report reader | Returns the latest saved report through API Gateway, so the dashboard never waits on an inbox scan |
| Health checker | Pings each Render service in parallel and sends one SNS email listing any failures |
| Fault-log collector | Fetches recent logs for every Render service, filters them with about 100 fault patterns, and writes a timestamped report to S3 |
| Portfolio backend | Counts theme switches, project opens, GitHub clicks and live-demo clicks, and serves the totals |
| Dashboard | Shows the digest, job openings, errors and portfolio stats |

## Key Features

- **Structured AI extraction:** Gemini returns strict JSON, validated before it is saved
- **Model fallback chain:** if a model is rate-limited, overloaded or returns bad output, the next one is tried
- **Prompt-injection aware:** email content is treated as untrusted data, and the model is told never to invent companies, roles, logs or causes
- **Self-expiring reports:** each saved report is kept for seven days
- **Configurable schedules:** every job runs on an EventBridge schedule from 15 minutes to a day or more
- **Failure isolation:** one failing service or model never stops the rest of a run, and partial runs are reported as such
- **Safe public demo:** the deployed dashboard shows sample data only

## Security

- Secrets and OAuth tokens live in Lambda environment variables, never in the code
- The analytics API validates every input, limits request size, throttles per IP, and compares keys in constant time
- Only allowlisted origins can call the analytics API from a browser

## Tech Stack

| Layer | Technology |
|---|---|
| Compute | AWS Lambda (Node.js) |
| Scheduling | Amazon EventBridge |
| Storage | DynamoDB, S3 |
| API | Amazon API Gateway, Express |
| Alerts | Amazon SNS |
| AI | Google Gemini API |
| Data sources | Gmail API, Render API |
| Frontend | React, Vite |
