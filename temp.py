from langchain_openai import ChatOpenAI
import os

os.environ["OPENAI_API_KEY"] = "EMPTY"  # Set to empty string to use local models
os.environ["OPENAI_API_BASE"] = "http://localhost:8000/v1"

llm = ChatOpenAI(
    model="Qwen/Qwen3-235B-A22B-GPTQ-Int4",
    temperature=0,
    max_tokens=32000,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0
    # api_key="...",  # if you prefer to pass api key in directly instaed of using env vars
    # base_url="...",
    # organization="...",
    # other params...
)

response = llm.invoke(
    "What is the capital of France?",
    stop=["."],
    stream=False,
)
print("response:", "_" + response.content + "_")