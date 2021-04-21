import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"


class UsersService {
  async create(email: string){
    
    const usersRepository = getCustomRepository(UsersRepository)

    const userExists = await usersRepository.findOne({email})
    
    //verificar se usuário existe
    if(userExists) {
      //se existir, retorna user
      return userExists
    } 

    //se não existir, cadastra no banco
    const user = usersRepository.create({email})
    
    await usersRepository.save(user)

    return user;
    
  }
}

export { UsersService }