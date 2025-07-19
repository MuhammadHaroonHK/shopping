// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Leaf, ShoppingCart } from 'lucide-react'; // Importing icons from lucide-react

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white bg-opacity-95 p-6 rounded-2xl shadow-lg text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold text-green-700 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);
const LandingPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 text-gray-800 p-4 sm:p-6 lg:p-8">
      {/* Hero Section */}
      <div className="text-center bg-white bg-opacity-90 p-8 sm:p-10 lg:p-12 rounded-3xl shadow-2xl max-w-4xl w-full transform transition-all duration-500 hover:scale-105">
        <Leaf className="w-24 h-24 text-green-600 mx-auto mb-6 animate-bounce-slow" /> {/* Animated icon */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-green-800 mb-4 leading-tight tracking-tight">
          Welcome to <span className="text-green-600">Greenhouse Store</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 font-light">
          Your one-stop shop for the finest houseplants, bringing nature indoors.
        </p>
        <Link to="/products"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-300 active:bg-green-800"
        >
          Get Started <ShoppingCart className="inline-block ml-2 w-5 h-5" />
        </Link>
      </div>

      {/* Feature Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        <FeatureCard
          icon={<Leaf className="w-12 h-12 text-green-600" />}
          title="Premium Quality"
          description="Hand-picked, healthy plants delivered right to your door."
        />
        <FeatureCard
          icon={<Home className="w-12 h-12 text-green-600" />}
          title="Expert Care Guides"
          description="Access detailed care instructions for every plant you purchase."
        />
        <FeatureCard
          icon={<ShoppingCart className="w-12 h-12 text-green-600" />}
          title="Fast & Secure Delivery"
          description="Your plants arrive safely and swiftly, ready to thrive."
        />
      </div>
    </div>
  );
};

export default LandingPage;
