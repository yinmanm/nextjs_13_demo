import findShowCatchApi from '../../../api/catches/show';
import getChatGroupListApi from '../../../api/chatGroup/list';
import chatCreateApi from '../../../api/chat/create';
import CatchDetail from './_detail';

export default async function CatchShow() {

  const chatGroupList = await getChatGroupListApi();

  async function getCatchDetail(id) {
    "use server";

    const detail = await findShowCatchApi(id);
    return detail;
  }

  async function submitShare(id, list) {
    "use server";

    const listArr = JSON.parse(list);
    const totalResult = await listArr.map(async item => {
      const data = {
        author: { connect: { id: 1 }},
        chatGroup: { connect: { id: Number(item) }},
        isCatch: true,
        catchId: Number(id),
        createAt: new Date(),
        content: '',
      }
      const result = await chatCreateApi(JSON.stringify(data));
      return result
    })
    return totalResult
  }

  return (
    <div className='flex-1 flex flex-col'>
      <CatchDetail getCatchDetail={getCatchDetail} chatGroupList={chatGroupList} submitShare={submitShare} />
    </div>
  )
}
