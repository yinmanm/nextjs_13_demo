'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Loading from '../componets/Loading';

export default function Items() {

  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/items/search?query=${query}`);
    const items = await res.json();
    setItems(items);
  };

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch('/api/items');
      const data = await res.json();
      setItems(data);
      setLoading(false);
    };

    fetchItems();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='max-w-xl mx-auto pt-8 md:pt-14'>
        <form onSubmit={handleSubmit} className=''>
          <div>
            <div className="mt-2 flex rounded-md shadow-sm">
              <div className="relative flex flex-grow items-stretch focus-within:z-10">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                </div>
                <input
                  type='text'
                  className='block w-full rounded-none rounded-l-md border-0 py-4 pl-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
                  placeholder='Search Items...'
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <button type="submit" className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-6 py-2 font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 bg-gray-50 hover:bg-gray-100">
                Search
              </button>
            </div>
          </div>
        </form>
        </div>
      </div>

      <ul role="list" className="mt-8 md:mt-14 divide-y divide-gray-100 pb-16">
        {items.map((person) => (
          <li key={person.email} className="relative py-5 hover:bg-gray-50">
            <Link 
              href={`/item/${person.id}`}
              className="block"
              >
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="mx-auto flex max-w-4xl justify-between gap-x-6">
                  <div className="flex gap-x-4">
                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        <span className="absolute inset-x-0 -top-px bottom-0" />
                        {person.name}
                      </p>
                      <p className="mt-1 flex text-xs leading-5 text-gray-500">
                        <a href={`mailto:${person.email}`} className="relative truncate hover:underline">
                          {person.email}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">{person.role}</p>
                      {person.lastSeen ? (
                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                        </p>
                      ) : (
                        <div className="mt-1 flex items-center gap-x-1.5">
                          <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          </div>
                          <p className="text-xs leading-5 text-gray-500">Online</p>
                        </div>
                      )}
                    </div>
                    <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  )
}
