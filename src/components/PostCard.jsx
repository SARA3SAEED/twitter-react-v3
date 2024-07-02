import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import img from '../assets/s1.jpg';

export default function PostCard({ post, onDelete }) {
    const [isOpen, setIsOpen] = useState(false);
    const [likedPosts, setLikedPosts] = useState([]);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const userId = localStorage.getItem('user');
                const apiUrl = `https://66829f814102471fa4c79bd6.mockapi.io/info/${userId}`;
                const response = await axios.get(apiUrl);
                const userInfo = response.data;
                setLikedPosts(userInfo.postid || []);
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };

        fetchUserInfo();
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    const handleLike = async () => {
        try {
            const userId = localStorage.getItem('user');
            const apiUrl = `https://66829f814102471fa4c79bd6.mockapi.io/info/${userId}`;
            const response = await axios.get(apiUrl);
            const userInfo = response.data;
            const currentLikes = userInfo.postid || [];
            const updatedLikes = currentLikes.includes(post.id)
                ? currentLikes.filter(id => id !== post.id)
                : [...currentLikes, post.id];

            await axios.put(apiUrl, { ...userInfo, postid: updatedLikes });
            setLikedPosts(updatedLikes);
        } catch (error) {
            console.error('Error updating liked post:', error);
        }
    };

    const handleLike2 = () => {
        if (likedPosts.includes(post.id)) {
            const updatedLikes = likedPosts.filter(id => id !== post.id);
            setLikedPosts(updatedLikes);
            handleLike();
        } else {
            setLikedPosts([...likedPosts, post.id]);
            handleLike();
        }
    };

    const handleDelete = async () => {
        try {
            const postApiUrl = `https://66829f814102471fa4c79bd6.mockapi.io/post/${post.id}`;
            await axios.delete(postApiUrl);

            const userId = JSON.parse(localStorage.getItem('user')); 
            const userApiUrl = `https://66829f814102471fa4c79bd6.mockapi.io/info/${userId}`;
            const response = await axios.get(userApiUrl);
            const userInfo = response.data;

            const updatedPostIds = userInfo.postid.filter(id => id !== post.id);
            await axios.put(userApiUrl, { ...userInfo, postid: updatedPostIds });

            onDelete(post.id);
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    


    return (
        <>
            <div>
            </div>
            <div className="flex flex-shrink-0 p-4 pb-0">
                <a href="#" className="flex-shrink-0 group block">
                    <div className="flex items-center">
                        <div>
                            <img className="inline-block h-10 w-10 rounded-full" src={img} alt="" />
                        </div>
                        <div className="ml-3">
                            <p className="text-base mx-2 leading-6 font-medium text-white">
                                sara almutairi
                                <span className="text-sm mx-2 leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                    @Sara3_Saeed33
                                </span>
                            </p>
                        </div>
                    </div>
                </a>

                <div className="flex justify-end">
                    <div className="relative inline-block">
                        <p onClick={toggleDropdown} className="relative z-10 flex p-2 text-sm text-gray-600 bg-black border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none">
                                              <img  className=" ml-44  w-5 rounded-full" 
                                              src="data:image/png;base64,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" 
                                              alt="" />
                        </p>

                        {isOpen && (
                            <div className="absolute right-0 z-20 w-80 py-2 mt-2 overflow-hidden bg-black rounded-md shadow-xl dark:bg-gray-800">
                                <a 
                                    href="#"
                                    className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                                    onClick={() => {
                                        closeDropdown();
                                        handleDelete(); 
                                    }}  >                            
                                    Delete
                                </a>

                                <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" onClick={closeDropdown}>
                                    Edit
                                </a>

                                <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" onClick={closeDropdown}>
                                    Pin to your profile
                                </a>

                                <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" onClick={closeDropdown}>
                                    Highlight on your profile
                                </a>

                                <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" onClick={closeDropdown}>
                                    Add/remove @Sara3_Saeed33 from Lists
                                </a>

                                <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" onClick={closeDropdown}>
                                    Change who can reply
                                </a>

                                <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" onClick={closeDropdown}>
                                    View post engagements
                                </a>

                                <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" onClick={closeDropdown}>
                                    Embed post
                                </a>

                                <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" onClick={closeDropdown}>
                                    View post analytics
                                </a>
                            </div>
                        )}
                    </div>
                </div>

            </div>
            <div className="pl-16">
                <p className="text-base width-auto font-medium text-white flex-shrink">
                 {post.post}
                </p>

                <div className="flex">
                    <div className="w-full">

                        <div className="flex items-center">
                            <div className="flex-1 text-center">
                                <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                                    <svg className="text-center h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                </a>
                            </div>

                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>
                                </a>
                            </div>

                            <div className="flex-1 text-center py-2 m-2">
                         
                                                {/* <button onClick={() => handleLike2(post)} className=" mx-1 focus:outline-none">
                                                    <img className='rounded-full w-6 mt-2' src={likedPosts.includes(post.id)
                                                    ? "https://cdn-icons-png.flaticon.com/128/166/166538.png" 
                                                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLK4EFsyB-DpaitUlCu8sTgqrumLWTTc06Q&s"} alt="Like" />
                                                </button> */}



                                <button onClick={() => handleLike(post)} className=" mx-1 focus:outline-none">
                                    <img className='rounded-full w-6 mt-2' src={likedPosts.includes(post.id)
                                       ? "data:image/png;base64,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" 
                                       : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLK4EFsyB-DpaitUlCu8sTgqrumLWTTc06Q&s"} alt="Like" />
                                </button>















                            </div>

                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                                </a>
                            </div>
                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#" className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                                    <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <hr className="border-gray-600" />
        </>
    );
}
