'use server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handel(req, res) {
  try {
    const result = await prisma.chatGroup.findMany({
      include: {
        user: {
          select: {
            email: true,
            name: true,
          }
        },
        chats: {
          include: {
            author: true
          }
        }
      }
    });
    console.log('api chatGroup list', result);
    return result;
  } catch(error) {
    console.log('api chatGroup list error', error)
  }
  
}
