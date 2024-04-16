import React from 'react';

const Chat = ({ messages, sendMessage }) => { 
    return ( 
        <div> 
            <h2>Chat</h2> 
        <div> 
            {messages.map((message) => ( 
                <div key={message.id}> 
                    <strong>{message.sender}:</strong> {message.text} 
                </div> ))} 
                </div> 
                <div> 
                    <input type="text" placeholder="Type your message" /> 
                    <button onClick={sendMessage}>Send</button> 
                </div> 
            </div> 
        );
    }; 
export default Chat;