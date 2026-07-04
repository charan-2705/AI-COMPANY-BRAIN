import ollama

MODEL_NAME = "gemma3:4b"      # Change if using another model

def ask_llm(prompt):
    response = ollama.chat(
        model=MODEL_NAME,
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response["message"]["content"]