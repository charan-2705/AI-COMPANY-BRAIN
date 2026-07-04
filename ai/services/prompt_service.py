def build_prompt(query, retrieved_chunks):
    """
    Builds a prompt using retrieved document chunks.
    """

    context = "\n\n".join([chunk["text"] for chunk in retrieved_chunks])

    prompt = f"""
You are an AI assistant for answering questions based only on the company documents.

Context:
{context}

Question:
{query}

Instructions:
- Answer only using the provided context.
- If the answer is not found, reply:
  "The information is not available in the uploaded documents."

Answer:
"""

    return prompt