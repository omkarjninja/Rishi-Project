'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Star, Quote, Play, Video, Image } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');

  const galleryVideos = [
    {
      src: '/videos/1.mp4',
      title: 'Aerial Cinematic Shot',
      category: 'Cinematic',
      thumbnail: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/videos/2.mp4',
      title: 'Property Showcase',
      category: 'Real Estate',
      thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80'
    },
    {
      src: '/videos/3.mp4',
      title: 'Event Coverage',
      category: 'Events',
      thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
    },
    {
      src: '/videos/4.mp4',
      title: 'Wedding Aerial',
      category: 'Weddings',
      thumbnail: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/videos/5.mp4',
      title: 'Industrial Inspection',
      category: 'Industrial',
      thumbnail: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      src: '/videos/6.mp4',
      title: 'Agricultural Drone',
      category: 'Agriculture',
      thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Aerial view of cityscape',
      category: 'Property'
    },
    {
      src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      alt: 'Luxury property aerial',
      category: 'Property'
    },
    {
      src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      alt: 'Festival aerial coverage',
      category: 'Events'
    },
    {
      src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Wedding aerial shot',
      category: 'Events'
    },
    {
      src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Industrial inspection',
      category: 'Custom'
    },
    {
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Agricultural drone',
      category: 'Custom'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Real Estate Developer',
      content: 'Drone India transformed our property marketing with stunning aerial footage. The quality and professionalism exceeded our expectations.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      name: 'Priya Sharma',
      role: 'Event Organizer',
      content: 'Their aerial coverage of our corporate event was spectacular. The team was professional, punctual, and delivered amazing results.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      name: 'Amit Patel',
      role: 'Film Director',
      content: 'The custom cinema drone they built for our production was perfect. The quality and reliability were outstanding.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const nextVideo = () => {
    if (selectedVideo !== null) {
      setSelectedVideo((selectedVideo + 1) % galleryVideos.length);
    }
  };

  const prevVideo = () => {
    if (selectedVideo !== null) {
      setSelectedVideo(selectedVideo === 0 ? galleryVideos.length - 1 : selectedVideo - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Gallery & <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of stunning aerial captures and hear from our satisfied clients
          </p>
        </motion.div>

        {/* Toggle Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-100 rounded-2xl p-2 flex items-center">
            <button
              onClick={() => setActiveTab('photos')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'photos'
                  ? 'bg-white text-gray-900 shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Image className="w-5 h-5" />
              Photos
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'videos'
                  ? 'bg-white text-gray-900 shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Video className="w-5 h-5" />
              Videos
            </button>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === 'photos' ? (
              // Photo Gallery
              galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover-lift">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              // Video Gallery
              galleryVideos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedVideo(index)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover-lift">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 text-gray-900 p-4 rounded-full shadow-lg">
                        <Play className="w-8 h-8 ml-1" fill="currentColor" />
                      </div>
                    </div>
                    
                    {/* Video Info */}
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                        {video.category}
                      </span>
                    </div>
                    
                    {/* Video Title */}
                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
                        {video.title}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>

        {/* Video Lightbox */}
        <AnimatePresence>
          {selectedVideo !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedVideo(null)}
            >
              <div className="relative max-w-4xl max-h-full">
                <video
                  src={galleryVideos[selectedVideo].src}
                  controls
                  autoPlay
                  className="max-w-full max-h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  Your browser does not support the video tag.
                </video>
                
                {/* Navigation */}
                <button
                  onClick={(e) => { e.stopPropagation(); prevVideo(); }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextVideo(); }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
                >
                  <ChevronRight size={24} />
                </button>
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
                >
                  <X size={24} />
                </button>
                
                {/* Video Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-semibold">{galleryVideos[selectedVideo].title}</p>
                  <p className="text-sm opacity-80">{galleryVideos[selectedVideo].category} Category</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-4xl max-h-full">
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="max-w-full max-h-full object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
                
                {/* Navigation */}
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
                >
                  <ChevronRight size={24} />
                </button>
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
                >
                  <X size={24} />
                </button>
                
                {/* Image Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-semibold">{galleryImages[selectedImage].alt}</p>
                  <p className="text-sm opacity-80">{galleryImages[selectedImage].category} Category</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 hover-lift"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-gray-300 mb-4" />
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
