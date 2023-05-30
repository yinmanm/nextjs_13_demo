'use server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handel(req, res) {
  const id = Number(req) || 0;
  try {
    const result = await prisma.chatGroup.findFirst({
      where: {
        id: id
      },
      include: {
        user: {
          select: {
            email: true,
            name: true,
          }
        },
        chats: {
          include: {
            author: true,
          }
        }
      }
    });
    console.log('api chatGroup show', result);
    return result;
  } catch(error) {
    console.log('api chatGroup show error', error)
  }
  
}
