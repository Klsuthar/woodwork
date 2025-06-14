import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const achievements = [
  {
    icon: <Clock size={32} />,
    count: '25+',
    title: 'Years of Excellence',
    titleHindi: 'उत्कृष्टता के वर्ष',
  },
  {
    icon: <Users size={32} />,
    count: '1000+',
    title: 'Happy Customers',
    titleHindi: 'संतुष्ट ग्राहक',
  },
  {
    icon: <Award size={32} />,
    count: '50+',
    title: 'Master Craftsmen',
    titleHindi: 'कुशल कारीगर',
  },
  {
    icon: <Star size={32} />,
    count: '200+',
    title: 'Custom Projects',
    titleHindi: 'विशेष परियोजनाएं',
  },
];

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-oldLace" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={ { opacity: 0, y: 20 } }
          whileInView={ { opacity: 1, y: 0 } }
          viewport={ { once: true } }
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-playfair font-bold text-darkWood mb-2">
            Our Story
          </h2>
          <p className="text-xl font-inter text-woodBrown">
            हमारी कहानी
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={ { opacity: 0, x: -20 } }
            whileInView={ { opacity: 1, x: 0 } }
            viewport={ { once: true } }
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img
                src="/images/workshop.jpg"
                alt="KhatiRaj Workshop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-peru rounded-lg -z-10"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={ { opacity: 0, x: 20 } }
            whileInView={ { opacity: 1, x: 0 } }
            viewport={ { once: true } }
            className="space-y-6"
          >
            <h3 className="text-2xl font-playfair font-bold text-darkWood">
              Crafting Excellence Since 1998
            </h3>
            <p className="text-woodBrown font-inter">
              परंपरागत कारीगरी, आधुनिक डिज़ाइन
            </p>
            <p className="text-gray-700 font-inter">
              At KhatiRaj, we blend traditional craftsmanship with modern design sensibilities. 
              Our journey began in the heartland of India, where skilled artisans have been 
              crafting furniture for generations.
            </p>
            <p className="text-gray-700 font-inter">
              Today, we continue this legacy while embracing contemporary aesthetics and 
              sustainable practices. Each piece we create tells a story of dedication, 
              skill, and artistic vision.
            </p>
            <div className="pt-4">
              <motion.button
                whileHover={ { scale: 1.05 } }
                whileTap={ { scale: 0.95 } }
                onClick={() => navigate('/next')}
                className="bg-peru hover:bg-woodBrown text-white font-inter py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Rest of the component remains unchanged */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={ { opacity: 0, y: 20 } }
              whileInView={ { opacity: 1, y: 0 } }
              viewport={ { once: true } }
              transition={ { delay: index * 0.2 } }
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="text-peru mb-4 flex justify-center">
                {achievement.icon}
              </div>
              <h4 className="text-3xl font-playfair font-bold text-darkWood mb-2">
                {achievement.count}
              </h4>
              <p className="text-woodBrown font-inter font-medium mb-1">
                {achievement.title}
              </p>
              <p className="text-gray-600 font-inter">
                {achievement.titleHindi}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Values section remains unchanged */}
        <motion.div
          initial={ { opacity: 0, y: 20 } }
          whileInView={ { opacity: 1, y: 0 } }
          viewport={ { once: true } }
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-playfair font-bold text-darkWood mb-8">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality Craftsmanship',
                titleHindi: 'गुणवत्तापूर्ण कारीगरी',
                description: 'Every piece is crafted with precision and care.',
              },
              {
                title: 'Sustainable Practices',
                titleHindi: 'स्थायी प्रथाएं',
                description: 'We prioritize environmental responsibility in our work.',
              },
              {
                title: 'Customer Satisfaction',
                titleHindi: 'ग्राहक संतुष्टि',
                description: 'Your satisfaction is our ultimate goal.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={ { opacity: 0, y: 20 } }
                whileInView={ { opacity: 1, y: 0 } }
                viewport={ { once: true } }
                transition={ { delay: index * 0.2 } }
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-xl font-playfair font-bold text-darkWood mb-2">
                  {value.title}
                </h4>
                <p className="text-woodBrown font-inter mb-2">{value.titleHindi}</p>
                <p className="text-gray-600 font-inter">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;