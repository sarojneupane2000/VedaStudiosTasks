import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Donation from '@/components/Donation';
import { GetStaticProps } from 'next';
import RaiseFund from '@/components/RaiseFund';
import EventSchedule from '@/components/EventSchedule';

interface Testimonial {
  fullName: string;
  content: string;
  imagePath: string;
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
      <Donation />
      <RaiseFund />
      <EventSchedule/>
      <Testimonials testimonials={testimonials} />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const url = 'https://raw.githubusercontent.com/Himal-Marasini/frontend-task/main/testinomial_data.json';
  
  try {
    const res = await fetch(url);

    // Log response status and data for debugging
    console.log('API Response Status:', res.status);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    
    const data = await res.json();
    console.log('API Response Data:', data);

    // Extract the testimonials array from the response
    const testimonials: Testimonial[] = Array.isArray(data.testimonial) ? data.testimonial : [];

    console.log('Fetched testimonials:', testimonials);
    
    return {
      props: {
        testimonials,
      },
    };
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    
    return {
      props: {
        testimonials: [],
      },
    };
  }
};

export default Home;
