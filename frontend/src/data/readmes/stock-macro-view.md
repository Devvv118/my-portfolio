# Stock Macro View Platform

A MERN-stack platform that brings company financials, stock data, news sentiment, and macroeconomic indicators together in one place, deployed on AWS.

## What it does

- Node.js pipelines aggregate company financials, stock data, news sentiment, and macroeconomic indicators from external APIs
- Retries, validation, and error handling keep data ingestion reliable
- Data is structured as JSONL for MongoDB bulk loading
- A React dashboard lets you explore financial and economic trends

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React |
| Backend / pipelines | Node.js, Express |
| Database | MongoDB Atlas |
| Hosting | AWS S3 + CloudFront (frontend), EC2 (backend) |
