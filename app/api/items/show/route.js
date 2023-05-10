import { NextResponse } from 'next/server';
import items from '../data.json';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  console.log(query)
  const filteredItems = items.filter((course) => {
    return course.id == query;
  });
  console.log(filteredItems)
  return NextResponse.json(filteredItems);
}

