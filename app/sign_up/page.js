'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {base} from '../api/airtable/route'

export default function Example() {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {

    setLoading(true);

    e.preventDefault();

    if(email && password) {
      base('User').create([
        {
          "fields": {
            "Email": email,
            "Password": password,
          }
        }
      ], function(err, records) {
        if (err) {
          console.error(err);
          setLoading(false)
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
          setLoading(false)
          localStorage.setItem('userId', record.getId())
          location.href = `/profile/edit?userId=${record.getId()}`;

          // window.location.href = `/profile/edit?userId=${id}`;
          // router.push(`/profile/edit?userId=${record.getId()}`)
        });
      });
    } else {
      setLoading(false);
    }
  };
  const update = async (id) => {
    base('User').update([
      {
        "id": id,
        "fields": {
          "Email": email,
          "Password": password,
          "Id": id
        }
      },
    ], function(err) {
      if (err) {
        console.error(err);
        setLoading(false)
        return;
      }
      setLoading(false)
      localStorage.setItem('userId', id)

      // window.location.href = `/profile/edit?userId=${id}`;
      router.push(`/profile/edit?userId=${id}`)
    });
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}
