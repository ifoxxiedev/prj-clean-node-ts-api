import { PrismaConnector } from "@src/infra/db/prisma/connector"
import { setupExpress } from "@src/infra/http/express";

const main = async () => {
  await PrismaConnector.connect()
  setupExpress()
}

main();