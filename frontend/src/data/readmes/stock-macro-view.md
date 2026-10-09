# Stock Macro View Platform

A MERN-stack platform that brings company financials, stock data, news sentiment and macroeconomic indicators together in one place, so market moves can be read in context.

## How It Works

```
External APIs
(financials · stock prices · news · macro indicators)
      │
      ▼
Node.js ingestion pipelines
(retries · validation · error handling)
      │
      ▼
JSONL files → MongoDB bulk load
      │
      ▼
Express API
      │
      ▼
React dashboard
```

## Key Features

- Pipelines aggregate company financials, stock data, news sentiment and macroeconomic indicators
- Retries, validation and error handling keep ingestion reliable
- Data is structured as JSONL for fast MongoDB bulk loading
- A React dashboard to explore financial and economic trends

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React |
| Backend and Pipelines | Node.js, Express |
| Database | MongoDB Atlas |
| Hosting | AWS S3 + CloudFront (frontend), EC2 (backend) |
