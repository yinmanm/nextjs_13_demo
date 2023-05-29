'use client';
import { useSearchParams } from 'next/navigation';
import getToken from '../api/user/getToken';

export default async function Callback() {

  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  if(code) {
    console.log('code',code)
    const res = getToken(code);
    // console.log('res',res);
  }

  return (
    <div>
    </div>
  )
}