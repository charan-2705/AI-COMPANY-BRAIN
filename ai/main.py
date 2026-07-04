from services.llm_service import ask_llm

while True:
    question = input("Ask something: ")

    if question.lower() == "exit":
        break

    response = ask_llm(question)
    print(response)