"use server";
import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/app-beta';

export default async function GET(req, res) {
  const user = await currentUser();

  if (!user) {
    return 'You are not login in!'
  }

  return user.emailAddress
}