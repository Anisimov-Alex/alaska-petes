import React from 'react';
import MenuButtonWithText from './MenuButtonWithText';
import MenuButton from './MenuButton';

const StarButton = ({ type = 'Menu', className }) => {
    let Component;
    switch (type) {
        case 'Menu':
            Component = MenuButtonWithText;
            break;
        case 'mainMenu':
            Component = MenuButton;
        default:
            break;
    }
    return <Component className={`${className} cursor-pointer`} />;
};

export default StarButton;
