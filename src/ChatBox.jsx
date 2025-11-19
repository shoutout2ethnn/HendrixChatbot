import { useState } from 'react'
import './ChatBox.css';
export default function ChatBox() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

function handleSend() {
        if (message.trim() === "") return;
        setMessages(prevMessages => [...prevMessages, { text: message, sender: 'user'}]);
        setMessage("");
        setTimeout(() => {
            setMessages(prevMessages => [...prevMessages, { text: "This is a bot response.", sender: 'bot'}]);
        }, 500);
}
return (
    <div className="Chatbox">
        <ul className="message-list">
            {messages.map((msg,i) => (
                <li 
    key={i} 
    className={`message-bubble ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
>
    {msg.text}
</li>
            ))}
              
        </ul>
        <div className="input-area">
        <input 
        type="text"
        value={message}
        placeholder="Type your message..."
        onChange={(e) => setMessage(e.target.value)}
        style={{ padding: '15px', fontSize: '16px'}}
        />
        <button onClick={() => handleSend()}style={{ padding: '15px', fontSize: '16px'}}>Send</button>
        </div>
    </div>

);
}