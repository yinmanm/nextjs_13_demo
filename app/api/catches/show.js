'use server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const id = Number(req) || 0;
  try {
    const result = await prisma.catches.findFirst({
      where: {
        id: id
      },
      include: {
        buyer: {
          select: {
            email: true,
          }
        },
        item: true
      }
    })
    console.log('find result',result)
    return result;
  } catch(error) {
    res.status(400).json({message: 'something is wrong'})
  }
  
}
