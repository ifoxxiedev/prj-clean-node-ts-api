import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient;

export class PrismaConnector {
  static async connect(): Promise<void> {
    if (prisma) return;

    prisma = new PrismaClient();
    await prisma.$connect();
  }

  static async disconnect(): Promise<void> {
    if (!prisma) return;
    await prisma.$disconnect()
    prisma = undefined;
  }

  static getClient(): PrismaClient {
    if (!prisma) {
      throw new Error('Cannot get prisma client, connect into db first!')
    }

    return prisma;
  }
}