import React, { useRef , useState } from 'react'
import { Link } from 'react-router-dom' 
// import { Eye } from 'heroicons-react';

export default function Login() {

    const [values, setValues] = useState({
      password: "",
      showPassword: false,
    });
    
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
    
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    
    const handlePasswordChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

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
          <form className="mt-8 space-y-6" >
            <div>
              <input className="apperence-none rounded-none outline-inherit 
              rounded relative block w-full px-3 py-3 border border-b-neutral-900 
              rounded-t-md focus:outline-none focus:ring-indigo-50  focus:z-10 
              sm:text-sm outline:none placeholder:italic placeholder:text-slate-400 " type="email" id="email" name="email" placeholder="Enter UserName or Email"/>
            </div>
            <div className="py-2 relative">
              <input
                className="apperence-none rounded-none rounded relative block 
              w-full px-2.5 py-3 border border-b-neutral-900 rounded-t-md 
              focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm  
              outline:none placeholder:italic placeholder:text-slate-400"
                type={values.showPassword ? "text" : "password"}
                onChange={handlePasswordChange("password")}
                value={values.password}
                placeholder="Please Enter Password"
              />
              <div className="py-0 px-80  absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
              <button className="btn btn-outline-primary" onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}>
                {values.showPassword ? 
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg> : 
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>} </button>
              </div>
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
            <div className='border-t-2 border-black-100 border-b-2 border-black-100 text-center'>
              <div className='py-2'>
                <Link to="/" className='text-sm text-center'>SIGN IN WITH SSO</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
