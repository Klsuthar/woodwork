import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Next: React.FC = () => {
  const navigate = useNavigate();

  const milestones = [
    {
      year: '1998',
      title: 'The Beginning',
      titleHindi: 'शुरुआत',
      description: 'Started as a small workshop in Delhi with three master craftsmen.'
    },
    {
      year: '2005',
      title: 'Expansion',
      titleHindi: 'विस्तार',
      description: 'Opened our first showroom and expanded the workshop facility.'
    },
    {
      year: '2010',
      title: 'Innovation',
      titleHindi: 'नवीनता',
      description: 'Introduced modern design techniques while preserving traditional craftsmanship.'
    },
    {
      year: '2015',
      title: 'Recognition',
      titleHindi: 'मान्यता',
      description: 'Received national award for excellence in furniture craftsmanship.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      titleHindi: 'डिजिटल परिवर्तन',
      description: 'Launched online design consultations and virtual showroom tours.'
    },
    {
      year: '2023',
      title: 'Sustainability Initiative',
      titleHindi: 'स्थिरता पहल',
      description: 'Implemented eco-friendly practices and sustainable material sourcing.'
    }
  ];

  return (
    <div className="min-h-screen bg-oldLace pt-20">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate(-1)}
        className="fixed top-24 left-4 md:left-8 z-10 flex items-center space-x-2 text-woodBrown hover:text-peru transition-colors duration-300"
      >
        <ArrowLeft size={20} />
        <span>Back</span>
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-darkWood mb-4">
            Our Journey
          </h1>
          <p className="text-xl font-inter text-woodBrown mb-8">
            हमारी यात्रा
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 font-inter leading-relaxed">
              For over two decades, KhatiRaj has been at the forefront of combining 
              traditional Indian craftsmanship with contemporary design aesthetics. 
              Our journey is a testament to our commitment to quality, innovation, 
              and customer satisfaction.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-peru/30" />
          
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              <div 
                className={`flex items-center mb-4 ${
                  index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                }`}
              >
                <div className="bg-peru text-white px-4 py-1 rounded-full font-playfair">
                  {milestone.year}
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-playfair font-bold text-darkWood mb-2">
                  {milestone.title}
                </h3>
                <p className="text-woodBrown font-inter mb-2">
                  {milestone.titleHindi}
                </p>
                <p className="text-gray-600 font-inter">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-playfair font-bold text-darkWood mb-6 text-center">
            Our Commitment to Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Master Craftsmanship',
                description: 'Every piece is handcrafted by skilled artisans with decades of experience.'
              },
              {
                title: 'Quality Materials',
                description: 'We source the finest materials to ensure durability and lasting beauty.'
              },
              {
                title: 'Customer Focus',
                description: 'Your satisfaction is our priority, from design to delivery and beyond.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-playfair font-bold text-darkWood mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-inter">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Next;