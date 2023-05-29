'use server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  console.log('server: catches create req', req)
  const data = JSON.parse(req);
  const result = await prisma.catches.create({
    data: data
  })
  console.log('create result',result)
  return result;
}
