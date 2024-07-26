
const Services = () => (
    <div className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base font-semibold tracking-wide text-[#8c5310]">
          A HELP TO THOSE WHO NEED IT
        </h2>
        <h1 className="mt-2 text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
          Each donation is an essential
        </h1>
        <p className="mt-4 text-lg leading-6 text-gray-500">
          We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            goal: 1340,
            raised: 800,
            title: "New chance for animals",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IuCdcCTb7ilngCC-qW9dwQAAAA%26pid%3DApi&f=1&ipt=f3838b848ecb9b3501dcafd943b51fdc45d8a1c6bd9f398a2a99809c6742b510&ipo=images"
          },
          {
            goal: 1340,
            raised: 800,
            title: "Help the eco system",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.5ZZ0T5wxnUTkRoLNBOq6DwAAAA%26pid%3DApi&f=1&ipt=23c754b6d75f1148dd19810a877e44ca09827f5196ddb4f75335cb2b47fa6877&ipo=images"
          },
          {
            goal: 1340,
            raised: 800,
            title: "New Sustainability",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.wU3qMqCuUd_8QZwAyk82rAAAAA%26pid%3DApi&f=1&ipt=bcce8c1e52619e5df8146b8be840df953a31467aa55902c64e76acdfb8af7415&ipo=images"
          }
        ].map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img className="h-48 w-full object-cover rounded-md mb-4" src={project.image} alt={project.title} />
            <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <div className="mt-4">
              <span className="text-gray-600">GOAL: ${project.goal}</span>
              <br />
              <span className="text-gray-600">RAISED: ${project.raised}</span>
            </div>
            <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#8c5310] hover:bg-[#8c5310]">
              View Details
            </button>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#8c5310] hover:bg-[#8c5310]">
          View All Cause
        </button>
      </div>
    </div>
  </div>
  );
  
  export default Services;
  