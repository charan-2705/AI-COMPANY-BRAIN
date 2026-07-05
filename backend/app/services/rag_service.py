from app.document_loader import load_documents
from app.text_splitter import split_documents

from app.services.embedding_service import create_embeddings
from app.services.vector_store import VectorStore
from app.services.prompt_service import build_prompt
from app.services.llm_service import ask_llm

from sentence_transformers import SentenceTransformer


embedding_model = SentenceTransformer("all-MiniLM-L6-v2")

documents = load_documents()
chunks = split_documents(documents) if documents else []

vector_store = None

if chunks:
    embeddings = create_embeddings(chunks)
    vector_store = VectorStore()
    vector_store.build_index(embeddings, chunks)


def ask_rag(query: str):
    if query.lower().strip() in ["hi", "hello", "hey"]:
        return "Hello! How can I help you today?"

    if vector_store is None or not chunks:
        return "No documents have been uploaded yet."

    query_embedding = embedding_model.encode(query)
    retrieved_chunks = vector_store.search(query_embedding, k=3)

    prompt = build_prompt(query, retrieved_chunks)
    return ask_llm(prompt)