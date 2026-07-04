from embeddings.embedder import get_embedding
from vector_db.faiss_store import search_faiss
from services.gemini_service import ask_gemini


def ask_rag(question):
    # Convert question to embedding
    query_embedding = get_embedding(question)

    # Retrieve relevant chunks from FAISS
    relevant_chunks = search_faiss(query_embedding)

    # Build context
    context = "\n".join(relevant_chunks)

    # Create final prompt
    prompt = f"""
Context:
{context}

Question:
{question}

Answer only using the context above.
"""

    # Send to Gemini
    answer = ask_gemini(prompt)

    return answer