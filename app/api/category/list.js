'use server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handel(req, res) {
  const result = await prisma.category.findMany();
  console.log('api category list', result);
  return result;
}
