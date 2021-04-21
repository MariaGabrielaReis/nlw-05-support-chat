import { getCustomRepository, Repository } from "typeorm"
import { Setting } from "../entities/Setting"
import { SettingsRepository } from "../repositories/SettingsRepository"

interface ISettingsCreate {
  chat: boolean,
  username: string
}

class SettingsService {
  private settingsRepository: Repository<Setting>

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository)
  }

  async create({chat, username}: ISettingsCreate) {
    //verificação se o usuário existe
    const userAlreadyExists = await this.settingsRepository.findOne({username})

    if(userAlreadyExists){
      throw new Error("Usuário já existe!");
      
    }
    //criação de instância na tabela settings
    const settings = this.settingsRepository.create({
      chat,
      username
    })

    await this.settingsRepository.save(settings)

    return settings
  }
}

export { SettingsService }