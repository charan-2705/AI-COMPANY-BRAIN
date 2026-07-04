from app.services.gemini_service import generate_response

def chat_with_ai(question: str):
    answer = generate_response(question)
    return {
        "answer": answer
    }