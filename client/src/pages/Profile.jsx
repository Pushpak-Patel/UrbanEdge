import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
  const {currentUser} = useSelector((state) => state.user);
  return (
    <div className='p-2 max-w-sm mx-auto'>
      <h1 className='text-2xl font-semibold text-center my-2'>Profile</h1>
      <form className='flex flex-col gap-2'>
        <img src={currentUser.avatar} alt='profile'
        className='rounded-full h-22 w-22 object-cover cursor-pointer 
        self-center'/>
        <input type='text' placeholder='username' id='username'
        className='border p-1 rounded-lg '/>
        <input type='email' placeholder='email' id='email'
        className='border p-1 rounded-lg '/>
        <input type='text' placeholder='password' id='password'
        className='border p-1 rounded-lg '/>
        <button className='bg-slate-700 text-white rounded-lg
        p-1 uppercase hover:opacity-90 disabled:opacity-80'>update</button>
      </form>
      <div className='flex justify-between mt-2'>
        <span className='text-red-700 cursor-pointer'>Delete account</span>
        <span className='text-red-700 cursor-pointer'>Sign out</span>
      </div>
    </div>
  )
}
