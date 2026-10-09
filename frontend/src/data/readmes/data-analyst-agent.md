# Data Analyst Agent

An LLM-powered agent that takes a plain-language data analysis question, along with any data files, breaks it into smaller tasks, writes and runs Python for each one, debugs its own failures, and returns the answers as JSON.

## How It Works

```
Question + data files (CSV, Excel, JSON, text, HTML, images)
      │
      ▼
Summarise each file
      │
      ▼
Task Breakdown (ordered, self-contained tasks)
      │
      ▼
For each task:
  Rewrite task using the real file structure
        │
        ▼
  Generate Python code
        │
        ▼
  Execute in an isolated environment
        │
        ▼
  On failure: explain the error, regenerate (limited retries)
        │
        ▼
  Summarise the output for later tasks
      │
      ▼
Final check and formatting → JSON answer
```

## Design Principles

- **Small models, simple steps:** each step is a narrow task, so lighter models handle complex analysis reliably
- **Built without agent frameworks:** the loop, prompting and orchestration are written by hand
- **Self-correcting:** failed code is explained and regenerated rather than abandoned
- **Prompt-driven:** every stage uses its own prompt template, so behaviour can be tuned without touching code

## Success Criteria

- Handles files of different types in a single request
- Recovers from errors, hallucinated code and missing data
- Returns answers in exactly the format the question asks for
- Falls back to a best-effort answer if a run fails

## Tech Stack

| Layer | Technology |
|---|---|
| API | FastAPI |
| Planning | Gemini 2.5 Flash |
| Code Generation and Debugging | GPT-4o-mini |
| Final Answer Fallback | Gemini 2.5 Pro |
| Code Execution | uv isolated environments |
