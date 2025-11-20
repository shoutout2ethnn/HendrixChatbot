import { useState } from "react";
import ChatBox from "./ChatBox.jsx";
import './ChatPage.css';
import ScriptedChat from "./ScriptedChat.jsx";
export default function Chatpage() {
    const [isScriptComplete, setIsScriptComplete] = useState(false);
    
    const handleScriptComplete = () => {
        setIsScriptComplete(true);
    };
    return (
        <div className="ChatPage-container">
            <h1 className="ChatPage-header">Chat</h1>

            <div className="main-chat-area-wrapper">
                {!isScriptComplete && (
                    <div className="script-wrapper">
                        <ScriptedChat onComplete={handleScriptComplete} />
                    </div>
                )}
            
            {isScriptComplete && (
                <div className="AI-chat-wrapper">
                    <ChatBox />
                </div>
            )}
            </div>
        </div>
    );
}