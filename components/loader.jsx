import React from 'react';
import Image from 'next/image';
import loading from '../public/img/Ellipsis@1x-1.0s-200px-200px.gif'

const Loader = () => {
    return (

        <div className="fixed inset-0 h-screen w-full bg-[#000000d5] flex items-center justify-center overscroll-none z-50">
            <div className="loader ease-linear rounded-full flex items-center justify-center flex-col w-40">
                <Image src={loading} className="h-auto w-auto" />
                <p className="text-white">Please wait.....</p>
            </div>
        </div>

    );
};

export default Loader;
