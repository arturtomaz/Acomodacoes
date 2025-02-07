import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import json

# Comandos para rodar o backend:
# venv\Scripts\Activate
# uvicorn main:app --reload

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.mount("/images", StaticFiles(directory="images"), name="images")

with open("locations.json", "r", encoding="utf_8") as arquivo:
    dados = json.load(arquivo) #dados é um dicionário


@app.get("/")
def home():
    return "Home da página"

@app.get("/acomodacoes")
async def getAcomodacoes():
    return dados["data"]

@app.get("/acomodacoes/{id}") 
def getLocal(id: int):
    acomodacao = next((item for item in dados["data"] if item["id"] == id), None)
    if not acomodacao:
        raise HTTPException(status_code=404, detail="Acomodação não encontrada")
    return acomodacao


if __name__ == "__main__" :
    uvicorn.run(app, host="0.0.0.0", port=8000)