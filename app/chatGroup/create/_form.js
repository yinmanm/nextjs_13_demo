'use client';
import { useState, useEffect } from "react";

export default async function ChatGroupForm({ buyerList, create, search }) {

  const [chatGroupName, setChatGroupName] = useState('');
  const [filterBuyerList, setFilterBuyerList] = useState([...buyerList] || []);
  const [selectedBuyerList, setSelectedBuyerList] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchClick = async (e) => {
    // setFilterBuyerList(await search(e.target.value));
  }

  const createSubmit = async (e) => {
    if(selectedBuyerList.length==0 || !chatGroupName) {
      return
    }
    try {
      setLoading(true);
      e.preventDefault();
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={createSubmit} action="#" className="flex-1 flex flex-col">
      <div className='pb-5 px-4 sm:px-6 border-b border-gray-100'>
        <input
          type="text"
          name="buyer_name"
          id="buyer_name"
          onChange={searchClick}
          className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          placeholder="Search"
        />
        {selectedBuyerList.map(buyer => (
          <div className="pt-3 inline-block w-20 truncate text-xs leading-none mr-2" key={buyer.id}>{buyer.email}</div>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto">
        <ul role="list" className='divide-y divide-gray-100 py-4 px-4 sm:px-6'>
          {filterBuyerList.length == 0 ? (
            <div className="py-6 text-center text-gray-500">no data</div>
          ) : (
            filterBuyerList.map((buyer) => (
              <li key={buyer.id} className='py-3'>
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      name="buyer"
                      type="checkbox"
                      id={buyer.id}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label htmlFor={buyer.id} className="font-medium text-gray-900 cursor-pointer">
                      {buyer.email}
                    </label>
                  </div>
                </div>

              </li>
            ))
          )}
        </ul>
      </div>

      <div className="pt-3 px-4 sm:px-6 space-y-3">
        <input
          type="text"
          name="chat_group_name"
          id="chat_group_name"
          value={chatGroupName}
          className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          placeholder="chatGroup Name"
        />
        <button
          type="submit"
          disabled={loading}
          className="block w-full rounded-md bg-indigo-600 py-2.5 text-sm font-semibold text-white shadow-sm text-center hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create
        </button>
      </div>
    </form>
  )
}