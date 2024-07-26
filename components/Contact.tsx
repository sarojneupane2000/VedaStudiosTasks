import Image from 'next/image';
import dogImage from '../public/images/dog.png';
import catImage from '../public/images/cat.png';

const Contact = () => {
  return (
    <div className="bg-[#8C4A2E] text-white py-10 px-6 rounded-lg flex flex-col md:flex-row justify-between items-center mx-4 md:mx-20">
      <div className="hidden md:block">
        <Image src={dogImage} alt="Dog" width={100} height={100} className="rounded-full" />
      </div>
      <div className="text-center flex-grow px-4">
        <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
        <p className="mb-6">Our work is made possible by the generosity of people like you, who have contributed to our mission to improve the lives of all animals.</p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-white text-[#8C4A2E] px-4 py-2 rounded">Adopt & Donate to help us →</button>
          <button className="bg-white text-[#8C4A2E] px-4 py-2 rounded">Volunteering opportunities →</button>
        </div>
      </div>
      <div className="hidden md:block">
        <Image src={catImage} alt="Cat" width={100} height={100} className="rounded-full" />
      </div>
    </div>
  );
}

export default Contact;
