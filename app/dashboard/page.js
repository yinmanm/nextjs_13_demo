// "use client";
// import { useState, useEffect } from 'react';
import Link from 'next/link';
import getChatListApi from '../api/chatGroup/list';

export default async function Dashboard() {

  // const getTimeDown = async (time) => {
  //   const nowTime = new Date();
  //   const createTime = new Date(time);
  //   const result = nowTime - createTime;
  //   return result;
  // }

  const chatGroupList = await getChatListApi() || [];
  console.log('client chatGroupList', chatGroupList)

  return (
    <div className="">
      <div className="max-w-xl mx-auto py-8 md:py-14">
        <div className="divide-y divide-gray-100 px-4 sm:px-6">
          {chatGroupList.length == 0 ? (
              <li className='block w-full rounded-lg border-2 border-dashed border-gray-300 py-12 text-center text-gray-600'>There no data</li>
            ) : (
            chatGroupList.map((chatGroup) => (
              <Link href={`/chat/show/${chatGroup.id}`} key={chatGroup.id} className="flex justify-between gap-x-5 py-5">
                <div className="flex-1 truncate">
                  <div className="">
                    <p className="font-semibold leading-6 text-gray-900 truncate">{chatGroup.title}</p>
                    {chatGroup.chats.length > 0 ? (chatGroup.chats[chatGroup.chats.length-1].isCatch ? (
                      <p className="text-sm leading-6 text-gray-600 truncate">{chatGroup.chats[chatGroup.chats.length-1].author.name} has completed a Catch</p>
                    ) : (
                      <p className="text-sm leading-6 text-gray-600 truncate">{chatGroup.chats[chatGroup.chats.length-1].author.name}: {chatGroup.chats[chatGroup.chats.length-1].content}</p>
                    )) : (
                      <div className='h-6'></div>
                    )}
                  </div>
                </div>
                <div className="w-16 flex justify-end">
                  <p className="text-xs leading-5 text-gray-500 whitespace-nowrap">
                    time
                  </p>
                </div>
              </Link>
            )))}
        </div>

        <div className="py-8 px-4 sm:px-6">
          <a
            href="/catches/new"
            className="block w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white text-center shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create a Catch
          </a>
        </div>
      </div>
    </div>
  )
}