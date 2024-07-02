import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import Sidebar from '../components/Sidebar';
import Rightbar from '../components/Rightbar';
import PostCard from '../components/PostCard';

export default function Favorite() {
  const [posts, setPosts] = useState([]);
  const [userInfo, setUserInfo] = useState(null); 

  useEffect(() => {
    const userId = localStorage.getItem('user'); 

    axios.get(`https://66829f814102471fa4c79bd6.mockapi.io/info/${userId}`)
      .then(response => {
        const userInfoFromApi = response.data;

        if (userInfoFromApi) {
          setUserInfo(userInfoFromApi);

          const postIds = userInfoFromApi.postid;
          fetchPosts(postIds);
        }
      })
      .catch(error => {
        console.error('Error fetching user information:', error);
      });
  }, []);

const fetchPosts = (postIds) => {
  setPosts([]);

  postIds.forEach(postId => {
    axios.get(`https://66829f814102471fa4c79bd6.mockapi.io/post/${postId}`)
      .then(response => {
        const fetchedPost = response.data;
        setPosts(prevPosts => [...prevPosts, fetchedPost]);
      })
      .catch(error => {
        console.error('Error fetching post with id', postId, ':', error);
      });
  });
};


  return (
    <>
      <div className="bg-black flex">
        <Sidebar />
        <div className="lg:w-[45%] border border-gray-600 h-auto border-t-0">
          <Hero />
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <Rightbar />
      </div>
    </>
  );
}
