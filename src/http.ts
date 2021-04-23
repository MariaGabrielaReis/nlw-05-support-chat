import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

import "./database";
import { routes } from "./routes";

const app = express();

//habilita receber JSON do req.body
app.use(express.json());

//habilita o uso dos arquivos da pasta public
app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
});

app.get("/pages/admin", (request, response) => {
  return response.render("html/admin.html");
});

app.use(routes);

const http = createServer(app); //criando protocolo HTTP
const io = new Server(http); //criando protocolo websocket

io.on("connection", (socket: Socket) => {
  // console.log("Conectou, ", socket.id);
});

export { http, io };
