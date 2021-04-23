import { http } from "./http";
import "./websockets/client";
import "./websockets/admin";

http.listen(3333, () => console.log("Servidor rodando na porta 3333"));
