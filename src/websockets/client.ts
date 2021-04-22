import { io } from "../http";
import { ConnectionsService } from "../services/ConnectionsService";
import { UsersService } from "../services/UsersService";

io.on("connect", (socket) => {
  const connectionsService = new ConnectionsService();
  const usersService = new UsersService();

  socket.on("client_first_access", async (params) => {
    const socket_id = socket.id;

    const { text, email } = params;

    const userExists = await usersService.findByEmail(email);

    //salvar a conexão com user_id e socket_id
    if (!userExists) {
      //cria o usuário, se ele não existir, junto com a conexão dele
      const user = await usersService.create(email);

      await connectionsService.create({
        socket_id,
        user_id: user.id,
      });
    } else {
      const connection = await connectionsService.findByUserId(userExists.id);

      if (!connection) {
        //se existir usuário mas não tiver nenhuma conexão ainda
        await connectionsService.create({
          socket_id,
          user_id: userExists.id,
        });
      } else {
        //vai sobrescrever o id do socket caso já exista conexão daquele usuário
        connection.socket_id = socket_id;
        await connectionsService.create(connection);
      }
    }
  });
});
