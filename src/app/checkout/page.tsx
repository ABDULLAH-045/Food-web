import React from 'react';
import MainImg from '../components/mainimg';

const CheckOut = () => {
  return (
  <><MainImg pagename={'Check Out'} openedpage={'checkout'} ></MainImg>
  
  <div className='px-64 bg-white'>  
   
    <div className='flex justify-between '>
    <div className="bg-white text-black p-8 w-full lg:w-2/3">
      <h2 className="text-lg mb-4">Shipping Address</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <input 
          type="text" 
          placeholder="First name" 
          className="bg-white border border-[#C4C4C4] w-[420px] h-[56px] p-2"
        />
        <input 
          type="text" 
          placeholder="Last name" 
          className="bg-white border border-[#C4C4C4]  w-[420px] h-[56px] p-2"
        />
        <input 
          type="email" 
          placeholder="Email address" 
          className="bg-white border border-[#C4C4C4]  w-[420px] h-[56px] p-2"
        />
        <input 
          type="text" 
          placeholder="Phone number" 
          className="bg-white border border-[#C4C4C4] w-[420px] h-[56px] p-2"
        />
        <input 
          type="text" 
          placeholder="Company" 
          className="bg-white border border-[#C4C4C4] w-[420px] h-[56px] p-2"
        />
        <select 
          className="bg-white border border-[#C4C4C4] w-[420px] h-[56px] p-2"
        >
          <option>Choose country</option>
        </select>
        <select 
          className="bg-white border border-[#C4C4C4] w-[420px] h-[56px] p-2"
        >
          <option>Choose city</option>
        </select>
        <input 
          type="text" 
          placeholder="Zip code" 
          className="bg-white border border-[#C4C4C4] w-[420px] h-[56px] p-2"
        />
        <input 
          type="text" 
          placeholder="Address 1" 
          className="col-span-1 md:col-span-2 bg-white border  w-[420px] h-[56px] border-[#C4C4C4] p-2"
        />
        <input 
          type="text" 
          placeholder="Address 2" 
          className="col-span-2 md:col-span-1 bg-white border w-[420px] h-[56px] border-[#C4C4C4] p-2"
        />
        <div className="col-span-2 md:col-span-2 flex items-center">
          <input 
            type="checkbox" 
            id="sameAddress" 
            className="bg-white border border-[#C4C4C4]"
          />
          <label htmlFor="sameAddress" className="ml-2">
            Same as shipping address
          </label>
        </div>
      </form>
      <div className="flex justify-between mt-4 space-x-2">
        <button className="bg-gray-800 text-white px-4 py-2  w-[420px] h-[56px]">
          Back to cart
        </button>
        <button className="bg-[#FF9F0D] text-white px-4 py-2  w-[420px] h-[56px]">
          Proceed to shipping
        </button>
      </div>
    </div>
     <div className="bg-white text-black p-8  ">

      <div className="space-y-24">
        
        <div className="flex items-center">
          <img src="footer1.png" alt="Chicken Tikka Kabab" className="w-20 h-20" />
          <div className="ml-4">
            <h3>Chicken Tikka Kabab</h3>
            <p>150 gm net</p>
            <p>$50</p>
          </div>
        </div>
        <div className="flex items-center">
          <img src="footer1.png" alt="Chicken Tikka Kabab" className="w-20 h-20" />
          <div className="ml-4">
            <h3>Chicken Tikka Kabab</h3>
            <p>150 gm net</p>
            <p>$50</p>
          </div>
        </div>
        <div className="flex items-center">
          <img src="footer1.png" alt="Chicken Tikka Kabab" className="w-20 h-20" />
          <div className="ml-4">
            <h3>Chicken Tikka Kabab</h3>
            <p>150 gm net</p>
            <p>$50</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <p>Sub-total</p>
          <p>$130</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between">
          <p>Discount</p>
          <p>25%</p>
        </div>
        <div className="flex justify-between">
          <p>Tax</p>
          <p>$54.76</p>
        </div>
        <div className="flex justify-between border-t border-gray-700 mt-2 pt-2">
          <p>Total</p>
          <p className="font-bold">$432.65</p>
        </div>
      </div>
      <button className="bg-[#FF9F0D] text-white  w-[420px] h-[56px] mt-4 py-2">Place an order</button>
    </div>
    </div>
    </div>
    </>
  );
};

export default CheckOut;
