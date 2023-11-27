// Footer.js
import React from 'react';

const footerStyle = {
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
    padding: '1rem 0',
    position: 'absolute',
    bottom: 0,
    width: '100%'
};

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; 2023 CryptoApp</p>
        </footer>
    );
};

export default Footer;
