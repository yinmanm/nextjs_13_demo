import findShowCatchApi from '../../../api/catches/show';
import CatchDetail from './_detail';

export default async function CatchShow() {

  async function getCatchDetail(id) {
    "use server";

    const detail = await findShowCatchApi(id);
    return detail;
  }

  return (
    <div className='flex-1 flex flex-col'>
      <CatchDetail getCatchDetail={getCatchDetail} />
    </div>
  )
}
