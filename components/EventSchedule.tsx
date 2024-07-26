import React from 'react';

const events = [
  {
    date: '08',
    month: 'JUNE',
    title: 'Disaster Relief for Animals',
    time: '07:00 AM - 10:00 PM',
    location: 'Kathmandu',
  },
  {
    date: '12',
    month: 'JUNE',
    title: 'Rapid Response for Animals',
    time: '07:00 AM - 10:00 PM',
    location: 'Kathmandu',
  },
  {
    date: '17',
    month: 'JUNE',
    title: 'Disaster Relief for Animals',
    time: '07:00 AM - 10:00 PM',
    location: 'Kathmandu',
  },
];

const EventSchedule: React.FC = () => {
  return (
    <div className="py-16 bg-[#fdf8f6] my-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-[#8c5310]">
            CALENDAR
          </h2>
          <h1 className="mt-2 text-3xl leading-9 font-extrabold text-[#303030] sm:text-4xl sm:leading-10">
            Event Schedule
          </h1>
          <p className="mt-4 text-lg leading-6 text-[#7f7f7f]">
            We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-[#fdf2ed] p-6 rounded-lg shadow-lg text-center">
              <div className="text-2xl font-bold text-[#303030]">{event.date}</div>
              <div className="text-sm text-[#7f7f7f]">{event.month}</div>
              <h3 className="mt-2 text-lg font-bold text-[#303030]">{event.title}</h3>
              <p className="mt-2 text-[#7f7f7f]">{event.time}</p>
              <p className="mt-2 text-[#7f7f7f]">{event.location}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-[#8c5310] text-white py-2 px-4 rounded">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventSchedule;
