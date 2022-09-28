import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2>TheMealDB</h2>
            <div className='header-item'>
                <a href="">Home</a>
                <a href="">Food</a>
                <a href="">Fish</a>
                <a href="">FastFood</a>
            </div>
        </div>
    );
};

export default Header;