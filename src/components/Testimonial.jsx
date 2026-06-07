import React from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    comment: 'HomeServe arrived! They fixed our plumbing fast and cleanly. These professionals check every box.',
    service: 'Emergency Plumbing'
  },
  {
    name: 'Mike Chen',
    comment: 'Great HVAC service start to end! They handled our new system quickly and were super gentle.',
    service: 'Cooling, HVAC'
  },
  {
    name: 'Lisa Rodriguez',
    comment: 'HomeServe Pro has been maintaining our HVAC system for years. Always reliable, always amazing!',
    service: 'HVAC Maintenance'
  }
];

export default function Testimonials() {
  return (
    <section className="bg-blue-50 py-20 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">What Our Customers Say</h2>
        <p className="text-blue-900 mb-12 text-lg">
          Thousands of happy homeowners trust HomeServe. Here’s what they say:
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-blue-600 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-start text-yellow-400 text-xl mb-3">★★★★★</div>
              <p className="italic text-gray-700 mb-4">“{testimonial.comment}”</p>
              <div className="mt-6 text-left">
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-blue-600">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
