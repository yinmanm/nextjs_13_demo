'use server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const data = JSON.parse(req);
  const result = await prisma.item.create({
    data: data,
    include: {
      catches: true
    }
  })
  console.log('create result',result)
  return result;
}
