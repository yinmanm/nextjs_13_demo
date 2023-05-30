'use client';
import { Fragment, useState, useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
export default function ChatList(props) {
  console.log('props',props);

  const params = useParams();

  const [chatShow, setChatShow] = useState();

  const setData = async (id) => {
    setChatShow(await props.getChatShow(id));
  }

  useEffect(()=>{
    if(params && params.id) {
      setData(params.id);
    }
  },[params.id])

  return (
    <div className='flex-1 flex flex-col py-5 md:py-14'>
      {chatShow && (
        <div className='flex-1 flex flex-col max-w-xl w-full mx-auto'>
          <div className='flex-1 overflow-auto'>
            <div className='pb-5 px-4 sm:px-6 border-b border-gray-100'>
              <h1 className='text-xl font-medium text-center'>{chatShow.title}</h1>
            </div>
            <div>
              <ul role="list" className='divide-y divide-gray-100 px-4 sm:px-6'>
                {chatShow.chats.map((chat) => (
                  <li key={chat.id} className='py-5'>
                    <div className=''>
                      <div className='text-sm leading-6 text-gray-600'>{chat.author.name}</div>
                      <div className='leading-6 text-gray-900'>{chat.content}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='pt-4 px-4 sm:px-6'>
            <div className='flex space-x-3 items-center'>
              <div className="flex-1 flex">
                <div className="block w-full relative rounded-l-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                  <textarea
                    rows="2"
                    name="comment"
                    id="comment"
                    className="block w-full resize-none border-0 bg-transparent py-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Add your comment..."
                  />
                </div>
                <button
                  type="button"
                  className="inline-flex items-center rounded-r-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send
                </button>
              </div>

              <Menu as="div" className="relative inline-block text-center">
                <div>
                  <Menu.Button className="w-8 h-8 rounded-full border-2 border-gray-600 flex flex-col justify-center items-center">
                    <svg className='w-6 h-6 mx-auto text-gray-600' xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                      <path d="M440.391-190.391v-250h-250v-79.218h250v-250h79.218v250h250v79.218h-250v250h-79.218Z"/>
                    </svg>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 bottom-10 mt-2 w-40 origin-bottom-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-3">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/catches/new"
                            className={`${
                              active ? 'bg-indigo-500 text-white' : 'text-gray-900'
                            } w-full text-center rounded-md px-2 py-2 text-sm`}
                          >
                            Create a Catch
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
