import React from 'react';
import logo from '../../assets/imgs/alaska-pete-guy 1.png';
import StarButton from '../ui/StarButton/StarButton';
const Logo = () => {
    return (
        <div className=' font-drukCondTrial text-[3.5rem] text-primary pt-5'>
            <div className='flex justify-between'>
                <div className=' flex justify-normal cursor-pointer'>
                    <span>Alaska</span>
                    <img
                        src={logo}
                        className=' h-min align-middle m-auto mr-1'
                    />
                    <span>Pete's</span>
                </div>
                <StarButton type='mainMenu' />
            </div>
        </div>
    );
};

export default Logo;
