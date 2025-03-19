import React from 'react';
import Banner from '../Banner/Banner';
import SideBar from '../SideBar/SideBar';

const Home = () => {
    return (
        <div className='bg-gray-200'>
            <Banner></Banner>
            <h3 className='text-4xl text-center mt-12 mb-5 font-bold'> Explore Cutting-Edge Gadgets</h3>
            <div className='grid grid-cols-4 gap-3 py-10 px-20'>
                <div className='grid md:col-span-1 rounded-md px-5 py-4 bg-white '>
                    <SideBar></SideBar>
                </div>
                <div className='grid md:col-span-3 bg-gray-100'>ccontent</div>
            </div>

        </div>
    );
};

export default Home;