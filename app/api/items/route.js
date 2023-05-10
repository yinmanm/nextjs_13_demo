import { NextResponse } from 'next/server';
import items from './data.json';

export async function GET(request) {
  return NextResponse.json(items);
}

export async function POST(request) {
  const { name, email, role, imageUrl, href, lastSeen, lastSeenDateTime } = await request.json();

  const newItem = {
    id,
    name,
    email,
    role,
    imageUrl,
    href,
    lastSeen,
    lastSeenDateTime,
  };

  items.push(newItem);

  return NextResponse.json(items);
}
