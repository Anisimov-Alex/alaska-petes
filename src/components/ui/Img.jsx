import React from 'react';

const Img = ({ image, alt = 'picture', width, className }) => {
    return (
        <div className={` rounded-3xl w-fit mx-auto ${className}`}>
            <img
                className={`rounded-3xl w-[${width}]`}
                src={image}
                alt={alt}
            />
            <div className=' absolute w-[100%] h-[100%] top-0 rounded-3xl shadow-[0_0_0_6px_darkRed]'></div>
        </div>
    );
};

export default Img;
