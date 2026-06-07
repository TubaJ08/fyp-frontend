// seed.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Service from './models/Service.js'; // Adjust path if needed

dotenv.config();

const featuredServices = [
  {
    name: 'iqbal Hassan',
    category: 'Plumber',
    rating: 4.9,
    reviews: 200,
    price: 34,
    distance: '24 km',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Mustafa Khan',
    category: 'Plumber',
    rating: 4.8,
    reviews: 120,
    price: 28,
    distance: '12 km',
    image: 'https://randomuser.me/api/portraits/men/40.jpg',
  },
  {
    name: 'Jamshed Asghar',
    category: 'Home service',
    rating: 4.9,
    reviews: 40,
    price: 19,
    distance: '10 km',
    image: 'https://randomuser.me/api/portraits/women/55.jpg',
  },
  {
    name: 'Bernadt Ovtrd',
    category: 'Home service',
    rating: 4.9,
    reviews: 90,
    price: 18,
    distance: '8 km',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Service.deleteMany(); // Clear old data
    await Service.insertMany(featuredServices); // Insert sample data
    console.log('Sample services inserted!');
    process.exit();
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

seedData();
