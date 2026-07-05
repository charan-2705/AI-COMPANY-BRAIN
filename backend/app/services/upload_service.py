import os
import shutil
from sqlalchemy.orm import Session

from app.models.document import Document
from app.services.rag_service import reload_vector_store

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


def save_document(db: Session, file):
    file_path = os.path.join(UPLOAD_DIR, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    document = Document(
        filename=file.filename,
        filepath=file_path,
        status="Indexed",
    )

    db.add(document)
    db.commit()
    db.refresh(document)

    reload_vector_store()

    return document


def get_documents(db: Session):
    return db.query(Document).all()

def delete_document(db: Session, document_id: int):
    document = db.query(Document).filter(Document.id == document_id).first()

    if not document:
        return None

    if os.path.exists(document.filepath):
        os.remove(document.filepath)

    db.delete(document)
    db.commit()

    return {"message": "Document deleted successfully"}