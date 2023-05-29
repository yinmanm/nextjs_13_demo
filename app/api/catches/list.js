'use server';
import prisma from "../prisma";

export default async function handel(req, res) {
  try {
    const result = await prisma.catches.findMany({
      include: {
        buyer: {
          select: {
            email: true
          }
        },
        item: true,
      }
    });
    console.log('api catches list', result);
    return result;
  } catch(error) {
    console.log('api catches list error', error)
  }
  
}
