from document_loader import load_documents
from text_splitter import split_documents
from services.embedding_service import create_embeddings
from services.vector_store import VectorStore
from services.prompt_service import build_prompt
from services.llm_service import ask_llm
from sentence_transformers import SentenceTransformer

embedding_model = SentenceTransformer("all-MiniLM-L6-v2")

documents = load_documents()
chunks = split_documents(documents)
embeddings = create_embeddings(chunks)

vector_store = VectorStore()
vector_store.build_index(embeddings, chunks)


def ask_rag(query):
    query_embedding = embedding_model.encode(query)
    retrieved = vector_store.search(query_embedding, k=3)
    prompt = build_prompt(query, retrieved)
    return ask_llm(prompt)