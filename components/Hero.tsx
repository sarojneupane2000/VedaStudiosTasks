// components/Hero.tsx
import Image from 'next/image';

const Hero = () => (
  <section className="bg-green-300 p-8 flex items-center justify-between">
    <div className="flex-1 pr-8">
      <h2 className="text-3xl font-bold mb-4">Saving lives of cats and dogs</h2>
      <p className="mb-4">Find your new best friend today.</p>
      <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Adopt Now</button>
    </div>
    <div className="relative w-64 h-80 flex-shrink-0">
      <Image src="/images/imgcat.png" alt="Cat image" layout="fill" objectFit="cover" />
    </div>
  </section>
);

export default Hero;
