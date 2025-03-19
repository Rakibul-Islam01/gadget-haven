import React from 'react';
import banner from './../../../public/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className='bg-[#9538E2] pb-48 rounded-b-lg'>
                <h3 className='text-5xl font-bold text-center pt-12 pb-6 text-white leading-tight'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h3>
                <p className='text-white text-center mb-8'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <div className='flex justify-center pb-10'>
                    <div className="btn text-[#9538E2]">Shop Now</div>
                </div>
            </div>
            <div className=''>
                <div className='border relative flex justify-center border-white p-3 rounded-lg'>
                    <img className='max-w-screen-md w-4/5 relative -top-48 rounded-lg' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;