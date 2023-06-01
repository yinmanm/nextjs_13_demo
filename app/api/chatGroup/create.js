'use server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handel(req, res) {
  const data = JSON.parse(req);
  console.log('create chatGroup data', data)
  try {
    const result = await prisma.chatGroup.create({
      data: data
    });
    console.log('api chatGroup create', result);
    return result;
  } catch(error) {
    console.log('api chatGroup create error', error)
  }
  
}
