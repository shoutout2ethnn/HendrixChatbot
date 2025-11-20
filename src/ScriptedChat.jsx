import { useState, useEffect, useRef } from 'react'
import scriptData from './Script.json';

const ScriptedChat = ({onComplete}) => {
    const [messages, setMessages] = useState([]);
    const [currentNodeId, setCurrentNodeId] = useState('q1');
    const [currentOptions, setCurrentOptions] = useState([]);
    const messageEndRef = useRef(null);


    useEffect(() => {
        if (currentNodeId === 'END') {
            setCurrentOptions([])
            return;
        }
    

    const currentNode = scriptData[currentNodeId]
    if (!currentNode) {
        console.error("Invalid node ID:", currentNodeId);
        return; 

    }

    setMessages(prev => [...prev, { text: currentNode.text, sender: 'bot' }]);

    setCurrentOptions(currentNode.options || []);
}, [currentNodeId]);

    useEffect(() => {
        messageEndRef.current.scrollTo({
            top: messageEndRef.current.scrollHeight,
            behavior: `smooth`
    });
}, [messages]);

const handleOptionClick = (optionText, nextId) => {
    setMessages(prev => [...prev, { text: optionText, sender: 'user' }]);
    setCurrentNodeId(nextId);
}

return (
    <div className="ScriptedChat" style={{
        height: '100%',
        width: '100%',
        dsiplay: 'flex',
        flexDirection: 'column',
    }}>
        
        <ul className="message-list" ref={messageEndRef} style={{
            flexGrow: 1,
            overflowY: 'auto',
            padding: '10px',
            listStyle: 'none',
            margin: 0,
            display: 'flex',
            flexDirection: 'column', 
        }}>
            {messages.map((msg, i) => (
                <li 
                    key={i}
                    className={`message-bubble ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
                    style={{
                        alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start'}}
                >
                    {msg.text}
                </li>
            ))}



        </ul>

        <div className ="options-area" style={{
            flexShrink: 0,
            padding: '10px',
            borderTop: '1px solid #eee',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: currentNodeId === 'END' ? 'center' : 'flex-start',
        }}>
            {currentOptions.map((option, index) => (
                <button 
                    key={index}
                    onClick={() => handleOptionClick(option.text, option.nextId)}
                    className="script-option-button"
                    style={{
                        padding: '10px 15px',
                        border: 'none',
                        borderRadius: '0px',
                        backgroundColor: '#fff',
                        color: '007bff',
                        cursor: 'pointer',
                    }}
                    >
                    {option.text}
                    </button>
            ))}
            {currentNodeId === 'END' && (
                <button 
                    onClick={onComplete}
                    className="Start-AI-chat"
                    style={{
                        padding: '10px 15px',
                        border: 'none',
                        borderRadius: '0px',
                        backgroundColor: '#28a745',
                        color: '#fff',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        fontSize: '1.1em',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    Start AI Chat
                </button>
            )}
        </div>
    </div> 
    );
};

export default ScriptedChat;
                