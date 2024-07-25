interface Testimonial {
    fullName: string;
    content: string;
    imagePath: string;
  }
  
  interface TestimonialsProps {
    testimonials: Testimonial[];
  }
  
  const Testimonials = ({ testimonials }: TestimonialsProps) => {
    console.log('Testimonials props:', testimonials); // Log received props for debugging
  
    if (!Array.isArray(testimonials) || testimonials.length === 0) {
      return <p className="text-center p-8">No testimonials available.</p>;
    }
  
    return (
      <section className="p-8 bg-green-50">
        <h2 className="text-2xl font-bold mb-4 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 bg-white rounded shadow">
              <img
                src={testimonial.imagePath}
                alt={testimonial.fullName}
                className="w-16 h-16 rounded-full mb-2 object-cover"
              />
              <p className="text-gray-700">{testimonial.content}</p>
              <p className="mt-2 text-right text-gray-600">- {testimonial.fullName}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  