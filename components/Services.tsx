// components/Services.tsx
const Services = () => (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-100 rounded shadow">
          <h3 className="font-bold mb-2">Service 1</h3>
          <p>Description of Service 1.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded shadow">
          <h3 className="font-bold mb-2">Service 2</h3>
          <p>Description of Service 2.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded shadow">
          <h3 className="font-bold mb-2">Service 3</h3>
          <p>Description of Service 3.</p>
        </div>
      </div>
    </section>
  );
  
  export default Services;
  