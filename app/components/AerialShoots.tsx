'use client';

import { motion } from 'framer-motion';
import { Camera, Calendar, Users, ArrowRight, Star } from 'lucide-react';

const AerialShoots = () => {
  const categories = [
    {
      title: 'Property & Industrial Shoots',
      description: 'High-precision aerial photography and videography for real estate, commercial properties, machinery, infrastructure, solar farms, and civil structures.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      features: ['4K Quality', 'Quick Turnaround', 'Professional Editing'],
      price: 'Starting from ₹3,000',
      icon: Camera,
      color: 'from-yellow-400 to-yellow-500',
      details: [
        'Real Estate & Commercial Properties – Showcase unique perspectives',
        'Machinery & Infrastructure – Monitor, inspect, and document assets',
        'Solar Farms & Civil Structures – Large-scale coverage for analysis and promotion'
      ]
    },
    {
      title: 'Public Events',
      description: 'Dynamic aerial coverage for large gatherings and live events including festivals, sports events, and corporate functions.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      features: ['Live Streaming', 'Event Highlights', 'Multi-Angle Coverage', 'Social Media Content'],
      price: 'Starting from ₹5,000',
      icon: Calendar,
      color: 'from-teal-400 to-teal-500',
      details: [
        'Festivals & Processions – Capture scale and vibrancy from the skies',
        'Sports Events – Multi-angle aerial perspectives & live streaming',
        'Corporate & Government Events – High-impact footage for media and archives'
      ]
    },
    {
      title: 'Private Events',
      description: 'Intimate aerial coverage for weddings, corporate events, and special celebrations with personalized touch.',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Personalized Shots', 'Cinematic Editing', 'Drone Light Shows', 'Same Day Preview'],
      price: 'Starting from ₹10,000',
      icon: Users,
      color: 'from-purple-400 to-purple-500',
      details: [
        'Weddings & Celebrations – Capture precious moments from above',
        'Corporate Events – Professional coverage for business functions',
        'Special Occasions – Personalized aerial storytelling'
      ]
    }
  ];

  return (
    <section id="aerial-shoots" className="py-20 bg-gray-50">
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
            Aerial <span className="gradient-text">Shoots</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional aerial photography and videography services tailored to your specific needs
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                  
                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    {category.details.map((detail, idx) => (
                      <div key={idx} className="text-sm text-gray-600 leading-relaxed">
                        <span className="font-medium text-gray-700">• {detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {category.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="text-lg font-semibold text-gray-900 mb-4">
                    {category.price}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${category.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
                    onClick={() => {
                      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span>Book a Shoot</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-400 to-teal-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
          >
            View Complete Portfolio
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default AerialShoots;
