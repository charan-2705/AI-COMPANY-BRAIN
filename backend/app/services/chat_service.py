from app.services.rag_service import ask_rag

def chat_with_ai(question: str):
    result = ask_rag(question)

    return {
        "answer": result["answer"],
        "source": result["source"]
    }