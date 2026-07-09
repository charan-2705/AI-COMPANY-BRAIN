# AI-COMPANY-BRAIN
# CortexAI – Enterprise Knowledge Assistant

## Overview

CortexAI is an AI-powered Enterprise Knowledge Assistant that enables employees to interact with organizational documents through natural language. It uses Retrieval-Augmented Generation (RAG) to retrieve relevant information from uploaded documents and generate accurate responses using Large Language Models (LLMs).

The system minimizes manual document searching by providing instant, context-aware answers while maintaining an intuitive user interface.

---

## Features

- Secure User Authentication
  - Email & Password Login
  - Google OAuth Login

- Document Management
  - Upload PDF, DOCX, and TXT files
  - Automatic document processing
  - Text extraction and preprocessing

- AI-Powered Question Answering
  - Natural language querying
  - Context-aware responses
  - Semantic document search

- Retrieval-Augmented Generation (RAG)
  - Text Chunking
  - Embedding Generation
  - FAISS Vector Search
  - LLM-based Answer Generation

- Enterprise Dashboard
  - Document statistics
  - User-friendly interface
  - Activity overview

---

## System Architecture

```
                User
                  │
                  ▼
          React Frontend
                  │
                  ▼
          FastAPI Backend
                  │
      ┌───────────┴───────────┐
      │                       │
      ▼                       ▼
Authentication          Document Upload
      │                       │
      ▼                       ▼
 Google OAuth         Text Extraction
                              │
                              ▼
                       Text Splitter
                              │
                              ▼
                        Embeddings
                              │
                              ▼
                      FAISS Vector Store
                              │
                              ▼
                       Similarity Search
                              │
                              ▼
                          LLM Response
                              │
                              ▼
                           User Answer
```

---

## Technologies Used

### Frontend

- React
- Material UI
- React Router
- Axios
- Google OAuth

### Backend

- FastAPI
- SQLAlchemy
- SQLite
- JWT Authentication
- Google OAuth Authentication

### AI & NLP

- Sentence Transformers
- FAISS
- Retrieval-Augmented Generation (RAG)
- Large Language Model (LLM)

---

## Project Structure

```
AI-COMPANY-BRAIN/

│
├── frontend/
│   ├── src/
│   ├── pages/
│   ├── components/
│   └── services/
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── core/
│   │   └── main.py
│
└── README.md
```

---

## Workflow

1. User logs into the application.
2. Documents are uploaded.
3. Text is extracted from documents.
4. Documents are split into smaller chunks.
5. Embeddings are generated for every chunk.
6. Embeddings are stored inside FAISS.
7. User submits a question.
8. The question is converted into an embedding.
9. FAISS retrieves the most relevant document chunks.
10. Retrieved context is sent to the LLM.
11. The LLM generates the final response.

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Authentication

- Email & Password Authentication
- JWT Token Authentication
- Google OAuth Sign-In

---

## Future Enhancements

- Multi-user collaboration
- Role-Based Access Control (RBAC)
- Document versioning
- Multi-language document support
- Hybrid Search (Keyword + Semantic Search)
- Local LLM support (Offline Deployment)
- Advanced analytics dashboard

---

## Applications

- Enterprise Knowledge Management
- HR Policy Assistant
- Company Documentation Search
- Employee Onboarding
- Internal Help Desk
- Technical Documentation Assistant

---

## Contributors

- Charan Tallada
- D Cheran
- Manu
- Manish Reddy

---

## License

This project is developed for educational and hackathon purposes.
