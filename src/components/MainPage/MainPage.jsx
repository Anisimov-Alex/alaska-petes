import React from 'react';
import Img from '../ui/Img';
import image1 from '../../assets/imgs/pexels-photo-4551907.webp';
import plate from '../.././assets/imgs/plate.svg';
import image2 from '../../assets/imgs/pexels-luis-quintero-1857732.png';
import StarButton from '../ui/StarButton/StarButton';

const MainPage = () => {
    return (
        <div className=' relative m-auto'>
            <div className=' relative'>
                <img
                    src={plate}
                    alt=''
                    className=' z-10 relative'
                />
                <Img
                    image={image2}
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
            <div className='relative pt-52 grid grid-cols-2'>
                <Img
                    image={image1}
                    className=' rotate-[-7deg] z-0 mr-10 w-11-12 h-10/12 mt-24'
                />
                <div>
                    <h3 className=' font-drukCondTrial text-darkRed text-9xl uppercase mb-28 ml-8'>
                        The restaurant
                    </h3>
                    <div className=' font-lora text-primary text-xl ml-4'>
                        <p>
                            In the fall of ’97, that’s 1897, just about the time
                            of the Klondike Gold Rush, miners would search for
                            golden riches from morn ’till dusk. There was not
                            much to do in between, so they would go to the
                            nearest restaurant and saloon to tell their tales
                            and spend time with friends.
                        </p>
                        <br />
                        <p>
                            In fact, Alaska Pete’s Roadhous Grille has earned
                            the reputation as the Pocono’s Premier Steakhouse
                            and Fresh Seafood Restaurant. Surrounded by
                            authentic antiques, beautiful native wooden
                            interiors and a down home friendly northwestern
                            atmosphere, we welcome you, your family and your
                            friends.
                        </p>
                        <br />
                        <p>
                            At Alaska Pete’s Roadhouse Grille, you can have just
                            about any type of great food and drink that you are
                            in the mood for. Alaska Pete’s Roadhouse Grille is
                            the Pocono’s must visit experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
