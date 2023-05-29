'use server';
import prisma from "../prisma";

export default async function handel(req, res) {
  const result = await prisma.category.findMany();
  console.log('api category list', result);
  return result;
}
