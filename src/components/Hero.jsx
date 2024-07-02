import React from 'react';
import img from '../assets/s1.jpg';
import NavHero from '../components/NavHero';
import { Link } from 'react-router-dom';


export default function Hero() {
  return (
    <>
<div className='m-2'>
  <div className="flex justify-start">
    <div className="px-4 py-2 mx-2">
      <Link to="/home" className="text-2xl font-medium rounded-full text-blue-400 hover:bg-gray-800 hover:text-blue-300 float-right">
        <svg className="m-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <g>
            <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
          </g>
        </svg>
      </Link>
    </div>
    <div className="mx-2">
      <h2 className="mb-0 text-xl font-bold text-white">sara almutairi</h2>
      <p className="mb-0 w-48 text-xs text-gray-400">3 Posts</p>
    </div>
  </div>

  <hr className="border-gray-800"/>

        <div>
            <div
            className="w-full bg-cover bg-no-repeat bg-center"
            style={{ height: '200px', backgroundImage: 'url(https://pbs.twimg.com/profile_banners/1419067263076941824/1710011443/1080x360)' }}
            >
            <img className="opacity-0 w-full h-full" src={img} alt="" />
            </div>
            <div className="p-4">
            <div className="relative flex w-full">
                <div className="flex flex-1">
                <div style={{ marginTop: '-6rem' }}>
                    <div style={{ height: '9rem', width: '9rem' }} className="md rounded-full relative avatar">
                    <img style={{ height: '9rem', width: '9rem' }} className="md rounded-full relative border-4 border-gray-900" src={img} alt="" />
                    <div className="absolute"></div>
                    </div>
                </div>
                </div>
                <div className="flex flex-col text-right">
                <button className="flex justify-center max-h-max whitespace-nowrap focus:outline-none focus:ring rounded max-w-max border bg-transparent border-blue-500 text-blue-500 hover:border-blue-800 hover:border-blue-800 flex items-center hover:shadow-lg font-bold py-2 px-4 rounded-full mr-0 ml-auto">
                    Edit Profile
                </button>
                </div>
            </div>

            <div className="space-y-1 justify-center w-full mt-3 ml-3">
                <div>
                <h2 className="text-xl leading-6 font-bold text-white">sara almutairi</h2>
                <p className="text-sm leading-5 font-medium text-gray-600">@Sara3_Saeed33</p>
                </div>
                <div className="mt-3">
                <p className="text-white leading-tight mb-2">Analytical Expert: Financial, Data, Business, Digital, KPI, AWS | ML Specialist 
                </p>
                <div className="text-gray-600 flex">
                    <span className="flex mr-2">
                    <img className=' rounded-full w-5 mr-1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ63xmdyqloMwBqqPbu6O9Fq1CX-Tdjq8dww&s" alt="" />
                    <a href="https://www.linkedin.com/in/sara-almutairi33/" target="_blank" rel="noopener noreferrer" className="leading-5 ml-1 text-blue-400">https://www.linkedin.com/in/sara-al...</a>
                    </span>
                    <span className="flex mr-2">
                    <img className='rounded-full w-5 mr-1' src="data:image/png;base64,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" alt="" />
                    <span className="leading-5 ">Joined July 2021</span>
                    </span>
                </div>
                </div>
                <div className="pt-3 flex justify-start items-start w-full divide-x divide-gray-800 divide-solid">
                <div className="text-center pr-3">
                    <span className="font-bold text-white">17</span><span className="text-gray-600"> Following</span>
                </div>
                <div className="text-center px-3">
                    <span className="font-bold text-white">7 </span><span className="text-gray-600"> Followers</span>
                </div>
                </div>
            </div>
            </div>
            <hr className="border-gray-800" />
        </div>
        <NavHero />
        </div>
    </>
    );
}
