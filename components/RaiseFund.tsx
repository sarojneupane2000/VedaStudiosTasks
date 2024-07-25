// components/RaiseFund.tsx
import React, { useState } from "react";

const RaiseFund: React.FC = () => {
  const [donation, setDonation] = useState<number>(10);

  const predefinedAmounts = [10, 25, 50, 100, 250];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10 flex flex-col lg:flex-row items-center lg:items-start">
          <div className="flex-shrink-0 lg:w-1/3 mb-8 lg:mb-0">
            <img
              className="h-auto w-full object-cover rounded-lg"
              src="https://via.placeholder.com/300x400"
              alt="Donation"
            />
          </div>
          <div className="mx-10">
            <div className="">
              <h2 className="text-base font-semibold tracking-wide text-orange-400">
                A HELP TO THOSE WHO NEED IT
              </h2>
              <h1 className="mt-2 text-xl leading-9 font-extrabold text-gray-900 sm:text-3xl sm:leading-10">
                Transform lives with donations
              </h1>
              <p className="mt-4 text-lg leading-6 text-gray-500">
                Your donation can save lives. Help us provide care and find
                loving homes for rescued animals. Every contribution counts.
                Donate now!
              </p>
            </div>
            <div className="lg:ml-0 bg-white my-10 rounded-lg w-full lg:w-2/3">
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
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
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
                  className="w-full p-3 border rounded-md"
                  placeholder="Enter donation amount"
                />
              </div>
              <div className="mb-4 flex justify-around">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setDonation(amount)}
                    className={`px-3 py-1 text-sm border rounded-md ${
                      donation === amount
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <button className="my-4 inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaiseFund;
