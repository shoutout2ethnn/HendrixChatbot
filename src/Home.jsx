import React from "react";
import { Link } from 'react-router';
import './Home.css';
import Kaleido from './background.jsx';
import UiWrapper from "./UIBox.jsx";
import hendrix from "./img/hendrix.png";
import "./mainContainer.css";


export default function Home() {
    return (
        <div className="home">
            <Kaleido/>
            <div className="main-container">
                <img src={hendrix} className='hendrix-image' alt="transparent simple image of jimi hendrix"/>
                <UiWrapper>
                    <h1 className="title" >Are you experienced?</h1>
                    <Link to="/chat">Go to chat</Link>  
                </UiWrapper>
            </div>
        </div>
    );
};

