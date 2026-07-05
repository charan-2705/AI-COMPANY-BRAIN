import os
from pypdf import PdfReader
from docx import Document

DOCUMENTS_FOLDER = "uploads"


def read_pdf(file_path):
    text = ""
    reader = PdfReader(file_path)

    for page in reader.pages:
        page_text = page.extract_text()
        if page_text:
            text += page_text + "\n"

    return text


def read_docx(file_path):
    doc = Document(file_path)
    return "\n".join([para.text for para in doc.paragraphs])


def read_txt(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        return f.read()


def load_documents():
    documents = []

    # Create documents folder if it doesn't exist
    if not os.path.exists(DOCUMENTS_FOLDER):
        os.makedirs(DOCUMENTS_FOLDER)
        print("Created documents folder.")
        return documents

    files = os.listdir(DOCUMENTS_FOLDER)

    if len(files) == 0:
        print("No documents found.")
        return documents

    for filename in files:
        path = os.path.join(DOCUMENTS_FOLDER, filename)

        try:
            if filename.endswith(".pdf"):
                text = read_pdf(path)

            elif filename.endswith(".docx"):
                text = read_docx(path)

            elif filename.endswith(".txt"):
                text = read_txt(path)

            else:
                continue

            if text.strip():
                documents.append({
                    "filename": filename,
                    "text": text
                })

        except Exception as e:
            print(f"Skipping {filename}: {e}")

    return documents