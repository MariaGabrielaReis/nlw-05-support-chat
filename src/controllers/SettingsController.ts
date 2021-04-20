import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import { SettingsRepository } from "../repositories/SettingsRepository"

/**
 * TIPOS DE PARÂMETROS
 * Routes Params: parâmetros de rotas (/settings/1)
 * Query Params: Filtros e buscas (/settings?search=blablabla)
 * Body Params: vem no corpo da requisição (json)
 */

class SettingsController {
  async create(request: Request, response: Response) {
    const { chat, username } = request.body;
    const settingsRepository = getCustomRepository(SettingsRepository)

    const settings = settingsRepository.create({
      chat,
      username
    })

    await settingsRepository.save(settings)

    return response.json(settings)
    }
}

export { SettingsController }