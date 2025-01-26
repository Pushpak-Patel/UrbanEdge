import React from 'react'

export default function Search() {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='p-4 border-b-2 md:border-r-2 md:min-h-screen md:w-[30%]'>
        <form className='flex flex-col gap-5'>
            <div className='flex items-center gap-2'>
                <label className='whitespace-nowrap font-semibold'>Search Term:</label>
                <input type='text'
                id='searchTerm'
                placeholder='Search...'
                className='border rounded-lg p-1 w-full'
                />
            </div>
            <div className='flex gap-2 flex-wrap items-center'>
                <label className='font-semibold'>Type:</label>
                <div className='flex gap-2'>
                    <input type='checkbox' id='all' className='w-4'/>
                    <span>Rent & Sale</span>
                </div>
                <div className='flex gap-2'>
                    <input type='checkbox' id='rent' className='w-4'/>
                    <span>Rent</span>
                </div>
                <div className='flex gap-2'>
                    <input type='checkbox' id='sale' className='w-4'/>
                    <span>Sale</span>
                </div>
                <div className='flex gap-2'>
                    <input type='checkbox' id='offer' className='w-4'/>
                    <span>Offer</span>
                </div>
            </div>
            <div className='flex gap-2 flex-wrap items-center'>
                <label className='font-semibold'>Amenities:</label>
                <div className='flex gap-2'>
                    <input type='checkbox' id='parking' className='w-4'/>
                    <span>Parking</span>
                </div>
                <div className='flex gap-2'>
                    <input type='checkbox' id='furnished' className='w-4'/>
                    <span>Furnished</span>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <label className='font-semibold'>Sort:</label>
                <select id='sort_order' className='border rounded-lg p-1'>
                    <option>Price high to low</option>
                    <option>Price low to high</option>
                    <option>Latest</option>
                    <option>Oldest</option>
                </select>
            </div>
            <button className='bg-slate-700 text-white p-1 rounded-lg uppercase hover:opacity-90'>
                Search
            </button>
        </form>
      </div>
      <div className='md:w-[70%]'>
        <h1 className='text-2xl font-semibold border-b p-2 text-slate-700 mt-3'>Listing results:</h1>
      </div>
    </div>
  )
}
