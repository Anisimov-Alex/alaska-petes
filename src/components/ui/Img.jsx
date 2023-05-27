import React from 'react';

const Img = ({ image, alt = 'picture', className }) => {
    return (
        <div
            className={`rounded-3xl border-darkRed bg-darkRed border-8 object-contain ${className}`}
        >
            <img
                className={`rounded-2xl object-cover w-full h-full`}
                src={image}
                alt={alt}
            />
        </div>
    );
};

export default Img;
