import ChatGroupForm from './_form';

export default async function ChatGroupCreate() {

  return (
    <div className='flex-1 flex flex-col py-5 md:py-14'>
      <div className='flex-1 flex flex-col max-w-xl w-full mx-auto'>
        <ChatGroupForm />
      </div>
    </div>
  )
}