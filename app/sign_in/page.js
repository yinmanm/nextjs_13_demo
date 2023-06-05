import { SignIn } from "@clerk/nextjs/app-beta";

export default function LoginIn({searchParams}) {

  const { redirectUrl } = searchParams

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <SignIn redirectUrl={redirectUrl || '/'} />
            {/* <a
              href={`https://bpx-api.gfresh.cc/oauth/authorize?response_type=code&client_id=${client_id}&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&scope=read`}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in with BeachPrice
            </a> */}
          </div>
        </div>
      </div>
    </>
  )
}
