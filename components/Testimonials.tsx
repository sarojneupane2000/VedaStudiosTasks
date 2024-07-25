// components/Testimonials.tsx
interface Testimonial {
    message: string;
    author: string;
  }
  
  interface TestimonialsProps {
    testimonials: Testimonial[];
  }
  
  const Testimonials = ({ testimonials }: TestimonialsProps) => {
    if (!Array.isArray(testimonials) || testimonials.length === 0) {
      return <p className="text-center p-8">No testimonials available.</p>;
    }
  
    return (
      <section className="p-8 bg-green-50">
        <h2 className="text-2xl font-bold mb-4 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 bg-white rounded shadow">
              <p>{testimonial.message}</p>
              <p className="mt-2 text-right">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  