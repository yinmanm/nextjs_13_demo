import getChatGroupShow from '../../../api/chatGroup/show';
import MessageList from './_list';

export default async function ChatShow() {

  async function getChatShow(id) {
    "use server";

    const list = await getChatGroupShow(id);
    return list;
  }

  return (
    <div className='flex-1 flex flex-col'>
      <MessageList getChatShow={getChatShow} />
    </div>
  )
  
}