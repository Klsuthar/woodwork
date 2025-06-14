import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      titleHindi: 'फ़ोन',
      content: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      titleHindi: 'ईमेल',
      content: 'info@khatiraj.com',
      link: 'mailto:info@khatiraj.com'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Address',
      titleHindi: 'पता',
      content: '123, Craft Street, Artisan District, Delhi, India',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-playfair font-bold text-darkWood mb-2">
            Get in Touch
          </h2>
          <p className="text-xl font-inter text-woodBrown">
            संपर्क करें
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="prose max-w-none">
              <h3 className="text-2xl font-playfair font-bold text-darkWood mb-4">
                Let's Create Something Beautiful Together
              </h3>
              <p className="text-woodBrown font-inter mb-8">
                आइए मिलकर कुछ खूबसूरत बनाएं
              </p>
              <p className="text-gray-600 font-inter">
                Whether you're looking for custom furniture, complete home solutions, 
                or furniture restoration, we're here to help bring your vision to life.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.title === 'Address' ? '_blank' : undefined}
                  rel={info.title === 'Address' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-oldLace transition-colors duration-300"
                >
                  <div className="text-peru">{info.icon}</div>
                  <div>
                    <h4 className="font-playfair font-bold text-darkWood">
                      {info.title}
                    </h4>
                    <p className="text-woodBrown font-inter text-sm mb-1">
                      {info.titleHindi}
                    </p>
                    <p className="text-gray-600 font-inter">
                      {info.content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-darkWood font-inter mb-2">
                  Name / नाम
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-peru focus:ring-1 focus:ring-peru outline-none transition-colors duration-300 font-inter"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-darkWood font-inter mb-2">
                  Email / ईमेल
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-peru focus:ring-1 focus:ring-peru outline-none transition-colors duration-300 font-inter"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-darkWood font-inter mb-2">
                  Phone / फ़ोन
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-peru focus:ring-1 focus:ring-peru outline-none transition-colors duration-300 font-inter"
                  placeholder="Your Phone Number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-darkWood font-inter mb-2">
                  Message / संदेश
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-peru focus:ring-1 focus:ring-peru outline-none transition-colors duration-300 font-inter resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-8 rounded-lg font-inter text-white transition-colors duration-300 flex items-center justify-center space-x-2
                  ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-peru hover:bg-woodBrown'}`}
              >
                <span>Send Message</span>
                <Send size={18} />
              </motion.button>

              {/* Submission Status */}
              {submitStatus !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center p-3 rounded-lg font-inter ${
                    submitStatus === 'success' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {submitStatus === 'success' 
                    ? 'Message sent successfully!' 
                    : 'Error sending message. Please try again.'}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;