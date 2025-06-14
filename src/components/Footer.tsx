import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Quick Links',
      titleHindi: 'त्वरित लिंक',
      links: [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Services',
      titleHindi: 'सेवाएं',
      links: [
        { name: 'Custom Furniture', href: '/services#custom' },
        { name: 'Home Furniture', href: '/services#home' },
        { name: 'Restoration', href: '/services#restoration' },
        { name: 'Office Setup', href: '/services#office' },
      ],
    },
    {
      title: 'Support',
      titleHindi: 'सहायता',
      links: [
        { name: 'FAQ', href: '/faq' },
        { name: 'Shipping', href: '/shipping' },
        { name: 'Returns', href: '/returns' },
        { name: 'Privacy Policy', href: '/privacy' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: 'https://facebook.com' },
    { icon: <Instagram size={20} />, href: 'https://instagram.com' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com' },
    { icon: <Youtube size={20} />, href: 'https://youtube.com' },
  ];

  return (
    <footer className="bg-darkWood text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-playfair font-bold mb-4 block">
              KhatiRaj
            </Link>
            <p className="text-gray-300 font-inter mb-6 max-w-md">
              Blending traditional craftsmanship with modern design to create 
              furniture that tells a story. Your vision, our expertise.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-peru transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-playfair font-bold text-lg mb-2">
                {section.title}
              </h3>
              <p className="text-peru text-sm mb-4 font-inter">
                {section.titleHindi}
              </p>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-peru transition-colors duration-300 font-inter text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 font-inter text-sm text-center md:text-left">
              © {currentYear} KhatiRaj. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/terms"
                className="text-gray-300 hover:text-peru transition-colors duration-300 font-inter text-sm"
              >
                Terms of Service
              </Link>
              <Link
                to="/privacy"
                className="text-gray-300 hover:text-peru transition-colors duration-300 font-inter text-sm"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;