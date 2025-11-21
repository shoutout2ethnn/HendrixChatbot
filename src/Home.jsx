import React from "react";
import { Link } from 'react-router';
import './Home.css';
import Kaleido from './background.jsx';
import UiWrapper from "./UIBox.jsx";
import hendrix from "./img/hendrix.png";
import crowd from "./img/crowd.png";
import "./mainContainer.css";
import "./UIBox.css"


export default function Home() {
    return (
        <div className="home">
            <Kaleido/>
            <div className="main-container">
                <img src={hendrix} className='hendrix-image' alt="transparent simple image of jimi hendrix"/>
                <img src={crowd} className='crowd-image' alt="transparent simple image of a crowd"/>
                <UiWrapper>
                    <div className="title">
                        <svg width="500" height="175">
                            <defs>
                            <path
                                id="top-arc"
                                d="
                                M 50 200
                                A 150 130 0 0 1 450 215
                                "
                                fill="none"
                            />
                            </defs>

                            <text
                            fontSize="32"
                            textAnchor="middle"
                            fontFamily="Special Elite, serif"
                
                            >
                            <textPath href="#top-arc" startOffset="50%">
                                Are You Experienced?
                            </textPath>
                            </text>
                        </svg>
                        </div>

                    <Link className="chat-button" to="/chat">Begin the Experience</Link>  
                </UiWrapper>
            </div>
        </div>
    );
};

