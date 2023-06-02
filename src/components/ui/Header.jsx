import React from 'react';
import logo from '../../assets/imgs/alaska-pete-guy 1.png';
import StarButton from './StarButton/StarButton';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className=' font-drukCondTrial text-[3.5rem] text-primary pt-5'>
            <div className='flex justify-between'>
                <NavLink
                    to='/'
                    className=' flex justify-normal cursor-pointer'
                >
                    <span>Alaska</span>
                    <img
                        src={logo}
                        className=' h-min align-middle m-auto mr-1'
                        alt='logo'
                    />
                    <span>Pete's</span>
                </NavLink>
                <StarButton type='mainMenu' />
            </div>
        </div>
    );
};

export default Header;
