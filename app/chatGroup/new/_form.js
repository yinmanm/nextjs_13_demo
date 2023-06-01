'use client';
import { useState, useEffect } from "react";

export default async function ChatGroupForm() {

  const buyerList = [
    {
      id: 1,
      first_name: 'test+1',
      last_name: 'Admin',
      mobile: '4564564564',
      email: 'test+1@admin.com'
    },
    {
      id: 2,
      first_name: 'test+2',
      last_name: 'Admin',
      mobile: '56756453344',
      email: 'test+2@admin.com'
    },
    {
      id: 3,
      first_name: 'test+3',
      last_name: 'Admin',
      mobile: '4268767565',
      email: 'test+3@admin.com'
    },
    {
      id: 4,
      first_name: 'manman+1',
      last_name: 'Yin',
      mobile: '15938475647',
      email: 'lina.yin+1@gfresh.com'
    },
    {
      id: 5,
      first_name: 'manman+2',
      last_name: 'Yin',
      mobile: '13124356457',
      email: 'lina.yin+2@gfresh.com'
    },
    {
      id: 6,
      first_name: 'manman+3',
      last_name: 'Yin',
      mobile: '15047564856',
      email: 'lina.yin+3@gfresh.com'
    }
  ]

  const [searchString, setSearchString] = useState("");
  const [chatGroupName, setChatGroupName] = useState("");
  const [filterBuyerList, setFilterBuyerList] = useState(buyerList);
  // const [filterBuyerList, setFilterBuyerList] = useState(props.buyerList);
  const [selectedBuyerIdList, setSelectedBuyerIdList] = useState([]);
  const [selectedBuyerList, setSelectedBuyerList] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchHandel = async () => {
    console.log('search');
    const list = buyerList.filter((buyer) =>
      buyer.email.toLowerCase().includes(searchString.toLowerCase())
    )
    console.log('list',list)
    setFilterBuyerList(list);
    console.log('set filterBuyerList',filterBuyerList)
  }

  const checkboxChange = async (e) => {
    const value = e.target.value;
    const email = e.target.name;
    const index = selectedBuyerIdList.indexOf(value);

    if(e.target.checked) {
      console.log('checked')
      setSelectedBuyerIdList([...selectedBuyerIdList, value]);
      setSelectedBuyerList([...selectedBuyerList, {id:value, email:email}]);
      console.log('selectedBuyerList',selectedBuyerList)
    } else {
      console.log('not checked')
      setSelectedBuyerIdList(selectedBuyerIdList.splice(index,1));
      setSelectedBuyerList(selectedBuyerList.splice(index,1));
      console.log('selectedBuyerList',selectedBuyerList)
    }
  }

  const createSubmit = async (e) => {
    e.preventDefault();
    console.log('submit')
    console.log('selectedBuyerList',selectedBuyerList)
    if(selectedBuyerList.length==0 || !chatGroupName) {
      return
    }
    try {
      setLoading(true);
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    searchHandel();
  },[searchString])

  return (
    <form onSubmit={createSubmit} action="#" method="POST" className="flex-1 flex flex-col">
      <div className='pb-5 px-4 sm:px-6 border-b border-gray-100'>
        <input
          type="text"
          name="buyer_name"
          id="buyer_name"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          placeholder="Search"
        />
        {selectedBuyerList.map(buyer => (
          <div className="pt-3 inline-block w-20 truncate text-xs leading-none mr-2" key={buyer.id}>{buyer.email}</div>
        ))}
        {selectedBuyerIdList.map(select=>{
          <div key={select}>{select}</div>
        })}
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
                      onChange={checkboxChange}
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
          onChange={(e) => setChatGroupName(e.target.value)}
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
// 'use client';
// import { useState, useEffect } from "react";

// export default async function ChatGroupForm(props) {

//   const [searchString, setSearchString] = useState("");
//   const [chatGroupName, setChatGroupName] = useState("");
//   const [filterBuyerList, setFilterBuyerList] = useState([]);
//   const [selectedBuyerList, setSelectedBuyerList] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const searchHandel = async () => {
//     console.log('search');
//     const result = await props.search(searchString);
//     setFilterBuyerList(result);
//   }

//   const createSubmit = async (e) => {
//     if(selectedBuyerList.length==0 || !chatGroupName) {
//       return
//     }
//     try {
//       setLoading(true);
//       e.preventDefault();
//     } catch(error) {
//       console.log(error);
//     }
//   }

//   useEffect(()=>{
//     searchHandel('');
//   },[searchString])

//   return (
//     <form onSubmit={createSubmit} action="#" method="POST" className="flex-1 flex flex-col">
//       <div className='pb-5 px-4 sm:px-6 border-b border-gray-100'>
//         <input
//           type="text"
//           name="buyer_name"
//           id="buyer_name"
//           value={searchString}
//           onChange={(e) => setSearchString(e.target.value)}
//           className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
//           placeholder="Search"
//         />
//         {selectedBuyerList.map(buyer => (
//           <div className="pt-3 inline-block w-20 truncate text-xs leading-none mr-2" key={buyer.id}>{buyer.email}</div>
//         ))}
//       </div>

//       <div className="flex-1 overflow-y-auto">
//         <ul role="list" className='divide-y divide-gray-100 py-4 px-4 sm:px-6'>
//           {filterBuyerList.length == 0 ? (
//             <div className="py-6 text-center text-gray-500">no data</div>
//           ) : (
//             filterBuyerList.map((buyer) => (
//               <li key={buyer.id} className='py-3'>
//                 <div className="relative flex items-start">
//                   <div className="flex h-6 items-center">
//                     <input
//                       name="buyer"
//                       type="checkbox"
//                       id={buyer.id}
//                       className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                     />
//                   </div>
//                   <div className="ml-3 text-sm leading-6">
//                     <label htmlFor={buyer.id} className="font-medium text-gray-900 cursor-pointer">
//                       {buyer.email}
//                     </label>
//                   </div>
//                 </div>

//               </li>
//             ))
//           )}
//         </ul>
//       </div>

//       <div className="pt-3 px-4 sm:px-6 space-y-3">
//         <input
//           type="text"
//           name="chat_group_name"
//           id="chat_group_name"
//           value={chatGroupName}
//           onChange={(e) => setChatGroupName(e.target.value)}
//           className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
//           placeholder="chatGroup Name"
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           className="block w-full rounded-md bg-indigo-600 py-2.5 text-sm font-semibold text-white shadow-sm text-center hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           Create
//         </button>
//       </div>
//     </form>
//   )
// }