import "dotenv/config"
import { get } from "env-var"
interface DatabaseConfiguration {
  url: string
  dbName: string
}
interface Config {
  port: number
  database: Record<string, DatabaseConfiguration>
  libs: Record<string, any>
}
export const envs: Config = {
  port: get("PORT").required().asPortNumber(),
  database: {
    mongo: {
      url: get("MONGO_URL").required().asString(),
      dbName: get("MONGO_DATABASE").required().asString(),
    },
  },
  libs: {
    jwt: {
      secret: get("JWT_SECRET").required().asString(),
    },
  },
}
