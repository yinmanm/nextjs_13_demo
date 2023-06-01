// import getBuyerListApi from './api/buyer/list';
import ChatGroupForm from './chatGroup/new/_form';

export default async function Home() {

  // const buyerList = await getBuyerListApi();

  // async function search(searchString) {
  //   "use server";
  //   console.log('server', searchString)

  //   return buyerList.filter((buyer) =>
  //     buyer.email.toLowerCase().includes(searchString.toLowerCase())
  //   )
  // }

    return (
      <div className='flex-1 flex flex-col py-5 md:py-14'>
        <div className='flex-1 flex flex-col max-w-xl w-full mx-auto'>
          <ChatGroupForm />
        </div>
      </div>
    )
}