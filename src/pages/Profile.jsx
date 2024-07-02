import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import Sidebar from '../components/Sidebar';
import Rightbar from '../components/Rightbar';
import PostCard from '../components/PostCard';



export default function Profile() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    axios.get('https://66829f814102471fa4c79bd6.mockapi.io/post')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
      
  }, []);


  const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
};
  return (
    <>  
         <div className="bg-black lg:flex bg-black m-4">
      {/* <div className="hidden lg:block"> */}
      {/* <div className=""> */}

        <Sidebar />
      {/* </div> */}

      <div className="lg:w-[45%] border border-gray-600 h-auto border-t-0">
        <Hero />

        {posts.map(post => (
          <PostCard key={post.id} post={post} onDelete={handleDeletePost} />
        ))}
      </div>

      {/* <div className="hidden lg:block"> */}
      {/* <div className="bg-black m-4"> */}

        <Rightbar />
      {/* </div> */}
    </div>
    </>
  )
}
