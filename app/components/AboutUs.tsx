'use client';

import { motion } from 'framer-motion';
import { Shield, Target, Users, Award, Star } from 'lucide-react';

const AboutUs = () => {
  const coreValues = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Comprehensive safety protocols and certified training programs ensuring secure operations.',
      color: 'from-green-400 to-green-500'
    },
    {
      icon: Target,
      title: 'Customization',
      description: 'Tailored solutions designed to meet your specific requirements and project goals.',
      color: 'from-blue-400 to-blue-500'
    },
    {
      icon: Users,
      title: 'Expertise',
      description: 'Experienced team with deep knowledge in drone technology and aerial applications.',
      color: 'from-purple-400 to-purple-500'
    }
  ];

  const certifications = [
    'DGCA Certified Operator',
    'ISO 9001:2015 Certified',
    'Safety Management System',
    'Professional Liability Insurance'
  ];

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '500+', label: 'Successful Projects' },
    { number: '50+', label: 'Team Members' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  const clientLogos = [
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
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
            About <span className="gradient-text">THE DRONE INDIA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing skies, training minds, and crafting drones tailored for you
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              &ldquo;Capturing skies, training minds, and crafting drones tailored for you. 
              We empower aerial vision across India by providing innovative drone solutions, 
              comprehensive training, and custom builds that transform how businesses and individuals 
              capture, analyze, and experience the world from above.&rdquo;
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-teal-400 mx-auto rounded-full"></div>
          </div>
        </motion.div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-yellow-400 to-teal-400 rounded-2xl p-8 mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/90 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team and Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Team Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Drone India Team"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Our Expert Team</h4>
                <p className="text-white/90">Certified pilots, engineers, and technicians</p>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications & Standards</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={cert} className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <Star className="w-6 h-6 text-yellow-500 fill-current" />
                <h4 className="font-semibold text-gray-900">Quality Assurance</h4>
              </div>
              <p className="text-gray-600 text-sm">
                All our operations follow strict quality standards and safety protocols, 
                ensuring the highest level of professionalism and reliability in every project.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Trusted By Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <div className="w-24 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <div className="w-16 h-8 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
