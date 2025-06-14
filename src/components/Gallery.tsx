import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  titleHindi: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: 'bedroom',
    title: 'Traditional Wooden Bed',
    titleHindi: 'पारंपरिक लकड़ी का पलंग',
    image: '/images/gallery/bed-1.jpg'
  },
  {
    id: 2,
    category: 'living',
    title: 'Classic Sofa Set',
    titleHindi: 'क्लासिक सोफा सेट',
    image: '/images/gallery/sofa-1.jpg'
  },
  {
    id: 3,
    category: 'dining',
    title: 'Royal Dining Table',
    titleHindi: 'रॉयल डाइनिंग टेबल',
    image: '/images/gallery/dining-1.jpg'
  },
  {
    id: 4,
    category: 'office',
    title: 'Executive Desk',
    titleHindi: 'कार्यकारी डेस्क',
    image: '/images/gallery/desk-1.jpg'
  },
  {
    id: 5,
    category: 'bedroom',
    title: 'Wooden Wardrobe',
    titleHindi: 'लकड़ी की अलमारी',
    image: '/images/gallery/wardrobe-1.jpg'
  },
  {
    id: 6,
    category: 'living',
    title: 'Center Table',
    titleHindi: 'सेंटर टेबल',
    image: '/images/gallery/table-1.jpg'
  }
];

const categories = ['all', 'bedroom', 'living', 'dining', 'office'];

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-playfair font-bold text-darkWood mb-2">
            Our Gallery
          </h2>
          <p className="text-xl font-inter text-woodBrown">
            हमारी गैलरी
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-inter capitalize transition-colors duration-300
                ${selectedCategory === category
                  ? 'bg-peru text-white'
                  : 'bg-oldLace text-woodBrown hover:bg-woodBrown hover:text-white'
                }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.02 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-darkWood/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-xl font-playfair font-bold mb-1">{item.title}</h3>
                    <p className="font-inter">{item.titleHindi}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl w-full"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-peru transition-colors duration-300"
                >
                  <X size={32} />
                </button>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-darkWood/90 text-white p-4 rounded-b-lg">
                  <h3 className="text-xl font-playfair font-bold mb-1">{selectedImage.title}</h3>
                  <p className="font-inter">{selectedImage.titleHindi}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;