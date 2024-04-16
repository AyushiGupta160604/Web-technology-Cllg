import React, { useState, useEffect } from 'react'; 
import { auth, firestore } from './firebase'; 
import Conversations from './components/Conversations'; 
import Chat from './components/Chat'; 
import { useCollectionData } from 'react-firebase-hooks/firestore'; 

const App = () => { 
    const [user, setUser] = useState(null); 
    const [selectedConversation, setSelectedConversation] = useState(null); 
    useEffect(() => { 
        const unsubscribe = auth.onAuthStateChanged((user) => { 
            setUser(user); }); return () => unsubscribe();
        }, []);
    const conversationsRef = firestore.collection('conversations'); 
    const [conversations] = useCollectionData(conversationsRef, { 
idField: 'id' }); 
    const messagesRef = selectedConversation ? conversationsRef.doc(selectedConversation.id).collection('messages') : null; 
    const [messages] = useCollectionData(messagesRef, { idField: 'id' }); const sendMessage = () => { 
    }; 
        return ( 
            <div> {
                user ? ( 
                    <> 
                        <button onClick={() => auth.signOut()}>
                            Sign Out
                        </button> 
                        <Conversations conversations={
                            conversations} 
                            onSelectConversation={
                                setSelectedConversation} 
                        /> 
                        {selectedConversation && <Chat messages={messages} sendMessage={sendMessage} />
                        } 
                    </> 
                    ) : 
                    ( 
                        <button onClick={() => auth.signInAnonymously()}>
                            Sign In Anonymously</button> )} 
                            </div> 
                        ); 
                    }; 
                        export default App;