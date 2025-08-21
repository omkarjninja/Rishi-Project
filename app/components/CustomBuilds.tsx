'use client';

import { motion } from 'framer-motion';
import { Settings, Zap, ArrowRight, CheckCircle, Star, Camera, Wrench } from 'lucide-react';

const CustomBuilds = () => {
  const solutions = [
    {
      title: 'FPV & Racing Drones',
      subtitle: 'High-Speed Performance',
      description: 'High-speed, agile builds for racing and freestyle flying with immersive FPV experience.',
      image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      applications: [
        {
          name: 'Racing',
          description: 'High-speed competitive drone racing',
          icon: '🏁'
        },
        {
          name: 'Freestyle',
          description: 'Acrobatic flying and stunts',
          icon: '🎯'
        },
        {
          name: 'Content Creation',
          description: 'Immersive video and photography',
          icon: '📹'
        }
      ],
      features: [
        'High-Speed Motors',
        'Low-Latency Video System',
        'Custom Frame Design',
        'Advanced Flight Controller',
        'Professional Radio System',
        'Custom Tuning'
      ],
      icon: Zap,
      color: 'from-red-400 to-red-500'
    },
    {
      title: 'Application-Based Drones',
      subtitle: 'Specialized Solutions',
      description: 'Custom UAVs for agriculture, surveying, inspection, security, or delivery applications.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      applications: [
        {
          name: 'Agriculture',
          description: 'Crop monitoring, spraying, and precision farming',
          icon: '🌾'
        },
        {
          name: 'Inspection',
          description: 'Infrastructure, power lines, and industrial sites',
          icon: '🔍'
        },
        {
          name: 'Security',
          description: 'Surveillance and monitoring systems',
          icon: '🛡️'
        }
      ],
      features: [
        'Custom Payload Integration',
        'Extended Flight Time',
        'Advanced Sensors',
        'Professional Camera Systems',
        'Weather Resistance',
        'Custom Software Integration'
      ],
      icon: Settings,
      color: 'from-green-400 to-green-500'
    },
    {
      title: 'Cinematic Drones',
      subtitle: 'Professional Filmmaking',
      description: 'Special rigs for professional aerial cinematography with advanced camera systems.',
      image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      applications: [
        {
          name: 'Film Production',
          description: 'Professional film and commercial production',
          icon: '🎬'
        },
        {
          name: 'Broadcasting',
          description: 'Live event coverage and broadcasting',
          icon: '📺'
        },
        {
          name: 'Documentary',
          description: 'Nature and documentary filmmaking',
          icon: '📹'
        }
      ],
      features: [
        '8K Camera Systems',
        'Gimbal Stabilization',
        'Cinematic Flight Modes',
        'Professional Audio Integration',
        'Long-Range Transmission',
        'Advanced Post-Processing'
      ],
      icon: Camera,
      color: 'from-purple-400 to-purple-500'
    }
  ];

  return (
    <section id="custom-builds" className="py-20 bg-gray-50">
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
            Custom <span className="gradient-text">Drone Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bespoke drone builds tailored to your specific requirements and applications
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center`}>
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-lg text-gray-500 mb-4">{solution.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                </div>

                {/* Applications */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                  <div className="space-y-2">
                    {solution.applications.map((app) => (
                      <div key={app.name} className="flex items-center space-x-2">
                        <span className="text-lg">{app.icon}</span>
                        <div>
                          <h5 className="font-semibold text-gray-900 text-sm">{app.name}</h5>
                          <p className="text-xs text-gray-600">{app.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {solution.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gradient-to-r ${solution.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2`}
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cinema Production</h4>
              <p className="text-gray-600 text-sm mb-3">Custom 8K cinema drone for Bollywood production</p>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Agricultural Survey</h4>
              <p className="text-gray-600 text-sm mb-3">Precision farming drone for 1000-acre farm</p>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">FPV Racing</h4>
              <p className="text-gray-600 text-sm mb-3">Competition-grade FPV drone for national racing</p>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomBuilds;
