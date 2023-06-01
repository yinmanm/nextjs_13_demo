'use server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const result = await prisma.buyer.findMany({
    where: {
      chatGroups: {
        some: {
          id: Number(req)
        }  
      }
    }
  })
  console.log('result',result)
  return result;
}
