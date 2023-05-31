import getChatGroupShow from '../../../api/chatGroup/show';
import chatCreateApi from '../../../api/chat/create';
import MessageList from './_list';

export default async function ChatShow() {

  async function getChatShow(id) {
    "use server";

    const list = await getChatGroupShow(id);
    return list;
  }

  async function createChat(data) {
    "use server";
    const result = await chatCreateApi(data);
    return result;
  }

  return (
    <div className='flex-1 flex flex-col'>
      <MessageList getChatShow={getChatShow} createChat={createChat} />
    </div>
  )
  
}