'use client';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
export default function CatchDetail({getCatchDetail, chatGroupList, submitShare}) {

  const params = useParams();
  const router = useRouter();

  const [detail, setDetail] = useState();
  const [open, setOpen] = useState(false);
  const [selectedList, setSelectedList] = useState([]);
  const [sendLoading, setSendLoading] = useState(false);

  const getDetail = async (id) => {
    setDetail(await getCatchDetail(id));
  }

  const checkboxChange = async (e) => {
    console.log(e);
    
    const value = e.target.value;
    const index = selectedList.indexOf(value);
    if(e.target.checked) {
      const newList = [...selectedList, value];
      setSelectedList([...selectedList, value]);
    } else {
      const filterList = selectedList.splice(index,1);
      setSelectedList(selectedList.splice(index,1));
    }
  }

  const shareHandel = async () => {
    console.log('selectedList===',selectedList);
    if(selectedList.length == 0) {
      return false;
    } 
    setSendLoading(true);
    const result = await submitShare(params.id, JSON.stringify(selectedList));
    console.log('result',result)
    if(result) {
      router.push('/dashboard');
    } else {
      setSendLoading(false);
    }
  }

  useEffect(()=>{
    if(params && params.id) {
      getDetail(params.id);
    }
  },[params.id])

  return (
    <div>
      <div className='px-4 sm:px-6 lg:px-8'>
        { detail && (
          <div className='max-w-xl mx-auto py-5 md:py-14'>
            <div className='pb-5 px-4 sm:px-6 border-b border-gray-100'>
              <h1 className='text-xl font-medium text-center'>Catch #{detail.id}</h1>
            </div>
            <div className="">
              <div
                className="relative flex items-center space-x-3 bg-white px-6 py-5"
              >
                <div className="min-w-0 flex-1">
                  <div className='flex justify-between items-center space-x-4'>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{detail.buyer.email}</p>
                      <p className="mt-1 truncate text-sm text-gray-500">{JSON.stringify(detail.data_landed)}</p>
                    </div>
                    <svg className='w-6 h-6 opacity-50 cursor-pointer' onClick={()=> setOpen(!open)} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                      <path d="M225.022-34.5q-27.599 0-47.865-20.266-20.266-20.265-20.266-47.864v-493.696q0-27.599 20.266-47.865 20.266-20.265 47.865-20.265h159.913v68.13H225.022v493.696h509.956v-493.696H573.065v-68.13h161.913q27.698 0 48.034 20.265 20.336 20.266 20.336 47.865v493.696q0 27.599-20.336 47.864Q762.676-34.5 734.978-34.5H225.022Zm219.913-306.282v-453.174l-88 88-48.74-48.5L479-925.5l170.805 171.044-48.74 48.5-88-88v453.174h-68.13Z"/>
                    </svg>
                  </div>
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
                            { detail.item.map((item,index) => (
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
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* chatGroup list modal */}
      {open && (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
              <div className="absolute inset-0 z-0"
                onClick={()=>{ setOpen(!open); setSelectedList([]) }}></div>
              <div className="w-full relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 pr-4 pt-4"
                  onClick={()=>{ setOpen(!open); setSelectedList([]) }}>
                  <button type="button" className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="sr-only">Close</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <form onSubmit={shareHandel} className="" action="#" method="POST">
                  <div className="">
                    <div className="">
                      <div className="">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Share to chatGroup</h2>

                        <ul className="mt-6 divide-y divide-gray-100">
                          {chatGroupList.length == 0 ? (
                            <li className='block w-full rounded-lg border-2 border-dashed border-gray-300 py-12 text-center text-gray-600'>There no data</li>
                          ) : (
                          chatGroupList.map((chatGroup) => (
                            <li key={chatGroup.id} className='py-3'>
                              <div className="relative flex items-start">
                                <div className="flex h-6 items-center">
                                  <input
                                    name="chat-group"
                                    type="checkbox"
                                    id={chatGroup.id}
                                    value={chatGroup.id}
                                    onChange={checkboxChange}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  />
                                </div>
                                <div className="ml-3 text-sm leading-6">
                                  <label htmlFor={chatGroup.id} className="font-medium text-gray-900 cursor-pointer">
                                    {chatGroup.title}
                                  </label>
                                </div>
                              </div>
                            </li>
                          )))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button
                        type="submit"
                        disabled={sendLoading}
                        className="block w-full rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold text-white text-center shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
