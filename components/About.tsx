const About = () => (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-[#8c5310]">
            WHO WE ARE AND OUR MISSION
          </h2>
          <h1 className="mt-2 text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            About our shelter and values
          </h1>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities.
          </p>
        </div>
        <div className="mt-10">
          <div className="relative">
            <img
              className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.d9JZlAUcUGmGy9tZKLvpvAHaHa%26pid%3DApi&f=1&ipt=386590b15232b996a37f57e0645b7e0764deab301d19ebf34aee4f35d4965d94&ipo=images"
              alt="Animals"
            />
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="text-lg leading-6 text-gray-500">
            Your donations help us run important projects
          </p>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            As a pioneer of the no-kill movement, Paw Print leads the way with national and international programs designed to increase adoptions and raise awareness about the plight of homeless animals, continuing to make a significant impact.
          </p>
          <button className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#8c5310] hover:bg-[#6d3f0a]">
            Donate for pets
          </button>
        </div>
      </div>
    </div>
  );
  
  export default About;
  