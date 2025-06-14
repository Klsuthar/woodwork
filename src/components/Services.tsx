import React from 'react';
import { motion } from 'framer-motion';
import { Tool, Home, RefreshCw, Briefcase } from 'lucide-react';

const services = [
  {
    icon: <Tool size={32} />,
    title: 'Custom Furniture',
    titleHindi: 'कस्टम फर्नीचर',
    description: 'Handcrafted furniture tailored to your space, style, and materials.',
  },
  {
    icon: <Home size={32} />,
    title: 'Complete Home Furniture',
    titleHindi: 'संपूर्ण घर का फर्नीचर',
    description: 'Full-home custom manufacturing with customer-supplied materials.',
  },
  {
    icon: <RefreshCw size={32} />,
    title: 'Furniture Repair & Restoration',
    titleHindi: 'फर्नीचर मरम्मत और नवीनीकरण',
    description: 'Reviving old furniture using traditional expertise.',
  },
  {
    icon: <Briefcase size={32} />,
    title: 'Office Furniture & Setup',
    titleHindi: 'कार्यालय फर्नीचर और सेटअप',
    description: 'Productivity-focused, custom-built furniture for workspaces.',
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-oldLace">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-playfair font-bold text-darkWood mb-2">
            Our Services
          </h2>
          <p className="text-xl font-inter text-woodBrown">
            हमारी सेवाएं
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-peru mb-4">{service.icon}</div>
              <h3 className="text-xl font-playfair font-bold text-darkWood mb-2">
                {service.title}
              </h3>
              <p className="text-woodBrown font-inter mb-2">{service.titleHindi}</p>
              <p className="text-gray-600 font-inter">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;