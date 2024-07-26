const Stats = () => {
    return (
      <div className="bg-[#8BC5A1] py-6 px-4 flex flex-col md:flex-row items-center my-20 mx-4 md:mx-20 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:space-x-6">
          <div className="flex flex-col text-center md:text-left md:flex-grow">
            <h3 className="text-lg font-bold mb-2">Join our newsletter</h3>
            <p>Pawprint that has been for pets.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto mt-4 md:mt-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded w-full md:w-auto"
            />
            <button className="bg-[#8C4A2E] text-white px-4 py-2 rounded w-full md:w-auto">Subscribe</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Stats;
  