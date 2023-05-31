import getBuyerListApi from '../../api/buyer/list';
import ChatGroupForm from './_form';

export default async function ChatGroupCreate() {

  const buyerList = await getBuyerListApi();

  async function search(searchString) {
    "use server";
    console.log('server', searchString)

    return buyerList.filter((buyer) =>
      buyer.email.toLowerCase().includes(searchString.toLowerCase())
    )
  }

  if(buyerList.length > 0) {
    return (
      <div className='flex-1 flex flex-col py-5 md:py-14'>
        <div className='flex-1 flex flex-col max-w-xl w-full mx-auto'>
          <ChatGroupForm search={search} />
        </div>
      </div>
    )
  }
  return (
    <div></div>
  )
  
}