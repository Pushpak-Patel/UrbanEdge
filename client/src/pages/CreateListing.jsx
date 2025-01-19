import React from "react";

export default function CreateListing() {
  return (
    <main className="p-2 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold text-center my-3">
        Create a Listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <input
            type="text"
            placeholder="Name"
            className="border p-1 
            rounded-lg"
            id="name"
            maxLength="100"
            minLength="5"
            required
          />
          <textarea
            type="text"
            placeholder="Description"
            className="border p-1 
            rounded-lg"
            id="description"
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="border p-1 
            rounded-lg"
            id="address"
            required
          />
          <div className="flex gap-5 flex-wrap">
            <div className="flex gap-1">
                <input type="checkbox" id='sell' className="w-4"/> 
                <span>Sell</span>
            </div>
            <div className="flex gap-1">
                <input type="checkbox" id='rent' className="w-4"/> 
                <span>Rent</span>
            </div>
            <div className="flex gap-1">
                <input type="checkbox" id='parking' className="w-4"/> 
                <span>Parking Spot</span>
            </div>
            <div className="flex gap-1">
                <input type="checkbox" id='furnished' className="w-4"/> 
                <span>Furnished</span>
            </div>
            <div className="flex gap-1">
                <input type="checkbox" id='offer' className="w-4"/> 
                <span>Offer</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-1">
                <input type="number" id='bedrooms' min='1' max='10' required
                className='border border-gray-300 rounded-lg'/>
                <p>Beds</p>
            </div>
            <div className="flex items-center gap-1">
                <input type="number" id='bathrooms' min='1' max='10' required
                className='border border-gray-300 rounded-lg'/>
                <p>Baths</p>
            </div>
            <div className="flex items-center gap-1">
                <input type="number" id='regularPrice' required
                className='border border-gray-300 rounded-lg'/>
                <div className="flex flex-col items-center">
                    <p>Regular Price</p>
                    <span className="text-xs">(₹/month)</span>
                </div>
            </div>
            <div className="flex items-center gap-1">
                <input type="number" id='discountedPrice' required
                className='border border-gray-300 rounded-lg'/>
                <div className="flex flex-col items-center">
                    <p>Discounted Price</p>
                    <span className="text-xs">(₹/month)</span>
                </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-1">
            <p className="font-semibold">Images:
                <span className="font-normal text-gray-600 ml-2">The first image will be the cover (max 6)</span>
            </p>
            <div className="flex gap-2">
                <input className="p-1 border border-gray-300 rounded w-full"
                type="file" id='images' accept='image/*' multiple/>
                <button className="p-1 text-green-700 border border-green-700 
                rounded uppercase hover:shadow-lg disabled:opacity-80">Upload</button>
            </div>
        <button className="p-1 bg-slate-700 text-white rounded-lg uppercase 
        hover:opacity-80">Create Listing</button>
        </div>
      </form>
    </main>
  );
}
