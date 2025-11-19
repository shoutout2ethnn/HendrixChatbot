import ChatBox from "./ChatBox.jsx";
import './ChatPage.css';
export default function Chatpage() {
    return (
        <div className="ChatPage-container">
            <h1 className="ChatPage-header">Chat</h1>
            <ChatBox />
        </div>
    );
}