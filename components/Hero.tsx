// components/Hero.tsx
import cat from '../images/imgcat.png';

const Hero = () => (
  <section className="bg-green-100 p-8 text-center">
    <h2 className="text-3xl font-bold mb-4">Saving lives of cats and dogs</h2>
    <p className="mb-4">Find your new best friend today.</p>
    <img src={cat} alt="Cat image" className="mx-auto mb-4 w-64 h-auto" />
    <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Adopt Now</button>
  </section>
);

export default Hero;
