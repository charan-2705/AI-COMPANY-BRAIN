from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.database import Base, engine
from app.models.user import User

# Import routers
from app.api.auth import router as auth_router
# from app.api.upload import router as upload_router
# from app.api.chat import router as chat_router
# from app.api.documents import router as documents_router

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="CortexAI Backend",
    description="Backend API for CortexAI",
    version="1.0.0",
)

# Allow React frontend to connect
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

# Register routers
app.include_router(
    auth_router,
    prefix="/api/auth",
    tags=["Authentication"],
)

# Uncomment these after implementing them
# app.include_router(upload_router, prefix="/api/upload", tags=["Upload"])
# app.include_router(chat_router, prefix="/api/chat", tags=["Chat"])
# app.include_router(documents_router, prefix="/api/documents", tags=["Documents"])


@app.get("/")
def root():
    return {
        "message": "Welcome to CortexAI Backend",
        "status": "Running",
        "version": "1.0.0",
    }


@app.get("/health")
def health():
    return {
        "status": "Healthy",
        "service": "FastAPI Backend",
    }


@app.get("/api")
def api_info():
    return {
        "project": "CortexAI",
        "description": "Enterprise Knowledge Assistant Backend",
    }