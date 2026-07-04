import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "sqlite:///./companybrain.db"
)

SECRET_KEY = os.getenv(
    "SECRET_KEY",
    "your_super_secret_key"
)

ALGORITHM = os.getenv(
    "ALGORITHM",
    "HS256"
)

ACCESS_TOKEN_EXPIRE_MINUTES = int(
    os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 60)
)

AI_SERVICE_URL = os.getenv(
    "AI_SERVICE_URL",
    "http://localhost:8001"
)