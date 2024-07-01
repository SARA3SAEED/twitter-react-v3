import React from 'react';
import Sidebar from '../components/Sidebar';
import Middle from '../components/Middle';
import PostCard from '../components/PostCard';
import Rightbar from '../components/Rightbar';


export default function LandPage() {
  return (
    <div>
         <div className="bg-black flex ">
        <Sidebar/>
        <div class="lg:w-[45%] border border-gray-600 h-auto  border-t-0">

        <Middle/>
        <PostCard/>
        </div>
        <Rightbar/>

    </div>
    </div>
  )
}
