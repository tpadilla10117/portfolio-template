import React from 'react';
import './About.css';

import Award from '../../assets/award_img.png';

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card bg">

                </div>
                <div className="about-card">
                    <img
                        src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="about-img"
                    />
                </div>
            </div>

            <div className="about-right">
                <h1 className="about-title"> About Me</h1>
                <p className="about-sub">It is a long established fact taht a reader will be distracted by the readable content.</p>
                <p className="about-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <div className="about-award">
                    <img className="about-award-img" src={Award} alt=""/>
                    <div className="about-award-texts">
                        <h4 className="about-award-title">International Design</h4>
                        <p className="about-award-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;