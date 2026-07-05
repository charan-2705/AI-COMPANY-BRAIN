from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.auth import GoogleLoginRequest
from app.services.auth_service import google_login

from app.core.database import get_db
from app.schemas.user import UserCreate, UserResponse
from app.schemas.auth import LoginRequest, Token
from app.services.auth_service import register_user, login_user

router = APIRouter()


@router.post("/register", response_model=UserResponse)
def register(user: UserCreate, db: Session = Depends(get_db)):
    new_user = register_user(db, user)

    if not new_user:
        raise HTTPException(
            status_code=400,
            detail="User already exists"
        )

    return new_user


@router.post("/login", response_model=Token)
def login(credentials: LoginRequest, db: Session = Depends(get_db)):
    token = login_user(
        db,
        credentials.email,
        credentials.password,
    )

    if not token:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    return {
        "access_token": token["access_token"],
        "token_type": token["token_type"],
    }
@router.post("/google")
def google_auth(request: GoogleLoginRequest, db: Session = Depends(get_db)):
    token = google_login(db, request.credential)

    if not token:
        raise HTTPException(status_code=401, detail="Google authentication failed")

    return token