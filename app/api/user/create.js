'use server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  console.log('req',req)
  const result = await prisma.user.create({
    data: JSON.parse(req)
  })
  console.log('create user api',result)
  return result;
}
