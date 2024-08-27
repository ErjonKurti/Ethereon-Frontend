import React, { useState } from 'react';
import './SuggestionsModal.css'; // Import the CSS file

const suggestionsData = [
    { id: 1, username: 'user1', profilePic: 'https://via.placeholder.com/100' },
    { id: 2, username: 'user2', profilePic: 'https://via.placeholder.com/100' },
    { id: 3, username: 'user3', profilePic: 'https://via.placeholder.com/100' },
    { id: 4, username: 'user4', profilePic: 'https://via.placeholder.com/100' },
    { id: 5, username: 'user5', profilePic: 'https://via.placeholder.com/100' },
    { id: 6, username: 'user6', profilePic: 'https://via.placeholder.com/100' },
    { id: 7, username: 'user7', profilePic: 'https://via.placeholder.com/100' },
    { id: 8, username: 'user8', profilePic: 'https://via.placeholder.com/100' },
    { id: 9, username: 'user9', profilePic: 'https://via.placeholder.com/100' },
    { id: 10, username: 'user10', profilePic: 'https://via.placeholder.com/100' },
];

const SuggestionsModal = ({ isOpen, onClose }) => {
    const [suggestions, setSuggestions] = useState(suggestionsData);
    const [followed, setFollowed] = useState(new Array(suggestionsData.length).fill(false));

    const handleFollow = (index) => {
        const newFollowed = [...followed];
        newFollowed[index] = !newFollowed[index];
        setFollowed(newFollowed);
    };

    const handleRemove = (id) => {
        setSuggestions(suggestions.filter(suggestion => suggestion.id !== id));
    };

    return (
        isOpen ? (
            <div className="suggestions-modal">
                <button className="modal-close" onClick={onClose}>x</button>
                <div className="suggestions-container">
                    {suggestions.map((suggestion, index) => (
                        <div key={suggestion.id} className="suggestion-window">
                            <div className="suggestion-box">
                                <button
                                    className="suggestion-close"
                                    onClick={() => handleRemove(suggestion.id)}
                                >
                                    X
                                </button>
                                <img src={suggestion.profilePic} alt={suggestion.username} className="suggestion-pic" />
                                <div className="suggestion-info">
                                    <p className="suggestion-username">{suggestion.username}</p>
                                    <button
                                        className={`follow-button ${followed[index] ? 'following' : ''}`}
                                        onClick={() => handleFollow(index)}
                                    >
                                        {followed[index] ? 'Following' : 'Follow'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ) : null
    );
};

export default SuggestionsModal;
