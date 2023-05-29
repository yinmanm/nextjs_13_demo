'use server';
import prisma from "../prisma";

export default async function handler(req, res) {
  console.log('server: catches create req', req)
  const data = JSON.parse(req);
  const result = await prisma.catches.create({
    data: data
  })
  console.log('create result',result)
  return result;
}
