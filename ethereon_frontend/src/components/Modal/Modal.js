import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, title, data, currentUser }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [followed, setFollowed] = useState(
        data.reduce((acc, item) => {
            acc[item] = false; // Initially, no one is followed
            return acc;
        }, {})
    );

    const toggleFollow = (item) => {
        setFollowed((prev) => ({
            ...prev,
            [item]: !prev[item]
        }));
    };

    const filteredData = data.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close1" onClick={onClose}>×</button>
                <div className="modal-header">
                    <div className="modal-header-info">
                        <h2>{currentUser}</h2>
                        <h3>{title}</h3>
                    </div>
                </div>
                <input
                    type="text"
                    placeholder="Search..."
                    className="modal-search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="modal-list-container">
                    {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                            <div key={index} className="modal-item">
                                <div className="modal-item-content">
                                    <img
                                        src={`https://via.placeholder.com/50x50`} // Placeholder image URL
                                        alt={`User ${index + 1}`}
                                        className="modal-item-pic"
                                    />

                                    <div className="modal-item-info">
                                        <span className="modal-item-username">{item}</span>
                                        <button
                                            className="modal-item-button"
                                            onClick={() => {
                                                if (title === 'Following' && item === currentUser) {
                                                    return; 
                                                }
                                                toggleFollow(item);
                                            }}
                                        >
                                            {title === 'Following'
                                                ? item === currentUser
                                                    ? 'You'
                                                    : followed[item]
                                                        ? 'Follow'
                                                        : 'Following'
                                                : item === currentUser
                                                    ? 'You'
                                                    : followed[item]
                                                        ? 'Following'
                                                        : 'Follow'
                                            }
                                        </button>
                                    </div>


                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No results found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
