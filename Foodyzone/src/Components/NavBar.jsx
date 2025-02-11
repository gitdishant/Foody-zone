import React from "react";
import logo from '../assets/logo.svg';

const NavBar = ({ filterData }) => {
  return (
    <div className='h-50 bg-gray-900'>
      <div className='text-white flex justify-between p-5'>
        <img src={logo} alt="logo" className='' />
        <input type="text" placeholder='Search food...' className='border p-2 rounded-xl border-red-500'/>
      </div>
      <div className='flex justify-center'>
        <button onClick={() => filterData("all")} className='bg-red-600 cursor-pointer px-4 py-2 border border-2 border-black rounded-xl ml-2 text-white hover:bg-red-700'>All</button>
        <button onClick={() => filterData("breakfast")} className='bg-red-600 cursor-pointer px-4 py-2 border border-2 border-black rounded-xl ml-2 text-white hover:bg-red-700'>Breakfast</button>
        <button onClick={() => filterData("lunch")} className='bg-red-600 cursor-pointer px-4 py-2 border border-2 border-black rounded-xl ml-2 text-white hover:bg-red-700'>Lunch</button>
        <button onClick={() => filterData("dinner")} className='bg-red-600 cursor-pointer px-4 py-2 border border-2 border-black rounded-xl ml-2 text-white hover:bg-red-700'>Dinner</button>
      </div>
    </div>
  );
};

export default NavBar;
