import { Request, Response } from "express"
import { SettingsService } from "../services/SettingsService"

/**
 * TIPOS DE PARÂMETROS
 * Routes Params: parâmetros de rotas (/settings/1)
 * Query Params: Filtros e buscas (/settings?search=blablabla)
 * Body Params: vem no corpo da requisição (json)
 */

class SettingsController {
  async create(request: Request, response: Response) {
    const { chat, username } = request.body;

    const settingsService = new SettingsService()

    try {

      const settings = await settingsService.create({chat, username})
      return response.json(settings)

    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}

export { SettingsController }