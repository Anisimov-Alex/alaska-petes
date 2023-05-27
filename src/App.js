import React from 'react';
import MainPage from './components/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import Header from './components/ui/Header';
import Img from './components/ui/Img';
import image from './assets/imgs/pexels-luis-quintero-1857732.png';

const App = () => {
    return (
        <div className=' w-[1280px]  m-auto'>
            <Header className=' m-auto pt-8' />
            <Routes>
                <Route
                    path='/'
                    exact
                    element={<MainPage />}
                />
                <Route
                    path='/test'
                    element={<Img image={image} />}
                />
            </Routes>
        </div>
    );
};

export default App;
