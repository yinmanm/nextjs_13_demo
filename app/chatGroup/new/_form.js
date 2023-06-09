
'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ChatGroupForm({buyerList, create}) {

  const router = useRouter();

  const [searchString, setSearchString] = useState("");
  const [chatGroupName, setChatGroupName] = useState("");
  const [filterBuyerList, setFilterBuyerList] = useState([]);
  const [selectedBuyerIdList, setSelectedBuyerIdList] = useState([]);
  // const [selectedBuyerList, setSelectedBuyerList] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchHandel = () => {
    console.log('search');
    const result = buyerList.filter((buyer) =>
      buyer.email.toLowerCase().includes(searchString.toLowerCase())
    )
    setFilterBuyerList(result);
  }

  const buyerChange = (e) => {
    const value = Number(e.target.value);
    const email = e.target.name;
    const index = selectedBuyerIdList.indexOf(value);
    if(e.target.checked) {
      console.log('checked')
      setSelectedBuyerIdList([...selectedBuyerIdList, value]);
      // setSelectedBuyerList([...selectedBuyerList, {id:value, email:email}]);
    } else {
      console.log('not checked')
      setSelectedBuyerIdList(selectedBuyerIdList.splice(index,1));
      // setSelectedBuyerList(selectedBuyerList.splice(index,1))
    }
    // console.log('selectedBuyerList',selectedBuyerList)
  }

  const createSubmit = async (e) => {
    if(selectedBuyerIdList.length > 0 || chatGroupName) {
      try {
        setLoading(true);
        e.preventDefault();
        const buyerId = selectedBuyerIdList.map(k=> { return {id:k}})
        const data = {
          title: chatGroupName,
          createAt: new Date(),
          user: {
            connect: {
              id: 2
            }
          },
          buyer: {
            connect: buyerId
          }
        }
        const result = await create(JSON.stringify(data));
        console.log('result', result);
        if(result && result.id) {
          router.replace(`/chat/show/${result.id}`);
        }
      } catch(error) {
        setLoading(false);
        console.log(error);
      }
    }
  }

  // useEffect(()=>{
  //   searchHandel('');
  // },[searchString])
  useEffect(()=>{
    searchHandel('');
  },[])

  return (
    <form onSubmit={createSubmit} action="#" method="POST" className="flex-1 flex flex-col">
      <div className='pb-5 px-4 sm:px-6 border-b border-gray-100'>
        {/* <input
          type="text"
          name="buyer_name"
          id="buyer_name"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          placeholder="Search"
        /> */}
        {/* {selectedBuyerList.map((buyer,index) => (
          <div className="pt-3 inline-block w-20 truncate text-xs leading-none mr-2" key={index}>{buyer.email}</div>
        ))} */}
        <input
          type="text"
          name="chat_group_name"
          id="chat_group_name"
          value={chatGroupName}
          onChange={(e) => setChatGroupName(e.target.value)}
          className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          placeholder="chatGroup Name"
        />
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
                      name={buyer.email}
                      type="checkbox"
                      id={buyer.id}
                      value={buyer.id}
                      onChange={(e) => {buyerChange(e)}}
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