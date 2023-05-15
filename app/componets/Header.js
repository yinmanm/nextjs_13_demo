'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import classNames from "classnames";

const Header = () => {

  const [navOpen, setNavOpen] = useState(false);

  const pathname = usePathname();

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
                    Create a Buyer
                </Link>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div as="div" className="relative ml-3">
                <div>
                  <button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => setNavOpen(!navOpen)}>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
                {navOpen && (
                  <div
                  className="transition ease-out duration-200 hidden sm:block">
                    <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div>
                        <Link 
                          href="/profile/edit"
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                          >
                          Your Profile
                        </Link>
                      </div>
                      <div>
                        <Link 
                          href="/sign_in"
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                          >
                          Sign in
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
                
              </div>
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
                  Create a Buyer
              </Link>
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">Tom Cook</div>
                  <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <Link 
                  href="/profile/edit"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  >
                  Your Profile
                </Link>
                <Link 
                  href="/sign_in"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};
export default Header;