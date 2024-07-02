
        

          import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/s1.jpg';
import PostWrite from './PostWrite'; 

export default function Sidebar() {
  const [isPostWriteOpen, setIsPostWriteOpen] = useState(false);

  const handleOpenPostWrite = () => {
    setIsPostWriteOpen(true);
  };

  const handleClosePostWrite = () => {
    setIsPostWriteOpen(false);
  };

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <>
        <div className="flex">
          <div className="w-2/2 text-white h-12 pl-20 py-4 h-auto">

          <Link to="/login" onClick={() => localStorage.clear()}>
          <img className="w-20"
          src="data:image/png;base64,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" alt="" />
          </Link>

          

            <nav className="mt-5 px-2">
              <a href="/home" className="group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full bg-gray-800 text-gray-300">
                <svg className="mr-4 h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"/>
                </svg>
                Home
              </a>
              <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-gray-800 hover:text-gray-300">
                <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                </svg>
                Explore
              </a>
              <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-gray-300">
                <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
                Notifications
              </a>
              <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-gray-300">
                <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Messages
              </a>
              <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-gray-300">
                <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                </svg>
                Grok
              </a>
              <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-gray-300">
                <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
                Communities
              </a>
              <Link to="/profile" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-gray-300">
                <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                Profile
              </Link>
              <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-gray-300">
                <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                More
              </a>
            </nav>


            <button
              onClick={handleOpenPostWrite}
              className="bg-blue-400 w-48 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
            >
              Post
            </button>

            <div className="flex-shrink-0 flex hover:bg-gray-00 rounded-full p-4 mt-10 mr-4">
              <Link to="/login" onClick={() => localStorage.clear()}>
              <img className="rounded-full w-9 mr-1" 
              src={img} alt="" /></Link>
              <div>
                <div className="text-base text-white">  sara almutairi </div>
                <div className="text-sm text-gray-400"> @Sara3_Saeed33
                </div>
              </div>
            </div>
          </div>
        </div>

      {isPostWriteOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black pl-1 rounded-lg shadow-lg z-10 w-2/2">
            <a onClick={handleClosePostWrite} className="text-white font-bold rounded cursor-pointer">
              <img className="rounded-full w-5 mr-1" 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPmwn93SXNLH2agqIze5S0SXrH4MAr-Iu0vQ&s" alt="" />
            </a>
            <PostWrite onClose={handleClosePostWrite} handleAddPost={handleAddPost} />
          </div>
        </div>
      )}
    </>
  );
}