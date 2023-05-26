import { Link } from "react-router-dom"

export default function Start() {
  return (
    <>
      <Link to='/'>
        <svg className="absolute h-8 w-8 top-5 left-5" height="72" width="72" viewBox="0 0 72 72"><path d="M36,0C16.1,0,0,16.1,0,36c0,19.9,16.1,36,36,36c19.9,0,36-16.2,36-36C72,16.1,55.8,0,36,0z M3.6,36 c0-4.7,1-9.1,2.8-13.2l15.4,42.3C11.1,59.9,3.6,48.8,3.6,36z M36,68.4c-3.2,0-6.2-0.5-9.1-1.3l9.7-28.2l9.9,27.3 c0.1,0.2,0.1,0.3,0.2,0.4C43.4,67.7,39.8,68.4,36,68.4z M40.5,20.8c1.9-0.1,3.7-0.3,3.7-0.3c1.7-0.2,1.5-2.8-0.2-2.7 c0,0-5.2,0.4-8.6,0.4c-3.2,0-8.5-0.4-8.5-0.4c-1.7-0.1-2,2.6-0.2,2.7c0,0,1.7,0.2,3.4,0.3l5,13.8L28,55.9L16.2,20.8 c2-0.1,3.7-0.3,3.7-0.3c1.7-0.2,1.5-2.8-0.2-2.7c0,0-5.2,0.4-8.6,0.4c-0.6,0-1.3,0-2.1,0C14.7,9.4,24.7,3.6,36,3.6 c8.4,0,16.1,3.2,21.9,8.5c-0.1,0-0.3,0-0.4,0c-3.2,0-5.4,2.8-5.4,5.7c0,2.7,1.5,4.9,3.2,7.6c1.2,2.2,2.7,4.9,2.7,8.9 c0,2.8-0.8,6.3-2.5,10.5l-3.2,10.8L40.5,20.8z M52.3,64l9.9-28.6c1.8-4.6,2.5-8.3,2.5-11.6c0-1.2-0.1-2.3-0.2-3.3 c2.5,4.6,4,9.9,4,15.5C68.4,47.9,61.9,58.4,52.3,64z"></path></svg>
      </Link>
      <div className="section mb-10">
        <h1 className="small-title text-center mt-20 md:mt-40 mb-6">Let's get started (Just Design)</h1>
        <h2 className="text-center text-lg text-black/70">First, create your WordPress.com account. Have an account? <Link to='/log-in' className="text-black underline">Log in</Link></h2>
        <div className="flex justify-center max-md:items-center mt-10 md:mt-20 gap-10 max-md:flex-col">
          <form className="flex flex-col max-w-sm text-black/90 text-sm font-normal">
            <label for="email">Your email address</label>
            <input type="email" name="email" className="h-10 border rounded border-black/30 mt-2 mb-4 p-3"/>
            <label for="name">Username</label>
            <input type="text" name="name" className="h-10 border rounded border-black/30 mt-2 mb-4 p-3"/>
            <label for="pass">Choose a password</label>
            <input type="password" name="pass" className="h-10 border rounded border-black/30 mt-2 mb-4 p-3"/>
            <p className="text-black/50">By creating an account you agree to our <span className="text-blue-600 underline hover:text-purple-800 hover:cursor-pointer">Terms of Service</span> and have read our <span className="text-blue-600 underline hover:text-purple-800 hover:cursor-pointer">Privacy Policy</span>.</p>
            <button className="mt-10 text-white bg-[#117ac9] py-3 font-semibold">Create your account</button>
          </form>
          <div className="border max-md:h-0.5 w-full md:w-0.5 max-md:flex items-center justify-center">
          <p className="md:absolute md:-translate-x-6 md:translate-y-40 h-12 w-12 bg-white flex items-center justify-center text-black/60 text-sm">
            OR
          </p>
          </div>
          <div className="max-w-sm text-sm text-black/80 my-auto">
            <button className="flex gap-4 items-center">
              <div className="rounded-full border border-black/50 w-10 h-10 flex items-center justify-center">
                <svg width="19" height="19" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 0 1-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4"></path><path d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0 0 10 20z" fill="#34A853"></path><path d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 0 0 0 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05"></path><path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.192 5.736 7.396 3.977 10 3.977z" fill="#EA4335"></path></g></svg>
              </div>
              Continue with Google
            </button>
            <button className="flex gap-4 items-center mt-4 mb-8">
              <div className="rounded-full border border-black/50 w-10 h-10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 170 170" xmlns="http://www.w3.org/2000/svg"><path d="m150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929 0.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002 0.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-0.9 2.61-1.85 5.11-2.86 7.51zm-31.26-123.01c0 8.1021-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375-0.119-0.972-0.188-1.995-0.188-3.07 0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.3113 11.45-8.597 4.62-2.2516 8.99-3.4968 13.1-3.71 0.12 1.0831 0.17 2.1663 0.17 3.2409z"></path></svg>
              </div>
              Continue with Apple
            </button>
            <p className="text-xs text-black/50">
              If you continue with Google or Apple, you agree to our <span className="text-blue-600 underline hover:text-purple-800 hover:cursor-pointer">Terms of Service</span> and have read our <span className="text-blue-600 underline hover:text-purple-800 hover:cursor-pointer">Privacy Policy</span>.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
