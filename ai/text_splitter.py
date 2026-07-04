def split_documents(documents, chunk_size=500, overlap=100):
    chunks = []

    for doc in documents:
        text = doc["text"]
        start = 0

        while start < len(text):
            end = start + chunk_size
            chunk = text[start:end]

            chunks.append({
                "filename": doc["filename"],
                "text": chunk
            })

            start += chunk_size - overlap

    return chunks