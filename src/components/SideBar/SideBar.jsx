import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  
    return (
        <div className='list-none flex flex-col gap-4 text-[#09080F opacity-60]'>
            <li className='py-2 bg-gray-100 px-4 rounded-xl text-black opacity-60'>
                <Link>All Products</Link>
            </li>
            <li className='py-2 bg-gray-100 px-4 rounded-xl text-black opacity-60'  >
                <Link>Laptop</Link>
            </li>
            <li className='py-2 bg-gray-100 px-4 rounded-xl text-black opacity-60'>
                <Link>Phone</Link>
            </li>
            <li className='py-2 bg-gray-100 px-4 rounded-xl text-black opacity-60'>
                <Link>Accessories</Link>
            </li>
            <li className='py-2 bg-gray-100 px-4 rounded-xl text-black opacity-60'>
                <Link>Smart Watches</Link>
            </li>
            <li className='py-2 bg-gray-100 px-4 rounded-xl text-black opacity-60'>
                <Link>MacBook</Link>
            </li>
            <li className='py-2 bg-gray-100 px-4 rounded-xl text-black opacity-60'>
                <Link>iphone</Link>
            </li>
        </div>
    );
};

export default SideBar;