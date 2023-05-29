'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import create from '../../api/buyer/create';
import getBuyerList from '../../api/buyer/list';

export default function BuyerNew() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {

    try {
      setLoading(true);
      e.preventDefault();
      const data = {
        first_name: first_name,
        last_name: last_name,
        mobile: mobile,
        email: email
      }
  
      if(first_name && last_name && mobile && email) {

        const result = await create(data);
        if(result) {
          router.replace('/catches');
        }
      }
    } catch(error) {
      console.log(error)
    }

  }

  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="">
          <div className="max-w-xl mx-auto">
            <div className="">
              <div className="">
                <h2 className="text-base sm:text-2xl font-semibold leading-7 sm:leading-tight text-gray-900">Create new buyer</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                  <div className="col-span-full">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        required
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        required
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                        className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">
                      Mobile
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="mobile"
                        id="mobile"
                        required
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={loading}
                className="block w-full rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold text-white text-center shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </div>

    </div>
  )
}
