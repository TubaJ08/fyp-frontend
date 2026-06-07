import React from 'react';
// import { motion } from 'framer-motion'; // Removed problematic import

const Section = () => {
  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Our Work</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {/* Image 1 */}
          <div
            // whileHover={{ scale: 1.05 }}  // Removed framer-motion
            // transition={{ type: "spring", stiffness: 400, damping: 17 }} // Removed framer-motion
            className="relative rounded-lg overflow-hidden group" // Added group for hover
          >
            <img
              src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Construction Worker"
              className="w-full h-48 object-cover transition-transform duration-300" // Added transition
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">Construction</h3>
              </div>
            </div>
             {/* Scale on hover using CSS transform */}
            <style jsx global>{`
              .group:hover img {
                transform: scale(1.05);
              }
            `}</style>
          </div>

          {/* Image 2 */}
          <div
            className="relative rounded-lg overflow-hidden group"
          >
            <img
              src="https://images.unsplash.com/photo-1580489944062-e3b1dd389408?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Lineman"
              className="w-full h-48 object-cover transition-transform duration-300"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">Powerline Work</h3>
              </div>
            </div>
            <style jsx global>{`
              .group:hover img {
                transform: scale(1.05);
              }
            `}</style>
          </div>

          {/* Image 3 */}
           <div
            className="relative rounded-lg overflow-hidden group"
          >
            <img
              src="https://images.unsplash.com/photo-1634128519934-f15449989544?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Welding"
              className="w-full h-48 object-cover transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">Welding</h3>
              </div>
            </div>
             <style jsx global>{`
              .group:hover img {
                transform: scale(1.05);
              }
            `}</style>
          </div>

          {/* Image 4 */}
          <div
            className="relative rounded-lg overflow-hidden group"
          >
            <img
              src="https://images.unsplash.com/photo-1587312217147-ff5953595775?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Cleaning"
              className="w-full h-48 object-cover transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">Cleaning</h3>
              </div>
            </div>
            <style jsx global>{`
              .group:hover img {
                transform: scale(1.05);
              }
            `}</style>
          </div>

          {/* Image 5 */}
          <div
            className="relative rounded-lg overflow-hidden group"
          >
            <img
              src="https://images.unsplash.com/photo-1626080308404-17549e175352?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Plumbing"
              className="w-full h-48 object-cover transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">Plumbing</h3>
              </div>
            </div>
            <style jsx global>{`
              .group:hover img {
                transform: scale(1.05);
              }
            `}</style>
          </div>

          {/* Image 6 */}
          <div
            className="relative rounded-lg overflow-hidden group"
          >
            <img
              src="https://images.unsplash.com/photo-1592947195245-be5506815465?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Pest Control"
              className="w-full h-48 object-cover transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">Pest Control</h3>
              </div>
            </div>
            <style jsx global>{`
              .group:hover img {
                transform: scale(1.05);
              }
            `}</style>
          </div>

            {/* Image 7 */}
            <div
             className="relative rounded-lg overflow-hidden group"
            >
            <img
              src="https://images.unsplash.com/photo-1580489944062-e3b1dd389408?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Window Repair"
              className="w-full h-48 object-cover transition-transform duration-300"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">Window Repair</h3>
              </div>
            </div>
            <style jsx global>{`
              .group:hover img {
                transform: scale(1.05);
              }
            `}</style>
          </div>

            {/* Image 8 */}
            <div
             className="relative rounded-lg overflow-hidden group"
            >
            <img
              src="https://images.unsplash.com/photo-1587312217147-ff5953595775?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Home Cleaning"
              className="w-full h-48 object-cover transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">Home Cleaning</h3>
              </div>
            </div>
            <style jsx global>{`
              .group:hover img {
                transform: scale(1.05);
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
