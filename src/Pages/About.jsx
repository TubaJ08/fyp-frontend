import React from "react";
import { FaUsers, FaClock, FaTools, FaStar } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 md:px-10 text-center">
        <div className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          Trusted Since 2024
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-blue-600">HomeServe Pro</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-10">
          For over 1+ years, we’ve been the trusted choice for professional home services.
          Our mission is simple: provide exceptional service that keeps your home running smoothly,
          safely, and efficiently.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-sm text-center">
          <div>
            <FaUsers className="text-blue-600 text-2xl mx-auto mb-2" />
            <div className="font-bold text-xl">500+</div>
            <p>Customers Served</p>
          </div>
          <div>
            <FaClock className="text-blue-600 text-2xl mx-auto mb-2" />
            <div className="font-bold text-xl">1+</div>
            <p>Years Experience</p>
          </div>
          <div>
            <FaTools className="text-blue-600 text-2xl mx-auto mb-2" />
            <div className="font-bold text-xl">24/7</div>
            <p>Emergency Service</p>
          </div>
          <div>
            <FaStar className="text-blue-600 text-2xl mx-auto mb-2" />
            <div className="font-bold text-xl">4.9/5</div>
            <p>Customer Rating</p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 px-4 md:px-10 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From humble beginnings to becoming the area’s most trusted home services provider
        </p>
      </section>

      {/* Trust and Quality Section */}
      <section className="px-4 md:px-10 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text Block */}
          <div>
            <h3 className="text-xl font-bold text-left mb-4">Founded on Trust and Quality</h3>
            <p className="text-gray-700 mb-4 text-left">
              HomeServe Pro began in 2024 when founder Michael Rodriguez recognized the need
              for reliable, honest home services in our community. Starting with just a van
              and a toolbox, Michael built our company on the principles of integrity,
              quality workmanship, and exceptional customer service.
            </p>
            <p className="text-gray-700 mb-4 text-left">
              What started as a one-person plumbing service has grown into a comprehensive
              home services company with over 50 certified technicians. Despite our growth,
              we’ve never lost sight of our core values: treating every customer’s home as if
              it were our own.
            </p>
            <p className="text-gray-700 text-left">
              Today, we’re proud to serve over 500 customers across the metropolitan area,
              maintaining the same commitment to excellence that built our reputation.
            </p>
          </div>

          {/* Community Box */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
            <img
              src="https://img.icons8.com/fluency/96/000000/home.png"
              alt="community"
              className="mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold mb-2 text-blue-700">Serving Your Community</h4>
            <p className="text-gray-600">
              Every day, our team works to make homes safer, more comfortable,
              and more efficient for families throughout our service area.
            </p>
          </div>
          
        </div>
      </section>
     

{/* Leadership Team Section */}
<section className="bg-white py-16 px-4 md:px-10">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold mb-2">Meet Our Leadership Team</h2>
    <p className="text-gray-600">Experienced professionals dedicated to your satisfaction</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {[
      {
        name: "Hashir Zubair",
        title: "Founder & CEO",
        experience: "1+ years",
        specialty: "Business Operations",
        icon: "https://img.icons8.com/color/96/administrator-male.png"
      },
      {
        name: "M Ali Hanjra",
        title: "Chief Operations Officer",
        experience: "2+ years",
        specialty: "Service Delivery",
        icon: "https://img.icons8.com/color/96/administrator-male.png"
      },
      {
        name: "Haziq Saeed ",
        title: "Lead Master Plumber",
        experience: "1+ years",
        specialty: "Plumbing Systems",
        icon: "https://img.icons8.com/color/96/administrator-male.png"
      },
      
      {
        name: "Farzeen Khan",
        title: "Electrical Supervisor",
        experience: "1+ years",
        specialty: "Electrical Systems",
        icon: "https://img.icons8.com/color/96/administrator-male.png"
      },
    ].map((member, index) => (
      <div
        key={index}
        className="border rounded-lg shadow-sm p-6 text-center bg-white hover:shadow-lg transition"
      >
        <img src={member.icon} alt={member.name} className="w-16 h-16 mx-auto mb-4" />
        <h3 className="font-semibold text-lg">{member.name}</h3>
        <p className="text-blue-600 text-sm">{member.title}</p>
        <p className="text-sm text-gray-500 mt-2">{member.experience}</p>
        <p className="text-sm text-gray-500">{member.specialty}</p>
      </div>
    ))}
  </div>
</section>

{/* Why Choose Section */}
<section className="bg-blue-50 py-16 px-4 md:px-10">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold mb-2">Why Choose HomeServe Pro?</h2>
    <p className="text-gray-600">What sets us apart from other home service providers</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
    {[
      {
        title: "24/7 Emergency Service",
        desc: "Round-the-clock availability for urgent repairs and emergencies",
        icon: "https://img.icons8.com/fluency/48/clock.png"
      },
      {
        title: "Satisfaction Guarantee",
        desc: "100% satisfaction guarantee on all work with comprehensive warranties",
        icon: "https://img.icons8.com/fluency/48/thumb-up.png"
      },
      {
        title: "Experienced Team",
        desc: "Certified professionals with extensive training and years of experience",
        icon: "https://img.icons8.com/fluency/48/worker-male.png"
      },
      {
        title: "Quick Response",
        desc: "Fast response times with same-day service available for most repairs",
        icon: "https://img.icons8.com/fluency/48/fast.png"
      },
    ].map((item, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
        <img src={item.icon} alt={item.title} className="w-12 h-12 mx-auto mb-4" />
        <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
        <p className="text-sm text-gray-600">{item.desc}</p>
      </div>
    ))}
  </div>
</section>

{/* Certifications Section */}
<section className="bg-white py-16 px-4 md:px-10">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold mb-2">Certifications & Credentials</h2>
    <p className="text-gray-600">Licensed, certified, and recognized for excellence</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
    {[
      {
        title: "Licensed & Bonded",
        desc: "Fully licensed contractors in all service areas",
        icon: "https://img.icons8.com/fluency/48/security-checked.png"
      },
      {
        title: "Industry Certifications",
        desc: "EPA, NATE, and state-specific professional certifications",
        icon: "https://img.icons8.com/fluency/48/certificate.png"
      },
      {
        title: "BBB A+ Rating",
        desc: "Better Business Bureau accredited with A+ rating",
        icon: "https://img.icons8.com/fluency/48/medal.png"
      },
      {
        title: "Customer Choice Awards",
        desc: "Local and regional service excellence awards",
        icon: "https://img.icons8.com/fluency/48/trophy.png"
      },
    ].map((item, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow border hover:shadow-md transition">
        <img src={item.icon} alt={item.title} className="w-12 h-12 mx-auto mb-4" />
        <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
        <p className="text-sm text-gray-600">{item.desc}</p>
      </div>
    ))}
  </div>
</section>

{/* Call to Action Section */}
<section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-16 px-4 md:px-10 text-center">
  <div className="max-w-2xl mx-auto">
    <h2 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h2>
    <p className="mb-6">
      Join thousands of satisfied customers who trust HomeServe Pro for all their home service needs.
    </p>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      <a
        href="tel:5551234567"
        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition"
      >
        📞 Call +923052855538
      </a>
   
    </div>
  </div>
</section>


    </div>
  );
};

export default AboutPage;
