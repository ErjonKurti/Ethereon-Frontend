// Inbox.js
import React, { useState } from 'react';
import { FaCircle } from 'react-icons/fa';
import { IoMdChatbubbles, IoMdSearch } from 'react-icons/io';
import Navbar from '../../components/Navbar/Navbar';
import DmInbox from '../dminbox/DmInbox';
import './Inbox.css';

const conversations = [
    { id: 1, name: 'Mia Malori', message: 'Hey, how are you?', time: '2m ago', avatar: 'https://via.placeholder.com/50', unread: true, status: 'online' },
    { id: 2, name: 'Jane Smith', message: 'Let\'s meet up!', time: '15m ago', avatar: 'https://via.placeholder.com/50', unread: false, status: 'offline' },
    { id: 3, name: 'Alice Johnson', message: 'Can you send the files?', time: '1h ago', avatar: 'https://via.placeholder.com/50', unread: true, status: 'online' },
    { id: 4, name: 'Bob Brown', message: 'Got your email.', time: '3h ago', avatar: 'https://via.placeholder.com/50', unread: false, status: 'offline' },
    // Add more conversation objects here
];

const Inbox = () => {
    const [search, setSearch] = useState('');
    const [activeConversation, setActiveConversation] = useState(null);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleConversationClick = (conversation) => {
        setActiveConversation(conversation);
    };

    const handleCloseDm = () => {
        setActiveConversation(null);
    };

    const filteredConversations = conversations.filter(conv =>
        conv.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            
            <div className="inbox-container">
            <Navbar />
                {activeConversation ? (
                    <DmInbox conversation={activeConversation} onClose={handleCloseDm} />
                ) : (
                    <>
                        <div className="header">
                            <h1 className="header-title">Inbox</h1>
                            <div className="header-icon">
                                <IoMdChatbubbles size={24} />
                            </div>
                        </div>
                        <div className="search-bar">
                            <IoMdSearch size={20} className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search"
                                value={search}
                                onChange={handleSearchChange}
                                className="search-input"
                            />
                        </div>
                        <div className="conversations">
                            {filteredConversations.length === 0 ? (
                                <div className="no-conversations">No conversations found</div>
                            ) : (
                                filteredConversations.map(conv => (
                                    <div
                                        key={conv.id}
                                        className={`conversation-item ${activeConversation && activeConversation.id === conv.id ? 'active' : ''}`}
                                        onClick={() => handleConversationClick(conv)}
                                    >
                                        <div className="avatar-container">
                                            <img src={conv.avatar} alt={conv.name} className="avatar" />
                                            {conv.status === 'online' && <FaCircle className="status-icon online" />}
                                            {conv.status === 'offline' && <FaCircle className="status-icon offline" />}
                                        </div>
                                        <div className="conversation-details">
                                            <div className="conversation-name">
                                                {conv.name}
                                                {conv.unread && <span className="notification-badge">•</span>}
                                            </div>
                                            <div className="conversation-message">{conv.message}</div>
                                        </div>
                                        <div className="conversation-time">{conv.time}</div>
                                    </div>
                                ))
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Inbox;
