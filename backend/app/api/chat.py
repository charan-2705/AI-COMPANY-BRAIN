from fastapi import APIRouter
from app.schemas.chat import ChatRequest, ChatResponse
from app.services.chat_service import chat_with_ai

router = APIRouter()

@router.post("/", response_model=ChatResponse)
def chat(request: ChatRequest):
    return chat_with_ai(request.question)