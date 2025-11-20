import { Link } from 'react-router'
import './Home.css'
import PsychedelicBackground from './background';

export default function Home() {
    return (
        <div className="home">
            <PsychedelicBackground/>

            <div className="home-content">
                <h1 className="title" >Welcome to Hendrix.chatbot</h1>
                <Link to="/chat">Go to chat</Link>
            </div>    
        </div>
    );
};

