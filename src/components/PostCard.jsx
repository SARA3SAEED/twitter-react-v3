import React, { useState } from 'react';
import img from '../assets/s1.jpg';


export default function PostCard() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };


  return (
    <>
      <div>
      </div>
          <div class="flex flex-shrink-0 p-4 pb-0">
                <a href="#" class="flex-shrink-0 group block">
                  <div class="flex  items-center">
                    <div>
                      <img class="inline-block h-10 w-10 rounded-full" src={img} alt="" />
                    </div>
                    <div class="ml-3">
                      <p class="text-base mx-2 leading-6 font-medium text-white">
                      sara almutairi
                        <span class="text-sm mx-2 leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                        @Sara3_Saeed33
                        </span>
                           </p>
                    </div>
                  </div>
                </a>
                {/* <p className='pl-48 text-white'>...</p> */}
              





                <div className="flex justify-end">
            <div className="relative inline-block ">
                {/* <!-- Dropdown toggle button --> */}

                <p onClick={toggleDropdown} className="relative z-10 flex  p-2 text-sm text-gray-600 bg-black border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none">
                   
                    <img  className=" ml-44  w-5 rounded-full" src="data:image/png;base64,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" alt="" />
                </p>

                {/* <!-- Dropdown menu --> */}
                {isOpen && (
                    <div className="absolute right-0 z-20 w-80 py-2 mt-2 overflow-hidden bg-black rounded-md shadow-xl dark:bg-gray-800">
                        <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" onClick={closeDropdown}>
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
            <div class="pl-16">
                <p class="text-base width-auto font-medium text-white flex-shrink">
                  Day 07 of the challenge <span class="text-blue-400">#100DaysOfCode</span> 
                  I was wondering what I can do with <span class="text-blue-400">#tailwindcss</span>, so just started building Twitter  UI using Tailwind and so far it looks so promising. I will post my code after completion.
                  [07/100]
                  <span class="text-blue-400"> #WomenWhoCode #CodeNewbie</span>
                </p>


                <div class="flex">
                    <div class="w-full">
                        
                        <div class="flex items-center">
                            <div class="flex-1 text-center">
                                <a href="#" class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                                    <svg class="text-center h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                  </a>
                            </div>

                            <div class="flex-1 text-center py-2 m-2">
                                <a href="#" class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                                    <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>
                                </a>
                            </div>

                            <div class="flex-1 text-center py-2 m-2">
                                <a href="#" class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                                    <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                </a>
                            </div>

                            <div class="flex-1 text-center py-2 m-2">
                                <a href="#" class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                                    <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                            </a>
                            </div>
                            <div class="flex-1 text-center py-2 m-2">
                                <a href="#" class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                                    <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path></svg>
                            </a>
                            </div>
                            <div class="flex-1 text-center py-2 m-2">
                                <a href="#" class="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                                    <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                            </a>
                            </div>
                        </div>
                    </div>

                
                </div>
                
              </div>
              <hr class="border-gray-600"></hr>
    </>
  )
}
