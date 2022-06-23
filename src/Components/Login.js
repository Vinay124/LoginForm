import React, { useRef } from 'react'
import { Link } from 'react-router-dom' 

export default function Login() {
  
  let BtnRfc = useRef();
  let enbbtn = (event) =>{
    let flg = event.target.checked
    BtnRfc.current.disabled = !flg
  } 

  return (
    <div className="min-h-full flex items-center justify-center py-10 px-0 my-5 sm:px-6 lg:px-8 min-h-screen flex flex-col">
      <div className='max-w-md w-full space-y8 bg-white px-7 py-9 rounded shadow-md'>
        <div>
          <h1 className="mt-6 text-3xl font-semibold font-extrabold text-gray-900">Welcome Back!</h1>
        </div>
        <div>
          <form className="mt-8 space-y-6" action='#' method='POST' >
            <div>
              <input className="apperence-none rounded-none outline-inherit rounded relative block w-full px-3 py-3 border border-b-neutral-900 rounded-t-md focus:outline-none focus:ring-indigo-50  focus:z-10 sm:text-sm outline:none placeholder:italic placeholder:text-slate-400 " type="email" id="email" name="email" placeholder="Enter UserName or Email"/>
            </div>
            <div className='py-2'>
              <input className="apperence-none rounded-none rounded relative block w-full px-2.5 py-3 border border-b-neutral-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm  outline:none placeholder:italic placeholder:text-slate-400" type="password" name="password" id="password" placeholder="Please Enter Password"/>
            </div>
            <div className='flex justify-between'>
            <div className='text-center'>
              <input type="checkbox" onChange={enbbtn} id="checkbox"/>
              <label className='pl-3 text-sm font-sans'>Remember me</label>
            </div>
            <div>
              <Link to="/" className='text-sm bg-black-800 font-sans font-semibold'>Forgot Password?</Link>
            </div>
            </div>
            <div className='flex justify-between items-center'>
              <div>
                <Link to="/" className="text-green-500 text-center capitalize font-ml font-bold">Create Account</Link>
              </div>
            <div>
              <input className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' type="submit" ref={BtnRfc} disabled id="submit" name='submitBtn'/>
            </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
