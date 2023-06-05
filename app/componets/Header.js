'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs/app-beta/client';
import { SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import classNames from "classnames";

const Header = () => {

  const pathname = usePathname();
  const user = useUser();

  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  return (
    <div className="bg-white shadow">
      <>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-8 w-auto lg:hidden"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link 
                  href="/"
                  className={classNames(pathname =='/' ? "border-indigo-500" : "border-transparent hover:border-gray-300 hover:text-gray-700", "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-900")}>
                  Home
                </Link>
                <Link 
                  href="/catches"
                  className={classNames(pathname == '/catches' ? "border-indigo-500" : "border-transparent hover:border-gray-300 hover:text-gray-700", "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-900")}>
                  Catches
                </Link>
                <Link 
                  href="/buyer/new"
                  className={classNames(pathname.startsWith('/buyer/new') ? "border-indigo-500" : "border-transparent hover:border-gray-300 hover:text-gray-700", "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-900")}>
                    Create a buyer
                </Link>
                <Link 
                  href="/chatGroup/new"
                  className={classNames(pathname.startsWith('/chatGroup/new') ? "border-indigo-500" : "border-transparent hover:border-gray-300 hover:text-gray-700", "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-900")}>
                    Create a chatGroup
                </Link>
                <Link 
                  href="/dashboard"
                  className={classNames(pathname.startsWith('/dashboard') ? "border-indigo-500" : "border-transparent hover:border-gray-300 hover:text-gray-700", "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-900")}>
                    Dashboard
                </Link>
              </div>
            </div>
            <div className="hidden sm:flex sm:items-center sm:space-x-4 sm:ml-6">
              <SignedIn>
                {/* <div>{user?.emailAddresses}</div> */}
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton mode='modal'>
                  <button
                    type="button"
                    className="rounded bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setNavOpen(!navOpen)}>
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        { navOpen && (
          <div className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <Link 
                href="/"
                className={classNames(pathname =='/' ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700', "block border-l-4  py-2 pl-3 pr-4 text-base font-medium")}
                >
                  Home
              </Link>
              <Link 
                href="/catches"
                className={classNames(pathname.startsWith('/catches') ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700', "block border-l-4  py-2 pl-3 pr-4 text-base font-medium")}
                >
                  Catches
              </Link>
              <Link 
                href="/buyer/new"
                className={classNames(pathname.startsWith('/buyer/new') ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700', "block border-l-4  py-2 pl-3 pr-4 text-base font-medium")}
                >
                  Create a buyer
              </Link>
              <Link 
                href="/chatGroup/new"
                className={classNames(pathname.startsWith('/chatGroup/new') ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700', "block border-l-4  py-2 pl-3 pr-4 text-base font-medium")}
                >
                  Create a chatGroup
              </Link>
              <Link 
                href="/dashboard"
                className={classNames(pathname.startsWith('/dashboard') ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700', "block border-l-4  py-2 pl-3 pr-4 text-base font-medium")}
                >
                  Dashboard
              </Link>
              <SignedIn>
                <div 
                  className='text-gray-500 block py-2 px-4 text-base font-medium'
                  >
                    {/* {user?.emailAddresses} */}
                </div>
              </SignedIn>
              <SignedOut>
                <SignInButton mode='modal'>
                  <div 
                    className='block mx-4 rounded bg-indigo-600 px-4 py-2 text-sm font-semibold text-white text-center shadow-sm'
                    >
                      Sign in
                  </div>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        )}
      </>
    </div>
  );
};
export default Header;