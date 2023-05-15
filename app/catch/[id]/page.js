'use client';
import { useState, useEffect } from 'react';

const ItemShowPage = ({ params: { id } }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      // const res = await fetch(`/api/items/show?query=${id}`);
      // const data = await res.json();
      // setItems(data);
    };

    fetchItems();
  }, id);

  return (
    <>
      {items.map((person) => (
        <main className="py-24">
          <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
            <div className="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{person.name}</h1>
            </div>
          </div>
      
          <section aria-labelledby="recent-heading" className="mt-16">
            <h2 id="recent-heading" className="sr-only">Recent orders</h2>
            <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
              <div className="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
                <div className="border-b border-t border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border">
                  <ul role="list" className="divide-y divide-gray-200">
                    <li className="p-4 sm:p-6">
                      <div className="flex items-center sm:items-start">
                        <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:h-20 sm:w-20">
                          <img src={person.imageUrl} alt={person.imageUrl} className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="ml-6 flex-1 text-sm">
                          <div className="font-medium text-gray-900 sm:flex sm:justify-between">
                            <h5>{person.name}</h5>
                            <p className="mt-2 sm:mt-0">{person.role}</p>
                          </div>
                          <p className="hidden text-gray-500 sm:mt-2 sm:block">{person.email}</p>
                          {person.lastSeen ? (
                            <>
                              <p className="hidden text-gray-500 sm:mt-2 sm:block">{person.lastSeen}</p>
                              <p className="hidden text-gray-500 sm:mt-2 sm:block">{person.lastSeenDateTime}</p>
                            </>
                          ) : (
                            <div className="mt-2 flex items-center gap-x-1.5">
                              <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                              </div>
                              <p className="text-xs leading-5 text-gray-500">Online</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
      )
      )}
    </>
  );
};

export default ItemShowPage;
