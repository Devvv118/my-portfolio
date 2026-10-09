# Virtual Teaching Assistant

A retrieval-augmented (RAG) assistant for the **Tools in Data Science (TDS)** course at IIT Madras. Students ask a question, optionally with a screenshot or a link to a course page or forum thread, and get an answer grounded in the course material and past Discourse discussions.

## How It Works

```
Student question (+ optional image / link)
      │
      ▼
Embed the question
      │
      ▼
Vector search
 ├─ no link  → search course content and forum posts
 └─ link     → search only that page or thread
      │
      ▼
Pull in neighbouring forum posts for context
      │
      ▼
LLM answer generation (with the image, if supplied)
      │
      ▼
Answer + source links
```

## Knowledge Base

| Collection | Source | Notes |
|---|---|---|
| Course content | The TDS course site | Pages split into 300-token chunks |
| Forum discussions | IITM Discourse posts | One document per post, linked to its topic |

## Key Features

- Answers are grounded in real course pages and forum threads rather than model memory
- Accepts screenshots, so students can ask about an error they are seeing
- Can be pointed at a single page or thread to keep the answer focused
- Returns up to three source links so every answer can be checked
- Neighbouring forum posts are added around each match, so replies are read in context

## Tech Stack

| Layer | Technology |
|---|---|
| API | FastAPI |
| Vector Store | Typesense |
| Embeddings | OpenAI text-embedding-3-small |
| Answer Generation | OpenAI gpt-4o-mini (text and vision) |
| Re-ranking | NumPy cosine similarity |
| Chunking | tiktoken |
