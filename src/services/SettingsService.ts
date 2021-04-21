import { getCustomRepository } from "typeorm"
import { SettingsRepository } from "../repositories/SettingsRepository"

interface ISettingsCreate {
  chat: boolean,
  username: string
}

class SettingsService {
  async create({chat, username}: ISettingsCreate) {
    const settingsRepository = getCustomRepository(SettingsRepository)

    //verificação se o usuário existe
    const userAlreadyExists = await settingsRepository.findOne({username})

    if(userAlreadyExists){
      throw new Error("Usuário já existe!");
      
    }
    //criação de instância na tabela settings
    const settings = settingsRepository.create({
      chat,
      username
    })

    await settingsRepository.save(settings)

    return settings
  }
}

export { SettingsService }