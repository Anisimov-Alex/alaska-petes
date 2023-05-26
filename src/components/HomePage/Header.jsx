import React from 'react';
import plate from '../.././assets/imgs/plate.svg';
import Img from '../ui/Img';
import image1 from '../../assets/imgs/pexels-luis-quintero-1857732.png';
import Logo from '../ui/Logo';
import StarButton from '../ui/StarButton/StarButton';

const Header = () => {
    return (
        <div className='w-[1320px] h-[1017px] relative m-auto pl-8'>
            <Logo />
            <div className=' relative'>
                <img
                    src={plate}
                    alt=''
                    className=' z-10 relative'
                />
                <Img
                    image={image1}
                    className=' rotate-3 absolute right-0 top-[160px] z-0'
                />
                <h1 className=' font-drukCondTrial text-darkRed text-[300px] uppercase absolute top-0 z-20'>
                    Alaska pete's
                </h1>
                <h3 className=' font-drukTextTrial text-primary text-[32px] leading-[94%] absolute top-0 right-[354px] font-medium'>
                    A Casual BBQ, Steak &<br />
                    Seafood House
                </h3>
                <StarButton
                    type='Menu'
                    className=' absolute z-20 right-32 top-[450px]'
                />
            </div>
        </div>
    );
};

export default Header;
