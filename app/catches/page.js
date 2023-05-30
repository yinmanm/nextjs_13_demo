// 'use client';
import Link from 'next/link';
import getCatchListApi from '../api/catches/list';

export default async function Catches() {

  const catchesList = await getCatchListApi() || [];
  console.log('catchesList',catchesList)

  return (
    <div>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto py-8 md:py-14'>
          <h2 className="text-base sm:text-2xl font-semibold leading-7 sm:leading-tight text-gray-900">Your catches</h2>
          <ul role="list" className="mt-6 space-y-3">
            {catchesList.length == 0 ? (
              <li className='block w-full rounded-lg border-2 border-dashed border-gray-300 py-12 text-center text-gray-600'>There no data</li>
            ) : (
              catchesList.map((catchItem,index) => (
              <li key={catchItem.id} className="rounded-lg shadow">
                <div
                  className="relative flex items-center space-x-3 rounded-lg bg-white px-6 py-5 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                >
                  <div className="min-w-0 flex-1">
                    <a href={`/catches/show/${catchItem.id}`} className="focus:outline-none">
                      <p className="text-sm font-medium text-gray-900">{catchItem.buyer.email}</p>
                      <p className="mt-1 truncate text-sm text-gray-500">{JSON.stringify(catchItem.data_landed)}</p>
                      <div className="overflow-x-auto">
                        <div className="inline-block min-w-full py-2 align-middle">
                          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
                            <table className="min-w-full divide-y divide-gray-300">
                              <thead className="bg-gray-50">
                                <tr>
                                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-gray-500">
                                    Category
                                  </th>
                                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-normal text-gray-500">
                                    Description
                                  </th>
                                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-normal text-gray-500">
                                    Quantity
                                  </th>
                                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-normal text-gray-500">
                                    Price
                                  </th>
                                  <th scope="col" className="py-3.5 pr-4 pl-3 text-right text-sm font-normal text-gray-500">
                                    Total
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-200 bg-white">
                                { catchItem.item.map((item,index) => (
                                  <tr key={index}>
                                    <td className="py-4 pl-4 pr-3 text-sm text-gray-500">
                                      {item.categoryName}
                                    </td>
                                    <td className="px-3 py-4 text-sm text-gray-500">{item.description}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.quantity} kg</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${item.price}/kg</td>
                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium">
                                      ${item.total}
                                    </td>
                                  </tr>)
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
            ))
            )}
          </ul>
          <div className="mt-6">
            <Link href="/catches/new" className='block w-full rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold text-white text-center shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              Create new catch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
