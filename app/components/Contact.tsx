'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 98765 43211'],
      color: 'from-green-400 to-green-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@droneindia.com', 'support@droneindia.com'],
      color: 'from-blue-400 to-blue-500'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['123 Tech Park, Bangalore', 'Karnataka, India - 560001'],
      color: 'from-purple-400 to-purple-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      color: 'from-yellow-400 to-yellow-500'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Aerial Shoots', href: '#aerial-shoots' },
    { name: 'Workshops', href: '#workshops' },
    { name: 'Custom Builds', href: '#custom-builds' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About Us', href: '#about' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your aerial journey? Contact us for consultations, bookings, and custom solutions.
          </p>
        </motion.div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-300 text-sm">{detail}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Service Required</label>
                <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors">
                  <option value="">Select a service</option>
                  <option value="aerial-shoot">Aerial Shoot</option>
                  <option value="workshop">Workshop</option>
                  <option value="custom-build">Custom Build</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-yellow-400 to-teal-400 text-black py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Visit Our Office</h3>
            <div className="bg-gray-700 rounded-lg h-64 mb-6 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400">Interactive Map Coming Soon</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">THE DRONE INDIA Headquarters</p>
                  <p className="text-gray-300 text-sm">123 Tech Park, Electronic City</p>
                  <p className="text-gray-300 text-sm">Bangalore, Karnataka - 560001</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="text-gray-300 text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-300 text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-teal-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DI</span>
                </div>
                <span className="text-xl font-bold gradient-text">THE DRONE INDIA</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Capturing skies, training minds, and crafting drones tailored for you. 
                Empowering aerial vision across India with cutting-edge drone technology.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-300 text-sm mb-4">
                Stay updated with our latest projects and offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-teal-400 text-black rounded-r-lg hover:shadow-lg transition-all duration-300"
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 THE DRONE INDIA. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
