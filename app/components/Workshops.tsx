'use client';

import { motion } from 'framer-motion';
import { BookOpen, Wrench, Users, Clock, CheckCircle, ArrowRight, Star } from 'lucide-react';

const Workshops = () => {
  const workshops = [
    {
      title: 'Drone Basics',
      subtitle: 'Beginner Level',
      description: 'Hands-on introduction to drones, perfect for enthusiasts & students.',
      duration: '1 Day',
      participants: 'Max 8 Students',
      price: '₹5,000',
      originalPrice: '₹10,000',
      features: [
        'Underswtanding the drone and its types',
        'Understanding drone components & working principles',
        'Safety guidelines & DGCA regulations overview',
        'Basic simulator training & flight practice',
        // 'Battery management & maintenance essentials'
      ],
      icon: BookOpen,
      color: 'from-blue-400 to-blue-500',
      popular: false
    },
    {
      title: 'Drone Basics: Quadcopter',
      subtitle: 'Specialized Workshop',
      description: 'Specialized workshop focusing on quadcopter development.',
      duration: '2 Days',
      participants: 'Max 6 Students',
      price: '₹15,000',
      originalPrice: '₹22,000',
      features: [
        'Underswtanding the drone and its components',
        'Safety guidelines & DGCA regulations overview',
        'Basic simulator training & flight practice',
        'Flight controller setup & parameter tuning',
        // 'Pre-flight checks & troubleshooting',
        // 'Hands-on flying & maneuvering practice'
      ],
      icon: Wrench,
      color: 'from-green-400 to-green-500',
      popular: false
    },
    {
      title: 'Drone Basics: Fixed-Wing',
      subtitle: 'Advanced Level',
      description: 'Deep dive into fixed-wing UAVs for advanced learners & professionals.',
      duration: '4 Days',
      participants: 'Max 4 Students',
      price: '₹15,000',
      originalPrice: '₹32,000',
      features: [
        'Underswtanding the drone and its components',
        'Safety guidelines & DGCA regulations overview',
        'Aerodynamics & airframe design fundamentals',
        'Develpoping air craft & electronics integration',
        // 'Flight stabilization & autopilot setup',
        // 'Launching & landing techniques',
        // 'Mission planning for aerial survey & endurance flights'
      ],
      icon: Wrench,
      color: 'from-purple-400 to-purple-500',
      popular: true
    }
  ];

  return (
    <section id="workshops" className="py-20 bg-white">
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
            Drone <span className="gradient-text">Workshops</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hands-on training programs designed to make you a confident drone pilot and proffesional
          </p>
        </motion.div>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {workshop.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`bg-white rounded-2xl shadow-lg hover-lift border-2 ${
                workshop.popular ? 'border-yellow-400' : 'border-gray-100'
              }`}>
                {/* Header */}
                <div className="p-8 border-b border-gray-100">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${workshop.color} rounded-xl flex items-center justify-center`}>
                      <workshop.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{workshop.title}</h3>
                      <p className="text-gray-500">{workshop.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{workshop.description}</p>
                  
                  {/* Duration and Participants */}
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{workshop.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{workshop.participants}</span>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="p-8 border-b border-gray-100">
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">{workshop.price}</span>
                    <span className="text-lg text-gray-400 line-through">{workshop.originalPrice}</span>
                  </div>
                  <p className="text-sm text-gray-500">One-time payment, Additional cost for kits</p>
                </div>

                {/* Features */}
                <div className="p-8">
                  <h4 className="font-semibold text-gray-900 mb-4">What&apos;s Included:</h4>
                  <div className="space-y-3">
                    {workshop.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="p-8 pt-0">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${workshop.color} text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
                  >
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdTut1XYPGE3TEwtomEYF9llieqMPX_W2TncoPWVFqsRrAzug/viewform" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center space-x-2'>
                    <span className='text-white'>Enroll Now</span>
                    <ArrowRight className="w-4 h-4" />
                    </a>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-50 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Certified Training</h4>
              <p className="text-gray-600 text-sm">DGCA compliant training programs</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Small Groups</h4>
              <p className="text-gray-600 text-sm">Personalized attention for better learning</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Hands-on Experience</h4>
              <p className="text-gray-600 text-sm">Learn by doing with real equipment</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Workshops;
