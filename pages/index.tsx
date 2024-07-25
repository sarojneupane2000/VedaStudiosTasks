// pages/index.tsx
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { GetStaticProps } from 'next';

interface Testimonial {
  message: string;
  author: string;
}

interface HomeProps {
  testimonials: Testimonial[];
}

const Home = ({ testimonials }: HomeProps) => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials testimonials={testimonials} />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://raw.githubusercontent.com/Himal-Marasini/frontend-task/main/testinomial_data.json');
  let data: Testimonial[] = [];

  try {
    data = await res.json();
  } catch (error) {
    console.error('Error fetching testimonials:', error);
  }

  const testimonials: Testimonial[] = Array.isArray(data) ? data : [];

  return {
    props: {
      testimonials,
    },
  };
};

export default Home;
