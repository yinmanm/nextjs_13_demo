'use server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handel(req, res) {
  console.log('req', req)
  const id = Number(req) || 1;
  try {
    const result = await prisma.chat.findMany({
      where: {
        chatGroupId: id
      },
      include: {
        author: true,
        chatGroup: {
          select: {
            title: true
          }
        }
      }
    });
    console.log('api chat list', result);
    return result;
  } catch(error) {
    console.log('api chat list error', error)
  }
  
}
