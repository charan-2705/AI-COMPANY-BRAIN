from sqlalchemy.orm import Session

from app.models.user import User
from app.schemas.user import UserCreate
from app.core.security import (
    hash_password,
    verify_password,
    create_access_token,
)
from google.oauth2 import id_token
from google.auth.transport import requests

GOOGLE_CLIENT_ID = "750544393804-pj86bmv70eo8m5fccq5si1v1365b0seu.apps.googleusercontent.com"

def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()


def register_user(db: Session, user: UserCreate):
    # Check if user already exists
    existing_user = get_user_by_email(db, user.email)

    if existing_user:
        return None

    # Create new user
    new_user = User(
        name=user.name,
        email=user.email,
        password=hash_password(user.password),
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


def authenticate_user(db: Session, email: str, password: str):
    user = get_user_by_email(db, email)

    if not user:
        return None

    if not verify_password(password, user.password):
        return None

    return user


def login_user(db: Session, email: str, password: str):
    user = authenticate_user(db, email, password)

    if not user:
        return None

    access_token = create_access_token(
        data={"sub": user.email}
    )

    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "id": user.id,
            "name": user.name,
            "email": user.email,
        },
    }



def google_login(db: Session, credential: str):
    try:
        idinfo = id_token.verify_oauth2_token(
            credential,
            requests.Request(),
            GOOGLE_CLIENT_ID,
        )

        email = idinfo["email"]
        name = idinfo.get("name", "Google User")

    except Exception:
        return None

    user = get_user_by_email(db, email)

    if not user:
        user = User(
            name=name,
            email=email,
            password="GOOGLE_ACCOUNT",
        )

        db.add(user)
        db.commit()
        db.refresh(user)

    access_token = create_access_token(
        data={"sub": user.email}
    )

    return {
    "access_token": access_token,
    "token_type": "bearer",
    "user": {
        "name": user.name,
        "email": user.email,
    },
}