import React, { useState } from 'react';
// import './HamburgerIcon.css'; // Import your CSS file for styles

const HamburgerIcon = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div onClick={toggleMenu}>
            {isOpen ? (
                <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                >
                    <line x1="50" y1="50" x2="150" y2="150" stroke="#eae7dc" strokeWidth="20" />
                    <line x1="150" y1="50" x2="50" y2="150" stroke="#eae7dc" strokeWidth="20" />
                </svg>
            ) : (
                <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    className="hamburger-icon"
                >
                    <rect width="160" height="20" x="20" y="50" />
                    <rect width="160" height="20" x="20" y="90" />
                    <rect width="160" height="20" x="20" y="130" />
                </svg>
            )}
        </div>
    );
};

export default HamburgerIcon;
