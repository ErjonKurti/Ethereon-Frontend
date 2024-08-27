// DmInbox.js
import React, { useState } from 'react';
import { FiFileText, FiImage, FiMic, FiVideo } from 'react-icons/fi';
import { IoMdArrowBack } from 'react-icons/io';
import './DmInbox.css';

const DmInbox = ({ conversation, onClose }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [file, setFile] = useState(null);
    const [mediaType, setMediaType] = useState('');

    const handleSendMessage = () => {
        if (message.trim() || file) {
            const newMessage = {
                id: Date.now(),
                text: message,
                media: file ? URL.createObjectURL(file) : null,
                sender: 'user',
            };
            setMessages([...messages, newMessage]);
            setMessage('');
            setFile(null);
            setMediaType('');
        }
    };

    const handleFileUpload = (e) => {
        const uploadedFile = e.target.files[0];
        if (uploadedFile) {
            setFile(uploadedFile);
            setMediaType(uploadedFile.type.split('/')[0]);
        }
    };

    const handleMediaPreview = () => {
        if (mediaType === 'image') return <img src={URL.createObjectURL(file)} alt="Preview" />;
        if (mediaType === 'video') return <video src={URL.createObjectURL(file)} controls />;
        if (mediaType === 'audio') return <audio src={URL.createObjectURL(file)} controls />;
        return <p>File preview not available</p>;
    };

    return (
        <div className="dm-inbox-container">
            <div className="dm-header">
                <IoMdArrowBack size={24} onClick={onClose} className="back-icon" />
                <h2>{conversation.name}</h2>
            </div>
            <div className="dm-messages">
                {messages.map((msg) => (
                    <div key={msg.id} className={`message ${msg.sender}`}>
                        {msg.media ? (
                            <div className="media-preview">
                                {msg.media.endsWith('.mp4') || msg.media.endsWith('.mov') ? (
                                    <video src={msg.media} controls />
                                ) : (
                                    <img src={msg.media} alt="Uploaded" />
                                )}
                                <p>{msg.text}</p>
                            </div>
                        ) : (
                            <p>{msg.text}</p>
                        )}
                    </div>
                ))}
            </div>
            <div className="dm-input">
                {file && (
                    <div className="media-preview">
                        {handleMediaPreview()}
                    </div>
                )}
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message"
                    className="dm-input-field"
                />
                <button className="dm-send-button" onClick={handleSendMessage}>
                    Send
                </button>
                <div className="dm-media-buttons">
                    <label className="dm-media-button">
                        <FiImage size={24} />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="dm-file-input"
                        />
                    </label>
                    <label className="dm-media-button">
                        <FiVideo size={24} />
                        <input
                            type="file"
                            accept="video/*"
                            onChange={handleFileUpload}
                            className="dm-file-input"
                        />
                    </label>
                    <label className="dm-media-button">
                        <FiMic size={24} />
                        <input
                            type="file"
                            accept="audio/*"
                            onChange={handleFileUpload}
                            className="dm-file-input"
                        />
                    </label>
                    <label className="dm-media-button">
                        <FiFileText size={24} />
                        <input
                            type="file"
                            accept="*/*"
                            onChange={handleFileUpload}
                            className="dm-file-input"
                        />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default DmInbox;
