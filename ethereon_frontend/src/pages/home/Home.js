import React, { useState } from 'react';
import { FaEllipsisH, FaHeart, FaPlusCircle, FaRegComment, FaRegHeart, FaShare } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';

const Home = () => {
    const [likes, setLikes] = useState({ 0: 22800, 1: 38500, 2: 220, 3: 72 });
    const [likedPosts, setLikedPosts] = useState({});
    

    const [expandedComments, setExpandedComments] = useState({});

    const stories = [
        { id: 0, username: 'ethereon', image: `${process.env.PUBLIC_URL}/assets/img/pfp.jpg` },
        { id: 1, username: 'user1', image: 'https://via.placeholder.com/50x50' },
        { id: 2, username: 'user2', image: 'https://via.placeholder.com/50x50' },
        { id: 3, username: 'user3', image: 'https://via.placeholder.com/50x50' },
        { id: 4, username: 'user4', image: 'https://via.placeholder.com/50x50' },
        { id: 5, username: 'user5', image: 'https://via.placeholder.com/50x50' },
        { id: 6, username: 'user6', image: 'https://via.placeholder.com/50x50' },
        { id: 7, username: 'user7', image: 'https://via.placeholder.com/50x50' },
    ];

    const posts = [
        {
            id: 0,
            username: 'ethereon',
            profileImage: `${process.env.PUBLIC_URL}/assets/img/pfp.jpg`,
            image: `${process.env.PUBLIC_URL}/assets/img/pfp.jpg`,
            caption: 'Ethereon, the innovative social app designed to connect people in a seamless and engaging way.',
            comments: [
                { username: 'user2', text: 'Cant wait' },
                { username: 'user4', text: 'Amazing!' },
            ]
        },
        {
            id: 1,
            username: 'ethereon',
            profileImage: `${process.env.PUBLIC_URL}/assets/img/pfp.jpg`,
            video: `${process.env.PUBLIC_URL}/assets/videos/ethereonapp.mp4`,
            caption: 'Beta version of ethereon app is coming this winter...',
            comments: []
        },
        {
            id: 2,
            username: 'user2',
            profileImage: 'https://via.placeholder.com/40x40',
            image: 'https://via.placeholder.com/600x400',
            caption: 'Loving this sunset!',
            comments: [
                { username: 'user1', text: 'Beautiful shot!' },
                { username: 'user4', text: 'Goals!' },
                { username: 'user5', text: 'Incredible!' },
                { username: 'user6', text: 'Fantastic!' }
            ]
        },
        {
            id: 3,
            username: 'user3',
            profileImage: 'https://via.placeholder.com/40x40',
            image: 'https://via.placeholder.com/600x600',
            caption: '#Coding',
            comments: []
        },
    ];

    const handleLike = (postId) => {
        setLikes(prevLikes => ({
            ...prevLikes,
            [postId]: (prevLikes[postId] || 0) + 1
        }));
        setLikedPosts(prev => ({ ...prev, [postId]: !prev[postId] }));
    };

    const handleComment = (postId) => {
        alert(`Comments for post ${postId}`);
    };

    const handleShare = (postId) => {
        alert(`Shared post ${postId}`);
    };

    const toggleComments = (postId) => {
        setExpandedComments(prev => ({
            ...prev,
            [postId]: !prev[postId]
        }));
    };

    return (
        <>
            <Navbar />
            <div className='home-container'>
                <section className="home-stories">
                    <div className="story">
                        <div className="story-profile my-profile">
                            <img src={stories[0].image} alt={stories[0].username} className="story-image" />
                            <button className="story-add">
                                <FaPlusCircle />
                            </button>
                        </div>
                        <span className="story-username">{stories[0].username}</span>
                    </div>
                    {stories.slice(1).map(story => (
                        <div key={story.id} className="story">
                            <div className="story-profile">
                                <img src={story.image} alt={story.username} className="story-image" />
                            </div>
                            <span className="story-username">{story.username}</span>
                        </div>
                    ))}
                </section>

                <main className="home-feed">
                    {posts.map(post => (
                        <div key={post.id} className="post">
                            <div className="post-header">
                                <img src={post.profileImage} alt={post.username} className="post-profile-image" />
                                <span className="username">{post.username}</span>
                                <button className="more-options">
                                    <FaEllipsisH />
                                </button>
                            </div>
                            {post.video ? (
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    className="post-media"
                                >
                                    <source src={post.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <img src={post.image} alt={post.caption} className="post-image" />
                            )}

                            <div className="post-icons">
                                <div className="left-icons">
                                    <button className="icon" onClick={() => handleLike(post.id)}>
                                        {likedPosts[post.id] ? <FaHeart className="liked" /> : <FaRegHeart />}
                                    </button>
                                    <button className="icon" onClick={() => handleComment(post.id)}>
                                        <FaRegComment />
                                    </button>
                                    <button className="icon" onClick={() => handleShare(post.id)}>
                                        <FaShare />
                                    </button>
                                </div>
                            </div>
                            <div className="post-likes">
                                {likes[post.id] || 0} likes
                            </div>
                            <div className="post-caption"><strong>{post.username}</strong> {post.caption}</div>
                            <div className="post-comments">
                                {post.comments.slice(0, 2).map((comment, index) => (
                                    <div key={index} className="post-comment">
                                        <strong>{comment.username}</strong> {comment.text}
                                    </div>
                                ))}
                                {post.comments.length > 2 && (
                                    <button className="see-more" onClick={() => toggleComments(post.id)}>
                                        {expandedComments[post.id] ? 'See less' : 'See more'}
                                    </button>
                                )}
                                {expandedComments[post.id] && post.comments.slice(2).map((comment, index) => (
                                    <div key={index + 2} className="post-comment">
                                        <strong>{comment.username}</strong> {comment.text}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </main>
            </div>
        </>
    )
}

export default Home;
