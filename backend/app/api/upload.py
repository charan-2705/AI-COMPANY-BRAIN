from fastapi import APIRouter, Depends, UploadFile, File
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.services.upload_service import save_document
from app.schemas.document import DocumentResponse

router = APIRouter()


@router.post("/", response_model=DocumentResponse)
def upload_file(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):
    return save_document(db, file)