'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Loading from '../componets/Loading';
import {base} from '../api/airtable/route'

export default function Catches() {

  const [loading, setLoading] = useState(true);
  const [catchList, setCatchList] = useState([]);
  const [items, setItems] = useState([]);
  const [buyerList, setBuyerList] = useState([]);
  const [newCatchList, setNewCatchList] = useState([]);

  const getList = async () => {
    base('Catches').select({
      view: 'Grid view'
    }).firstPage(function(err, records) {
      if (err) { console.error(err); return; }
      setCatchList([...records]);
    });
  }

  const getItems = async () => {
    base('Items').select({
      view: 'Grid view'
    }).firstPage(function(err, records) {
      if (err) { console.error(err); return; }
      setItems([...records])
    });
  }

  const getBuyerList = async () => {
    base('Buyer').select({
      view: 'Grid view'
    }).firstPage(function(err, records) {
      if (err) { console.error(err); return; }
      setBuyerList([...records])
    });
  }

  const getCatchList = () => {
    if(catchList.length>0 && items.length>0 && buyerList.length>0) {
      let list = [];
      catchList.forEach(item => {
        list.push({...item, time: getCatchTime(item.fields.DateLanded), BuyerName: getBuyerName(item.fields.Buyer), items: getCatchItems(item.id) || []})
      })
      setNewCatchList(list)
      setLoading(false);
    }
  }

  const getCatchTime = (time) => {
    var date = new Date(time);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    var minute = date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    return (y + '-' + m + '-' + d+' '+h+':'+minute);
  }

  const getBuyerName = (buyer) => {
    let result = buyerList.filter(item => {
      return item.id == buyer;
    })
    if(result.length>0) {
      return result[0].fields.Email;
    }
    return null
  }

  const getCatchItems = (catchId) => {
    let result = items.filter(item => {
      return item.fields.CatchId == catchId;
    })
    if(result.length>0) {
      return result;
    }
    return null
  }

  useEffect(() => {
    getList();
    getItems();
    getBuyerList();
  }, [base]);

  useEffect(() => {
    getCatchList();
  }, [catchList,buyerList,items]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='max-w-xl mx-auto py-8 md:py-14'>
          <h2 className="text-base sm:text-2xl font-semibold leading-7 sm:leading-tight text-gray-900">Your catches</h2>
          <ul role="list" className="mt-6 space-y-3">
            {newCatchList.length == 0 ? (
              <li className='block w-full rounded-lg border-2 border-dashed border-gray-300 py-12 text-center text-gray-600'>There no data</li>
            ) : (
              newCatchList.map((item) => (
              <li key={item.id} className="rounded-lg shadow">
                <div
                  className="relative flex items-center space-x-3 rounded-lg bg-white px-6 py-5 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                >
                  <div className="min-w-0 flex-1">
                    <a href="#" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      <p className="text-sm font-medium text-gray-900">{item.BuyerName}</p>
                      <p className="mt-1 truncate text-sm text-gray-500">{item.time}</p>
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
                                {item.items.map((item,index) => (
                                  <tr key={index}>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500">
                                      {item.fields.Description}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.fields.Quantity} kg</td>
                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium">
                                      ${item.fields.Price}/kg
                                    </td>
                                  </tr>
                                ))}
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
