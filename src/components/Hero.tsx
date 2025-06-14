import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[url('/images/hero-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-darkWood/40" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center text-white z-10 px-4"
      >
        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
          Furniture Made to Fit Your Lifestyle
        </h1>
        <p className="text-xl md:text-2xl font-inter mb-8">
          From Rural Hands to Royal Homes
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-peru hover:bg-woodBrown text-white font-inter py-3 px-8 rounded-lg transition-colors duration-300"
        >
          Get in Touch
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;