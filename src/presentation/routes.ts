import { Router } from "express"

export class AppRoutes {
  /**
   * Si no vamos a hacer inyección de dependencias, podemos usar el método estático
   */
  static get routes(): Router {
    const router = Router()
    return router
  }
}
