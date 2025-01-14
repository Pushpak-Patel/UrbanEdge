import React from 'react'
import {Link} from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-2 max-w-sm mx-auto'>
      <h1 className='text-2xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='username'
        className='border p-2 rounded-lg' id='username'/>
        <input type="text" placeholder='email'
        className='border p-2 rounded-lg' id='email'/>
        <input type="text" placeholder='password'
        className='border p-2 rounded-lg' id='password'/>
        <button className='bg-slate-700 text-white p-1 rounded-lg uppercase 
        hover:opacity-90 disabled:opacity-80'>Sign up</button>
      </form>
      <div className='flex gap-2 mt-3'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
