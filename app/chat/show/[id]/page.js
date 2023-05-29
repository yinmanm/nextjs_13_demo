import getChatListApi from '../../../api/chat/list';

export default async function ChatShow() {

  const chatList = await getChatListApi();

  return (
    <div>
      <div className=''>
        <div className='max-w-xl mx-auto py-5 md:py-14'>
          <div className='pb-5 px-4 sm:px-6 border-b border-gray-100'>
            <h1 className='text-xl font-medium text-center'>{chatList[0].chatGroup.title}</h1>
          </div>
          <div>
            <ul role="list" className='divide-y divide-gray-100 px-4 sm:px-6'>
              {chatList.map((chat) => (
                <li key={chat.id} className='py-5'>
                  <div className=''>
                    <div className='text-sm leading-6 text-gray-600'>{chat.author.name}</div>
                    <div className='leading-6 text-gray-900'>{chat.content}</div>
                  </div>
                </li>
              ))}
            </ul>
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
    </div>
  )
}
