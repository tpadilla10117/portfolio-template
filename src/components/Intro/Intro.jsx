import React from 'react';
import "./Intro.css";

const Intro = () => {


    const IntroOptions = [
        {
          id: 1,
          title: "Web Developer",
        },
        {
            id: 2,
            title: "UI/UX Designer",
        },
        {
            id: 3,
            title: "Photographer",
        },
        {
            id: 4,
            title: "Writer",
        },
        {
            id: 5,
            title: "Contact Creator",
        }
      ];

    return (
        <div className="intro">

            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="intro-introduction">Hello, my name is</h2>
                    <h2 className="intro-name">Turtles</h2>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            {IntroOptions.map( options => {
                                return (
                                
                                    <div className="intro-title-item" key={options.id}>
                                    {options.title}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>

            <div className="intro-right">
            right
            </div>
            
        </div>
    );
};

export default Intro;