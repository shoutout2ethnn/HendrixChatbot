import { Link } from 'react-router'

export default function Home() {
    return (
        <div>
            <h1>Welcome to Hendrix.chatbot</h1>
            <Link to="/chat">Go to chat</Link>
        </div>
    );
};