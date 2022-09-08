import React from 'react';

import './hero_section.css';
// @ts-ignore
import hero_image from '../assets/img/mobile_payments.svg';

const HeroSection = () => {
    return (
        <div className="hero">
            <div className="hero-right">
                <img className="hero-right--img" src={hero_image} alt="MoMOuth-Tracker"/> 
            </div>
            <div className="hero-left">
                <h3 className="hero-left--head">MoMOuth-Tracker</h3>
                <p className="hero-left--desc">Track each and every online transaction you make on the the online platforms with MoMOuth on <span >MoMOuth-Track</span> 🤑</p>
                <button className="button-57" role="button">
                    <span className="text">For Developers</span>
                    <span>Click to Register you Application for MoMOuth</span>
                </button>
            </div>
        </div>
    );
};

export default HeroSection;