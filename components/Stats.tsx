import React, { useState } from 'react';

const Stats = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setError('Email address is not valid');
    } else {
      setError('');
      // Handle successful subscription logic here
      console.log('Subscribed with email:', email);
    }
  };

  return (
    <div className="bg-[#8BC5A1] py-6 px-4 flex flex-col md:flex-row items-center my-20 mx-4 md:mx-20 rounded-lg">
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:space-x-6">
        <div className="flex flex-col text-center md:text-left md:flex-grow">
          <h3 className="text-lg font-bold mb-2">Join our newsletter</h3>
          <p>Pawprint that has been for pets.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto mt-4 md:mt-0">
          <div className="relative w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={`px-4 py-2 rounded w-full md:w-auto border ${error ? 'border-red-500' : 'border-gray-300'}`}
            />
            {error && <span className="text-red-500 text-xs mt-2 block">{error}</span>}
          </div>
          <button
            onClick={handleSubmit}
            className="bg-[#8C4A2E] text-white px-4 py-2 rounded w-full md:w-auto"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stats;
