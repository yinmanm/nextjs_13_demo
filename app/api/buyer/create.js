'use server';
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../prisma";

export default async function handler(req, res) {
  const result = await prisma.buyer.create({
    data: req
  })
  console.log('create result',result)
  return result;
}
