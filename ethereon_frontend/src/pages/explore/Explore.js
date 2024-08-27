import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Explore.css';

const Explore = () => {
    const [search, setSearch] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    const users = [
        { id: 1, username: 'username1', profileImage: 'https://via.placeholder.com/100', bio: 'Followed by username4 + 8 more' },
        { id: 2, username: 'username2', profileImage: 'https://via.placeholder.com/100', bio: 'Followed by username1 + 6 more' },
        { id: 3, username: 'username3', profileImage: 'https://via.placeholder.com/100', bio: 'Followed by username2 + 4 more' },
        { id: 4, username: 'username4', profileImage: 'https://via.placeholder.com/100', bio: 'Followed by username3 + 10 more' },
    ];

    useEffect(() => {
        setFilteredUsers(users);
    }, []);

    useEffect(() => {
        if (search) {
            setFilteredUsers(users.filter(user =>
                user.username.toLowerCase().includes(search.toLowerCase())
            ));
        } else {
            setFilteredUsers(users);
        }
    }, [search, users]);

    const handleProfileClick = (userId) => {
        console.log(`View profile of user with ID: ${userId}`);
    };

    return (
        <>
            <Navbar />
            <div className="explore-container">
                <div className="explore-header">
                    <h1>Explore Users</h1>
                    <div className="explore-search">
                        <input
                            type="text"
                            placeholder="Search for users..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
                <div className="user-list">
                    {filteredUsers.map(user => (
                        <div key={user.id} className="user-item" onClick={() => handleProfileClick(user.id)}>
                            <img src={user.profileImage} alt={user.username} className="user-profile-image" />
                            <div className="user-details">
                                <span className="user-username">{user.username}</span>
                                <span className="user-bio">{user.bio}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Explore;
