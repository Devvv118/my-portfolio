# Data Analyst Agent

An LLM-powered agent that takes a plain-language data analysis question, along with any data files, breaks it into smaller tasks, writes and runs Python for each one, debugs its own failures, and returns the answers as JSON.

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
