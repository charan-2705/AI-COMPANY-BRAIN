from services.gemini_service import ask_gemini

while True:
    question = input("Ask something: ")

    if question.lower() == "exit":
        break

    response = ask_gemini(question)
    print(response)