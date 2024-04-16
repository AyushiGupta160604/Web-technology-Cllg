import React from 'react';
const Conversations = ({ conversations, onSelectConversation }) => {
    return (
        <div>
            <h2>Conversations</h2> 
            <ul>
            {conversations.map((conversation) => ( 
                <li key={conversation.id} onClick={() => onSelectConversation(conversation)}> 
                    {conversation.name} 
                </li>
                ))}
            </ul>
        </div>
    );
};

export default Conversations;