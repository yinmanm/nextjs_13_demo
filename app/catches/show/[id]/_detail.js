import findShowCatchApi from '../../../api/catches/show';

export default async function CatchDetail(prop) {

  console.log('prop', prop)
  console.log('prop', prop.id)

  if(prop.id) {
    const detail = await findShowCatchApi(prop.id);

    return (
      <div>
        <div className='px-4 sm:px-6 lg:px-8'>
          <div className='max-w-xl mx-auto py-5 md:py-14'>
            <div className='pb-5 px-4 sm:px-6 border-b border-gray-100'>
              <h1 className='text-xl font-medium text-center'>Catch #{detail.id}</h1>
            </div>
            <div className="">
              <div
                className="relative flex items-center space-x-3 bg-white px-6 py-5"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900">{detail.buyer.email}</p>
                  <p className="mt-1 truncate text-sm text-gray-500">{JSON.stringify(detail.data_landed)}</p>
                  <div className="overflow-x-auto">
                    <div className="inline-block min-w-full py-2 align-middle">
                      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
                        <table className="min-w-full divide-y divide-gray-300">
                          <thead className="bg-gray-50">
                            <tr>
                              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-gray-500">
                                Category
                              </th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-normal text-gray-500">
                                Description
                              </th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-normal text-gray-500">
                                Quantity
                              </th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-normal text-gray-500">
                                Price
                              </th>
                              <th scope="col" className="py-3.5 pr-4 pl-3 text-right text-sm font-normal text-gray-500">
                                Total
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 bg-white">
                            { detail.item.map((item,index) => (
                              <tr key={index}>
                                <td className="py-4 pl-4 pr-3 text-sm text-gray-500">
                                  {item.categoryName}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.description}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.quantity} kg</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${item.price}/kg</td>
                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium">
                                  ${item.total}
                                </td>
                              </tr>)
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div></div>
  )
  
}
