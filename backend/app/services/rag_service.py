from app.document_loader import load_documents
from app.text_splitter import split_documents
from app.services.embedding_service import create_embeddings
from app.services.vector_store import VectorStore
from app.services.prompt_service import build_prompt
from app.services.llm_service import ask_llm

from sentence_transformers import SentenceTransformer

embedding_model = SentenceTransformer("all-MiniLM-L6-v2")

documents = []
chunks = []
vector_store = None


def reload_vector_store():
    global documents, chunks, vector_store

    documents = load_documents()
    chunks = split_documents(documents) if documents else []

    if chunks:
        embeddings = create_embeddings(chunks)
        vector_store = VectorStore()
        vector_store.build_index(embeddings, chunks)
    else:
        vector_store = None


reload_vector_store()


def ask_rag(query: str):
    if query.lower().strip() in ["hi", "hello", "hey"]:
        return {
            "answer": "Hello! How can I help you today?",
            "source": None
        }

    if vector_store is None or not chunks:
        return {
            "answer": "No documents have been uploaded yet.",
            "source": None
        }

    query_embedding = embedding_model.encode(query)
    retrieved_chunks = vector_store.search(query_embedding, k=3)

    prompt = build_prompt(query, retrieved_chunks)
    answer = ask_llm(prompt)

    source = retrieved_chunks[0]["filename"] if retrieved_chunks else None

    return {
        "answer": answer,
        "source": source
    }