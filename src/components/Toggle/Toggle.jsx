import React, {useContext} from 'react';
import Sun from '../../assets/sun_img.png';
import Moon from '../../assets/moon_img.png';
import './Toggle.css';
import { ThemeContext } from '../../context';

/* This component is to toggle Dark Mode: */
const Toggle = () => {

    const theme = useContext(ThemeContext);

/* Dispataches the UI action when toggle button is clicked: */
    const handleClick = () => {
        theme.dispatch( {type: 'TOGGLE'});
    }

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
            <div className="toggle-button" onClick={handleClick} style={ {left: theme.state.darkMode ? 0 : 25} }></div>
        </div>
    );
};

export default Toggle;