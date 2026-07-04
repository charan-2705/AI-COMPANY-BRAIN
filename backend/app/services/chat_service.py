from app.services.rag_service import ask_rag

def chat_with_ai(question: str):
    answer = ask_rag(question)

    return {
        "answer": answer
    }