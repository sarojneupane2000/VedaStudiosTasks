import React, { useState } from 'react';

const Donation: React.FC = () => {
  const [donation, setDonation] = useState<number>(10);

  return (
    <div className="py-16 bg-[#fdf8f6] my-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-[#8c5310]">
            A HELP TO THOSE WHO NEED IT
          </h2>
          <h1 className="mt-2 text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Transform lives with donations
          </h1>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Your donation can save lives. Help us provide care and find loving homes for rescued animals. Every contribution counts. Donate now!
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                className="h-48 w-full object-cover rounded-md mb-4"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.4Uf1Eyz3WmPqlbHAHnQukgHaE8%26pid%3DApi&f=1&ipt=7542ba19f6b3dd70b9f1e1bb665eaf423e0f94db2ba1cdbd0e062736d08fb94f&ipo=images"
                alt="Donation"
              />
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">GOAL: $1340</span>
                <span className="text-gray-600">RAISED: $800</span>
              </div>
              <div className="mb-4">
                <input
                  type="range"
                  min="10"
                  max="1340"
                  value={donation}
                  onChange={(e) => setDonation(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm">
                  <span>$10</span>
                  <span>$1340</span>
                </div>
              </div>
              <div className="mb-4">
                <input
                  type="number"
                  value={donation}
                  onChange={(e) => setDonation(Number(e.target.value))}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter donation amount"
                />
              </div>
              <div className="mb-4 flex justify-around">
                {[10, 25, 50, 100, 250].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setDonation(amount)}
                    className={`px-4 py-2 border rounded-md  ${
                      donation === amount ? 'bg-[#8c5310] text-white' : 'bg-gray-200'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#8c5310] hover:bg-[#8c5310]">
                Donate Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Donation;
