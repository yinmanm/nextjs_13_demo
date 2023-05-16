'use client';
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {base} from '../../api/airtable/route'

export default function CatchNew() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [itemLoading, setItemLoading] = useState(false);
  const [buyerList, setBuyerList] = useState([]);

  const [modal, setModal] = useState(false);
  const [date, setDate] = useState(new Date())
  const [buyer, setBuyer] = useState("")
  const [buyerEmail, setBuyerEmail] = useState("")
  const [items, setItems] = useState([])
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    if(date && buyer && items.length>0) {

      base('Buyer').find(buyer, function(err, record) {
        if (err) { console.error(err); return; }
        setBuyerEmail(record.fields.Email)
      });

      base('Catches').create([
        {
          "fields": {
            "DateLanded": date,
            "Buyer": buyer,
            "BuyerEmail": buyerEmail
          }
        }
      ], function(err, records) {
        if (err) {
          console.error(err);
          setLoading(false);
          return;
        }
        records.forEach(function (record) {
          updateCatch(record);
        });
      });
    } else {
      setLoading(false);
    }
  };

  const updateCatch = async (record) => {
    let createList = items.map((item) => {
      return ({
        "fields": {
          "CatchId": record.id,
          "Description": item.description,
          "Quantity": Number(item.quantity),
          "Price": Number(item.price),
        }
      })
    })
    console.log('111',createList)
    createItems(createList);
  }

  const createItems = async (createList) => {
    base('Items').create([...createList], function(err, records) {
      if (err) {
        console.error(err);
        setLoading(false);
        return;
      }
      else {
        setLoading(false);

        // window.location.href = `/catches`;
        router.push('/catches');
      }
    });
  }

  const addItem = async (e) => {
    setItemLoading(true);
    e.preventDefault();

    if(description && quantity && price) {
      setItems([...items].concat([{description, quantity, price}]))
      setDescription("")
      setQuantity(0)
      setPrice(0)
      setModal(false)
      setItemLoading(false);
    }else {
      setItemLoading(false);
    }
  }
  
  const getBuyer = async () => {
    base('Buyer').select({
      view: 'Grid view'
    }).firstPage(function(err, records) {
      if (err) { console.error(err); return; }
      setBuyerList([...records]);
      if(records.length>0) {
        setBuyer(records[0].id)
      }
    });
  }

  useEffect(() => {
    getBuyer();
  }, [base]);
  
  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="" action="#" method="POST">
          <div className="max-w-xl mx-auto">
            <div className="">
              <div className="">
                <h2 className="text-base sm:text-2xl font-semibold leading-7 sm:leading-tight text-gray-900">Create new catch</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                  <div className="col-span-full">
                    <label htmlFor="date-landed" className="block text-sm font-medium leading-6 text-gray-900">
                      Date landed
                    </label>
                    <div className="mt-2 relative">
                      <Flatpickr
                        data-enable-time
                        value={date}
                        dateformat= "Y-m-d H:i"
                        onChange={(e) => setDate(e[0])}
                        className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      />
                      <svg className="absolute right-4 top-2 text-gray-400 w-5 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"></path>
                      </svg>
                    </div>
                  </div>
                
                  <div className="col-span-full">
                    <label htmlFor="buyer" className="block text-sm font-medium leading-6 text-gray-900">
                      Buyer
                    </label>
                    <div className="mt-2">
                      <select
                        id="buyer"
                        name="buyer"
                        required
                        value={buyer}
                        onChange={(e) => {console.log(e); setBuyer(e.target.value)}}
                        className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      >
                        {buyerList.map((item, index) => (
                          <option key={index} value={item.id}>{item.fields.Email}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <div className="overflow-x-auto">
                      <div className="inline-block min-w-full py-2 align-middle">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
                          <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-50">
                              <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-gray-500">
                                  Description
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-normal text-gray-500">
                                  Quantity
                                </th>
                                <th scope="col" className="py-3.5 pr-4 pl-3 text-right text-sm font-normal text-gray-500">
                                  Price
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                              {items.map((item,index) => (
                                <tr key={index}>
                                  <td className="py-4 pl-4 pr-3 text-sm text-gray-500">
                                    {item.description}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.quantity} kg</td>
                                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium">
                                    ${item.price}/kg
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="mt-3 rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      onClick={()=>{ setModal(!modal) }}
                    >
                      Add new item
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={loading}
                className="block w-full rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold text-white text-center shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* item modal */}
      {modal && (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
              <div className="absolute inset-0 z-0"
                onClick={()=>{ setModal(!modal) }}></div>
              <div className="w-full relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 pr-4 pt-4"
                  onClick={()=>{ setModal(!modal) }}>
                  <button type="button" className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="sr-only">Close</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <form onSubmit={addItem} className="" action="#" method="POST">
                  <div className="">
                    <div className="">
                      <div className="">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Add new item</h2>

                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                          <div className="col-span-full">
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                              Description
                            </label>
                            <div className="mt-2 relative">
                              <input
                                type="text"
                                name="description"
                                id="description"
                                required
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                              />
                            </div>
                          </div>
                          <div className="col-span-full">
                            <label htmlFor="quantity" className="block text-sm font-medium leading-6 text-gray-900">
                              Quantity
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                              <input
                                type="number"
                                name="quantity"
                                id="quantity"
                                required
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                className="block w-full rounded-md border-0 py-2 px-4 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                              />
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                <span className="text-gray-500 sm:text-sm" id="price-currency">KG</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-full">
                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                              Price
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <span className="text-gray-500 sm:text-sm">$</span>
                              </div>
                              <input
                                type="number"
                                name="price"
                                id="price"
                                required
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="block w-full rounded-md border-0 py-2 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                              />
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                <span className="text-gray-500 sm:text-sm" id="price-currency">KG</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button
                        type="submit"
                        disabled={itemLoading}
                        className="block w-full rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold text-white text-center shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Create
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
