'use client';
import { useState, useEffect } from 'react';
import {base} from '../../api/airtable/route'

export default function Profile() {

  const [userId, setUseId] = useState(location.search.split('=')[1]);
  const [loading, setLoading] = useState(false);

  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [entity_name, setEntityName] = useState('');
  const [abn, setAbn] = useState('');
  const [street, setStreet] = useState('');
  const [suburb, setSuburb] = useState('');
  const [state, setState] = useState('');
  const [post_code, setPostCode] = useState('');

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    if(first_name && last_name && mobile && entity_name && abn && street && suburb && state && post_code) {
      base('Profile').create([
        {
          "fields": {
            "UserId": userId,
            "FirstName": first_name,
            "LastName": last_name,
            "Mobile": mobile,
            "EntityName": entity_name,
            "ABN": abn,
            "Street": street,
            "Suburb": suburb,
            "State": state,
            "PostCode": post_code
          }
        }
      ], function(err, records) {
        if (err) {
          console.error(err);
          setLoading(false);
          return;
        }
        records.forEach(function (record) {
        });
        setLoading(false);

        location.href = `/catches`;
      });
    } else {
      setLoading(false);
    }
  }

  useEffect(() => {
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <form onSubmit={handleSubmit} className="" action="#" method="POST">
        <div className="max-w-xl mx-auto">
          <div className="">
            <div className="">
              <h2 className="text-base sm:text-2xl font-semibold leading-7 sm:leading-tight text-gray-900">Profile</h2>

              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      value={first_name}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      value={last_name}
                      onChange={(e) => setLastName(e.target.value)}
                      className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">
                    Mobile
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      name="mobile"
                      id="mobile"
                      autoComplete="mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="entity-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Entity name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="entity-name"
                      id="entity-name"
                      autoComplete="entity-name"
                      value={entity_name}
                      onChange={(e) => setEntityName(e.target.value)}
                      className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="abn" className="block text-sm font-medium leading-6 text-gray-900">
                    ABN
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      name="abn"
                      id="abn"
                      autoComplete="abn"
                      value={abn}
                      onChange={(e) => setAbn(e.target.value)}
                      className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="street" className="block text-sm font-medium leading-6 text-gray-900">
                    Street
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="street"
                      id="street"
                      autoComplete="street"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="suburb" className="block text-sm font-medium leading-6 text-gray-900">
                    Suburb
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="suburb"
                      id="suburb"
                      autoComplete="suburb"
                      value={suburb}
                      onChange={(e) => setSuburb(e.target.value)}
                      className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">
                    State
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      autoComplete="state"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="post-code" className="block text-sm font-medium leading-6 text-gray-900">
                    Post code
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="post-code"
                      id="post-code"
                      autoComplete="post-code"
                      value={post_code}
                      onChange={(e) => setPostCode(e.target.value)}
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
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
