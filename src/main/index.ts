import { PrismaConnector } from "@src/infra/db/prisma/connector"

const main = async () => {
  await PrismaConnector.connect()
}

main();