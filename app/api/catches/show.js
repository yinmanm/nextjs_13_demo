'use server';
import prisma from "../prisma";

export default async function handler(req, res) {
  try {
    const result = await prisma.catches.findFirst({
      where: {
        id: req
      },
      include: {
        item: true
      }
    })
    console.log('find result',result)
    return result;
  } catch(error) {
    res.status(400).json({message: 'something is wrong'})
  }
  
}
