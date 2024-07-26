import React, { useState } from 'react';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Testimonial {
  fullName: string;
  content: string;
  imagePath: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  if (!Array.isArray(testimonials) || testimonials.length === 0) {
    return <p className="text-center p-8">No testimonials available.</p>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="p-4 md:p-8">
      <h2 className="text-center font-semibold tracking-wide text-[#8c5310] my-5">
        TESTIMONIALS
      </h2>
      <h2 className="text-lg md:text-xl font-bold mb-4 text-center">
        Check what our volunteers are saying
      </h2>
      <p className="text-center text-gray-500 mb-8">
        We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities.
      </p>
      <div className="flex justify-center items-center relative">
        <div className="relative w-full max-w-lg">
          <Slider {...settings} ref={setSliderRef}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex justify-center">
                <div className="max-w-lg p-8 bg-white rounded-lg shadow-md text-center">
                  <img
                    src={testimonial.imagePath}
                    alt={testimonial.fullName}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <FaQuoteLeft className="text-gray-300 text-4xl mx-auto mb-4" />
                  <p className="text-gray-700 mb-4">{testimonial.content}</p>
                  <p className="text-gray-900 font-bold">- {testimonial.fullName}</p>
                </div>
              </div>
            ))}
          </Slider>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            onClick={() => sliderRef?.slickPrev()}
          >
            <FaArrowLeft />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            onClick={() => sliderRef?.slickNext()}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
