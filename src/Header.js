// Header.js
import React from 'react';
import CandlestickChart from './CandlestickChart'; // Adjust the import path as needed



const headerStyle = {
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
    padding: '1rem 0'
};

const Header = () => {
    return (
        <header style={headerStyle}>
            <nav>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ display: 'inline', margin: '0 10px' }}>
                        <a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
                    </li>
                    <li style={{ display: 'inline', margin: '0 10px' }}>
                        <a href="#services" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
                    </li>
                    <li style={{ display: 'inline', margin: '0 10px'}}>
                         <a href="#about us" style={{ color: 'white', textDecoration: 'none' }}>About Us</a>
                    </li>
                    <li style={{display: 'inline', margin: '0 10px'}}>
                        <a href="#market" style={{color: 'white', tetDecoration: 'none' }}>Market</a>
                    </li>
                    {/* Add other list items as needed */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
