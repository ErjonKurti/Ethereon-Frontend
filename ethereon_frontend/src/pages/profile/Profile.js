import React, { useState } from 'react';
import { FaPlus, FaUser } from 'react-icons/fa';
import Modal from '../../components/Modal/Modal';
import Navbar from '../../components/Navbar/Navbar';
import ShareModal from '../../components/ShareModal/ShareModal';
import SuggestionsModal from '../../components/SuggestionsModal/SuggestionsModal';
import './Profile.css';

const Profile = () => {
    const posts = [
        'post1.jpg', 'post2.jpg', 'post3.jpg', 'post4.jpg', 'post5.jpg', 'post6.jpg', 'post7.jpg', 'post8.jpg', 'post9.jpg',
    ];

    const followers = Array.from({ length: 300 }, (_, index) => `follower${index + 1}`);
    const following = Array.from({ length: 100 }, (_, index) => `following${index + 1}`);

    const [isFollowersOpen, setIsFollowersOpen] = useState(false);
    const [isFollowingOpen, setIsFollowingOpen] = useState(false);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const [isSuggestionsModalOpen, setIsSuggestionsModalOpen] = useState(false);

    const profileUrl = 'https://ethereon.netlify.app/profile';

    return (
        <>
            <Navbar />
            <div className="profile-container">
                <header className="profile-header">
                    <div className="profile-pic">
                        <img src="/assets/img/pfp.jpg" alt="Profile" />
                        <h2 className="profile-name">Ethereon</h2>
                    </div>
                    <div className="profile-info">
                        <h1 className="profile-username">@ethereon</h1>

                        <div className="profile-stats">
                            <div className="stat" onClick={() => setIsFollowersOpen(true)}>
                                <strong className="stat-number">9</strong>
                                <span className="stat-label">posts</span>
                            </div>
                            <div className="stat" onClick={() => setIsFollowersOpen(true)}>
                                <strong className="stat-number">22.8m</strong>
                                <span className="stat-label">followers</span>
                            </div>
                            <div className="stat" onClick={() => setIsFollowingOpen(true)}>
                                <strong className="stat-number">100</strong>
                                <span className="stat-label">following</span>
                            </div>
                        </div>
                        <div className="profile-bio">
                            <p>Discover what's new on ethereon.</p>
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer">help.ethereon.com</a>
                        </div>
                        <div className="profile-buttons">
                            <a href='/editprofile'><button className="edit-profile">Edit Profile</button></a>
                            <button className="share-profile" onClick={() => setIsShareModalOpen(true)}>
                                Share Profile
                            </button>
                            <button className="icon-button" onClick={() => setIsSuggestionsModalOpen(true)}>
                                <FaPlus /><FaUser />
                            </button>
                        </div>
                    </div>
                </header>
                <div className="profile-highlights">
                    <div className="highlight">Highlight 1</div>
                    <div className="highlight">Highlight 2</div>
                    <div className="highlight">Highlight 3</div>
                </div>
                <nav className="profile-tabs">
                    <button className="active">Posts</button>
                    <button>Reels</button>
                    <button>Photos</button>
                </nav>
                <div className="profile-content">
                    {posts.map((post, index) => (
                        <div className="profile-post" key={index}>
                            <img src={`/assets/img/app.jpg`} alt={`Post ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Followers Modal */}
            <Modal
                isOpen={isFollowersOpen}
                onClose={() => setIsFollowersOpen(false)}
                title="Followers"
                data={followers}
                profilePic="/assets/img/pfp.jpg"
                username="Ethereon"
                isFollowing={false}
            />

            {/* Following Modal */}
            <Modal
                isOpen={isFollowingOpen}
                onClose={() => setIsFollowingOpen(false)}
                title="Following"
                data={following}
                profilePic="/assets/img/pfp.jpg"
                username="Ethereon"
                isFollowing={false}
            />

            {/* Share Modal */}
            <ShareModal
                isOpen={isShareModalOpen}
                onClose={() => setIsShareModalOpen(false)}
                profileUrl={profileUrl}
            />

            {/* Suggestions Modal */}
            <SuggestionsModal
                isOpen={isSuggestionsModalOpen}
                onClose={() => setIsSuggestionsModalOpen(false)}
            />
        </>
    );
};

export default Profile;
