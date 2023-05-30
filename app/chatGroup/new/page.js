import getBuyerListApi from '../../api/buyer/list';
import ChatGroupForm from './_form';

export default async function ChatGroupCreate() {

  const buyerList = await getBuyerListApi();

  async function search(search) {
    "use server";

    return buyerList.filter((buyer) =>
      buyer.email.toLowerCase().includes(search.toLowerCase())
    )
  }

  async function create(list) {
    "use server";

  }

  if(buyerList.length > 0) {
    return (
      <div className='flex-1 flex flex-col py-5 md:py-14'>
        <div className='flex-1 flex flex-col max-w-xl w-full mx-auto'>
          <ChatGroupForm buyerList={buyerList} create={create} search={search} />
        </div>
      </div>
    )
  }
  return (
    <div></div>
  )
  
}