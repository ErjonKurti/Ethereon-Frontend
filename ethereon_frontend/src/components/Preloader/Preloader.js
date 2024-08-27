// Preloader.js
import React from 'react';
import { assets } from '../../assets/assets';
import './Preloader.css';

const Preloader = () => {
    return (
        <>
            <div className='preloader'>
                <div className='logo-container-preloader'>
                    <img src={assets.concept_2} alt='' className='img-1 spinner' />
                        <img src={assets.logo_light} alt='' className='img-2' />
                </div>
            </div>
        </>
    );
}

export default Preloader;
