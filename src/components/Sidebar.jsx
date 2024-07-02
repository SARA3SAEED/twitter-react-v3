import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/s1.jpg';
import PostWrite from './PostWrite';

export default function Sidebar() {
  const [isPostWriteOpen, setIsPostWriteOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOpenPostWrite = () => {
    setIsPostWriteOpen(true);
  };

  const handleClosePostWrite = () => {
    setIsPostWriteOpen(false);
  };

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="flex">
        <div className="w-full text-white h-auto pl-20 py-4">
          <Link to="/login" onClick={() => localStorage.clear()}>
            <img className="w-20" />
          </Link>

          <div className="lg:hidden">
            <button
              onClick={toggleDropdown}
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"></path>
              </svg>
            </button>
          </div>

          <div className={` ${isDropdownOpen ? 'hidden' : 'block'}`}>
            <nav className="mt-5 px-2">
              <a href="/home" className="group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full bg-gray-800 text-gray-300">
                <svg className="mr-4 h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6" />
                </svg>
                Home
              </a>
              <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-gray-800 hover:text-gray-300">
                <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
                Explore
              </a>
              <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-gray-300">
                <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                Notifications
              </a>
              <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-gray-300">
                <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Messages
              </a>
              <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-gray-300">
                <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                Grok
              </a>
              <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-gray-300">
                <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                Communities
              </a>
              <Link to="/profile" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-gray-300">
                <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Profile
              </Link>
              <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-gray-300">
                <svg className="mr-4 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                More
              </a>

              {/* <button
                className="bg-gradient-to-r bg-blue-500  w-48 mt-10 h-12 text-lg rounded-full"
                onClick={handleOpenPostWrite}
              >
                Post
              </button>
              {isPostWriteOpen && (
                <PostWrite
                  isOpen={isPostWriteOpen}
                  onClose={handleClosePostWrite}
                  onAddPost={handleAddPost}
                />
              )} */}
                 <button
              onClick={handleOpenPostWrite}
              className="bg-blue-400 w-48 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
            >
              Post
            </button>
            </nav>
            
          </div>
          {/* <button
                className="bg-gradient-to-r bg-blue-500  w-48 mt-10 h-12 text-lg rounded-full"
                onClick={handleOpenPostWrite}
              >
                Post
              </button>
              {isPostWriteOpen && (
                <PostWrite
                  isOpen={isPostWriteOpen}
                  onClose={handleClosePostWrite}
                  onAddPost={handleAddPost}
                />
              )} */}
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
