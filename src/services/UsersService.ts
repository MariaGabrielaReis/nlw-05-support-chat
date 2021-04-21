import { getCustomRepository,Repository } from "typeorm"
import { User } from "../entities/User"
import { UsersRepository } from "../repositories/UsersRepository"


class UsersService {
  private usersRepository: Repository<User>

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository)
  }

  async create(email: string){
    const userExists = await this.usersRepository.findOne({email})
    
    //verificar se usuário existe
    if(userExists) {
      //se existir, retorna user
      return userExists
    } 

    //se não existir, cadastra no banco
    const user = this.usersRepository.create({email})
    
    await this.usersRepository.save(user)

    return user;
    
  }
}

export { UsersService }