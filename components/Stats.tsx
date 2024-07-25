// components/Stats.tsx
const Stats = () => (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Our Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="p-4 bg-gray-100 rounded shadow">
          <h3 className="text-3xl font-bold">300+</h3>
          <p>Pets Adopted</p>
        </div>
        <div className="p-4 bg-gray-100 rounded shadow">
          <h3 className="text-3xl font-bold">200+</h3>
          <p>Volunteers</p>
        </div>
        <div className="p-4 bg-gray-100 rounded shadow">
          <h3 className="text-3xl font-bold">100+</h3>
          <p>Donors</p>
        </div>
      </div>
    </section>
  );
  
  export default Stats;
  