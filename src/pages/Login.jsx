import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.password) tempErrors.password = "Password is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.get(`https://66829f814102471fa4c79bd6.mockapi.io/info?email=${formData.email}&password=${formData.password}`);
        if (response.data.length > 0) {
          setMessage('Login successful!');
          const userId = response.data[0].userid; 
          localStorage.setItem('user', userId);
          navigate('/home');        } 
          else {
          setMessage('Invalid email or password');
        }
      } catch (error) {
        setMessage('Failed to login');
      }
    }
  };

  return (
    <>
      <div className="flex flex-col bg-black lg:flex-row-reverse p-2 mx-9 mt-4">
        <div className="flex flex-col min-h-screen">
          <div className="container flex-1 flex flex-col items-center max-w-lg">
            <form className="flex flex-col p-6 w-[500px] rounded-2xl" onSubmit={handleSubmit} style={{
                backgroundImage:
                  "url('https://img.freepik.com/free-photo/starry-night-sky_1048-11828.jpg')",
              }}>
              <h1 className="text-center text-5xl mb-6 text-neutral-200">Log in</h1>
              
              {message && <div className="mb-4 text-center text-red-500">{message}</div>}

              <input
                id="email"
                type="email"
                className="w-auto mb-8 mt-6 mx-8 rounded-lg shadow-none text-gray-200 placeholder-gray-200 border-gray-200 border-t-transparent bg-transparent focus:outline-none focus:ring-transparent focus:border-gray-200 focus:placeholder-transparent"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="text-red-500 mx-8">{errors.email}</span>}

              <input
                id="password"
                type="password"
                className="text-gray-200 w-auto mb-8 mt-6 mx-8 rounded-lg bg-transparent border-gray-200 border-t-transparent placeholder-gray-200 focus:outline-none focus:ring-transparent focus:border-gray-200 focus:placeholder-transparent"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span className="text-red-500 mx-8">{errors.password}</span>}

              <button
                type="submit"
                className="relative inline-flex items-center justify-center p-0.5 mb-8 mt-6 mx-8 overflow-hidden text-sm font-medium text-neutral-200 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:outline-none dark:focus:ring-blue-800"
              >
                <span className="relative text-lg w-full px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Log in
                </span>
              </button>

              <div className="inline-flex items-center justify-center w-full relative">
                <hr className="w-64 h-px my-8 bg-neutral-200 border-0" />
                <span className="absolute px-3 font-medium text-neutral-200 bg-black">
                  or
                </span>
              </div>

              <button
                type="button"
                className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                Log in with Facebook
              </button>
              <button
                type="button"
                className="text-black bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
              >
                <img
                  className="w-5 h-5 mr-1"
                  aria-hidden="true"
                  src="data:image/png;base64,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"

                />
                Log in with Google
              </button>
              <div className="flex flex-row justify-center gap-4">
                <a className="text-white" href="/">
                  Forgot password?
                </a>
                <a className="text-white" href="/">
                  Sign Up
                </a>
              </div>
            </form>
            
          </div>
          
        </div>
        <form className="card-body mt-32">
          <img className="w-[80%]"
          src="data:image/png;base64,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" alt="" />
        </form>
      </div>
    </>
  );
}
