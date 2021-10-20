import React from 'react';
import Sun from '../../assets/sun_img.png';
import Moon from '../../assets/moon_img.png';
import './Toggle.css';

/* This component is to toggle Dark Mode: */
const Toggle = () => {
    return (
        <div className="toggle">
            <img 
                src={Sun}
                alt=""
                className="toggle-icon"
            />
            <img 
                src={Moon}
                alt=""
                className="toggle-icon"
            />
            <button className="toggle-button"></button>
        </div>
    );
};

export default Toggle;