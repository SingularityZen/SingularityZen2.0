// HeroSection.js
import React from 'react';

const herostyle = {
    textAlign: 'center',
    padding: '50px 20px',
    background: 'url(https://hero.fandom.com/wiki/Heroes_Wiki:Hero?file=Hero.jpeg) no-repeat center center', // Replace with your image path
    backgroundSize: 'cover',
    color: 'white'
};

const HeroSection = () => {
    return (
        <div >
            <h1>Welcome to Our App</h1>
            <p>Explore the world of cryptocurrency.</p>
            
        </div>
    );
};

export default HeroSection;
