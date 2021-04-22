import { io } from "../http";

io.on("connect", (socket) => {
  socket.on("client_first_access", (params) => {
    console.log(params);

    //salvar a conexão com user_id e socket_id
  });
});
