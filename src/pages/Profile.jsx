import React from 'react';
import Hero from '../components/Hero';
import Sidebar from '../components/Sidebar';
import Rightbar from '../components/Rightbar';


export default function Profile() {
  return (
    <>  
    <div>
    <div className="bg-black flex ">
        <Sidebar/>
        <Hero/>
        <Rightbar/>

        </div>
        
        </div>
    </>
  )
}
