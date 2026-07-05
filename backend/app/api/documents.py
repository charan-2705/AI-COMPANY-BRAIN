from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.document import DocumentResponse
from app.services.upload_service import (
    get_documents,
    delete_document,
)

router = APIRouter()


@router.get("/", response_model=list[DocumentResponse])
def list_documents(db: Session = Depends(get_db)):
    return get_documents(db)


@router.delete("/{document_id}")
def remove_document(
    document_id: int,
    db: Session = Depends(get_db),
):
    result = delete_document(db, document_id)

    if result is None:
        raise HTTPException(
            status_code=404,
            detail="Document not found"
        )

    return result