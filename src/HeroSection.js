// HeroSection.js
import React from 'react';

const heroStyle = {
    textAlign: 'center',
    padding: '50px 20px',
    background: 'url(path_to_your_image.jpg) no-repeat center center', // Replace with your image path
    backgroundSize: 'cover',
    color: 'white'
};

const HeroSection = () => {
    return (
        <section style={heroStyle}>
            <h1>Welcome to Our App</h1>
            <p>Explore the world of cryptocurrency.</p>
            <button style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1rem'
            }}>Get Started</button>
        </section>
    );
};

export default HeroSection;
