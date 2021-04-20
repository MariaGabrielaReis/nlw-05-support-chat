import express from "express";
import "./database";
import { routes } from "./routes"

const app = express();

//habilita receber JSON do req.body
app.use(express.json())

app.use(routes)

/* MÉTODOS HTTP QUE VAMOS USAR
  GET = busca
  POST = criação
  PUT = alteração
  DELETE = exclusão
  PATCH = alterar informação específica
*/

app.listen(3333, () => console.log("Servidor rodando na porta 3333"))