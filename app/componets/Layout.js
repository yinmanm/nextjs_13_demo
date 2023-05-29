'use client';
import Header from './Header';
// import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';

export default function Layout({children}) {

  // const { data:session } = useSession();
  // const router = useRouter();
  // const pathname = usePathname();
  // const not_need_redirect_url = ['/', '/sign_in', '/sign_up', '/callback'];

  return (
    <div className="">
      <Header />
      <main className=''>{children}</main>
    </div>
  )

  if(not_need_redirect_url.includes(pathname) || session) {
    return (
      <div className="">
        <Header />
        <main className=''>{children}</main>
      </div>
    )
  } else {
    // router.push('/sign_in')
    <div className="">
      <Header />
      <main className=''>{children}</main>
    </div>
  }
  
}
