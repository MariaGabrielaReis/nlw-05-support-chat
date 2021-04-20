import express, { request, response } from "express";
import "./database";

const app = express();

/* MÉTODOS HTTP QUE VAMOS USAR
  GET = busca
  POST = criação
  PUT = alteração
  DELETE = exclusão
  PATCH = alterar informação específica
*/

app.get("/", (request, response) => {
  return response.json({
    message: "Olá, NLW 05!"
  })
})

app.post("/", (request, response) => {
  return response.json({
    message: "Usuário salvo com sucesso!"
  })
})

app.listen(3333, () => console.log("Servidor rodando na porta 3333"))