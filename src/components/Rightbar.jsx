import React from 'react';
import '../components/fonts.css';

export default function Rightbar() {
  return (
    <>
      <div className="w-74 h-12">
        <div className="relative text-gray-300 w-80 p-5 pb-0">
          <button type="submit" className="absolute ml-4 mt-3 mr-4">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style={{ enableBackground: 'new 0 0 56.966 56.966' }}
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>

          <input
            type="search"
            name="search"
            placeholder="Search"
            className="bg-gray-800 h-10 px-10 pr-5 w-80 rounded-full text-sm focus:outline-none bg-purple-white shadow rounded border-0"
          />
        </div>

        <div className="ml-4 mt-4 flex w-80 flex-col rounded-xl border border-gray-300 text-gray-700 shadow-md">
          <div className="p-6">
            <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-white antialiased">
              Subscribe to Premium
            </h5>
            <p className="block text-white text-sm font-light leading-relaxed">
              Subscribe to unlock new features and if eligible, receive a share of ads revenue.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="select-none rounded-full bg-blue-400 py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md hover:shadow-lg hover:bg-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Read More
            </button>
          </div>
        </div>

        <link
          rel="stylesheet"
          href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
        />

        <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>

        <div className="max-w-sm rounded-lg bg-black rounded-xl border border-gray-300 text-gray-700 overflow-hidden shadow-lg m-4">
          <div className="flex">
            <div className="flex-1 m-2">
              <h2 className="px-4 py-2 text-xl w-48 font-semibold text-white">Who to follow</h2>
            </div>
          </div>

          <hr className="border-gray-600" />

          <div className="flex flex-shrink-0">
            <div className="flex-1">
              <div className="flex items-center w-48">
                <div>
                  <img
                    className="inline-block h-10 w-auto rounded-full ml-4 mt-2"
                    src="https://pbs.twimg.com/profile_images/1498563900589101062/kyMXHGrd_400x400.jpg"
                    alt=""
                  />
                </div>
                <div className="ml-3 mt-3">
                  <p className="text-base leading-6 font-medium text-white">وزارة المالية السعودية</p>
                  <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                  @MOFKSA
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 px-4 py-2 m-2">
              <a href="" className="float-right">
                <button className="bg-white hover:bg-blue-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
                  Follow
                </button>
              </a>
            </div>
          </div>
          <hr className="border-gray-600" />

          <div className="flex flex-shrink-0">
            <div className="flex-1">
              <div className="flex items-center w-48">
                <div>
                  <img
                    className="inline-block h-10 w-auto rounded-full ml-4 mt-2"
                    src="https://pbs.twimg.com/profile_images/1045304182704664578/cyBINCgk_400x400.jpg"
                    alt=""
                  />
                </div>
                <div className="ml-3 mt-3">
                  <p className="text-base leading-6 font-medium text-white">
                  رؤية السعودية 2030</p>
                  <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                  @SaudiVision2030                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 px-4 py-2 m-2">
              <a href="" className="float-right">
                <button className="bg-white hover:bg-blue-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
                  Follow
                </button>
              </a>
            </div>
          </div>
          <hr className="border-gray-600" />

          <div className="flex flex-shrink-0">
            <div className="flex-1">
              <div className="flex items-center w-48">
                <div>
                  <img
                    className="inline-block h-10 w-auto rounded-full ml-4 mt-2"
                    src="https://pbs.twimg.com/profile_images/3127745865/dd05f22753691b28ce2a8884ccf9e6cf_400x400.jpeg"
                    alt=""
                  />
                </div>
                <div className="ml-3 mt-3">
                  <p className="text-base leading-6 font-medium text-white">سلمان بن عبدالعزيز</p>
                  <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                  @KingSalman
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 px-4 py-2 m-2">
              <a href="" className="float-right">
                <button className="bg-white hover:bg-blue-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
                  Follow
                </button>
              </a>
            </div>
          </div>
          <hr className="border-gray-600" />
        </div>
      </div>
    </>
  );
}
