'use server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handel(req, res) {
  const data = JSON.parse(req);
  try {
    const result = await prisma.chat.create({
      data: data
    });
    console.log('api chat create', result);
    return result;
  } catch(error) {
    console.log('api chat create error', error)
  }
  
}
