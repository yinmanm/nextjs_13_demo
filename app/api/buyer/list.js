'use server';
import prisma from "../prisma";

export default async function handler(req, res) {
  const result = await prisma.buyer.findMany()
  console.log('result',result)
  return result;
}
