import getBuyerListApi from '../../api/buyer/list';
import createChatGroupApi from '../../api/chatGroup/create';
import ChatGroupForm from './_form';

export default async function ChatGroupCreate() {

  const buyerList = await getBuyerListApi();

  async function create(data) {
    "use server";
    const result = await createChatGroupApi(data);
    return result;
  }

  if(buyerList.length > 0) {
    return (
      <div className='flex-1 flex flex-col py-5 md:py-14'>
        <div className='flex-1 flex flex-col max-w-xl w-full mx-auto'>
          <ChatGroupForm buyerList={buyerList} create={create} />
        </div>
      </div>
    )
  }
  return (
    <div></div>
  )
  
}
