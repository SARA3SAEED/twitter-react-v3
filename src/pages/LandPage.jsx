import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Middle from '../components/Middle';
import PostCard from '../components/PostCard';
import Rightbar from '../components/Rightbar';

export default function LandPage() {
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

  return (
    <div className="bg-black flex">
      <Sidebar />
      <div className="lg:w-[45%] border border-gray-600 h-auto border-t-0">
        <Middle />
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <Rightbar />
    </div>
  );
}
