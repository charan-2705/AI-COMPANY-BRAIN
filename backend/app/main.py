from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.database import Base, engine

# Models
from app.models.user import User
from app.models.document import Document
from app.models.chat import Chat

# Routers
from app.api.auth import router as auth_router
from app.api.upload import router as upload_router
from app.api.documents import router as documents_router
from app.api.chat import router as chat_router

# Create all database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="CortexAI Backend",
    description="Enterprise Knowledge Assistant",
    version="1.0.0",
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Routers
app.include_router(
    auth_router,
    prefix="/api/auth",
    tags=["Authentication"],
)

app.include_router(
    upload_router,
    prefix="/api/upload",
    tags=["Upload"],
)

app.include_router(
    documents_router,
    prefix="/api/documents",
    tags=["Documents"],
)

app.include_router(
    chat_router,
    prefix="/api/chat",
    tags=["AI Chat"],
)

# Root
@app.get("/")
def root():
    return {
        "message": "Welcome to CortexAI Backend",
        "status": "Running"
    }

# Health Check
@app.get("/health")
def health():
    return {
        "status": "Healthy"
    }