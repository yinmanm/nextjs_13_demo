'use client';
import Header from './Header';
import { useUser } from '@clerk/nextjs';
import { useRouter, usePathname } from 'next/navigation';

export default function Layout({children}) {

  const publicUrl = ['/', '/sign_in'];

  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  if (pathname!= '/' && pathname!= '/sign_in' && isLoaded && !isSignedIn) {
    router.push(`/sign_in?redirectUrl=${pathname}`);
  }

  return (
    <body className="min-h-screen flex flex-col">
      <Header />
      <main className='flex-1 flex flex-col'>{children}</main>
    </body>
  )

}
