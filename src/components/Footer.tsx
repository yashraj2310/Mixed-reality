import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { mrApplications } from '../App';

const Footer: React.FC = () => {
  const navigation = {
    solutions: mrApplications.slice(0, 5).map(app => ({ name: app.title.split(' & ')[0], href: app.path })),
    support: [
      { name: 'Documentation', href: '/documentation' },
      { name: 'Guides', href: '/guides' },
      { name: 'API Status', href: '/api-status' },
      { name: 'Support', href: '/support' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Jobs', href: '/jobs' },
      { name: 'Press', href: '/press' },
      { name: 'Partners', href: '/partners' },
    ],
    legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
    ],
    social: [
      {
        name: 'Twitter',
        href: '#',
        icon: (props: React.SVGProps<SVGSVGElement>) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
      {
        name: 'GitHub',
        href: '#',
        icon: (props: React.SVGProps<SVGSVGElement>) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: (props: React.SVGProps<SVGSVGElement>) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  };

  return (
    <motion.footer 
      id="contact" 
      className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden" 
      aria-labelledby="footer-heading"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(30, 58, 138, 0.2), rgba(88, 28, 135, 0.2), rgba(157, 23, 77, 0.2))",
            "linear-gradient(135deg, rgba(157, 23, 77, 0.2), rgba(30, 58, 138, 0.2), rgba(88, 28, 135, 0.2))",
            "linear-gradient(225deg, rgba(88, 28, 135, 0.2), rgba(157, 23, 77, 0.2), rgba(30, 58, 138, 0.2))",
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center group"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Laptop className="h-8 w-auto text-indigo-400 group-hover:text-purple-400 transition-colors duration-300" />
              </motion.div>
              <span className="ml-2 text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                MR Hub
              </span>
              <motion.div
                className="ml-2"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="h-4 w-4 text-yellow-400" />
              </motion.div>
            </motion.div>
            <motion.p 
              className="text-sm leading-6 text-gray-300"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              Exploring the future of Mixed Reality technology and its applications across industries.
            </motion.p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <motion.a 
                  key={item.name} 
                  href={item.href} 
                  className="text-gray-400 hover:text-indigo-300 transition-colors duration-300"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-sm font-semibold leading-6 text-white mb-6"
                  whileHover={{ x: 5, color: "#a5b4fc" }}
                >
                  Solutions
                </motion.h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item, index) => (
                    <motion.li 
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link 
                        to={item.href} 
                        className="text-sm leading-6 text-gray-300 hover:text-indigo-300 transition-colors duration-300 flex items-center group"
                      >
                        <motion.div
                          className="w-1 h-1 bg-indigo-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.5 }}
                        />
                        <motion.span
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.name}
                        </motion.span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                className="mt-10 md:mt-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-sm font-semibold leading-6 text-white mb-6"
                  whileHover={{ x: 5, color: "#a5b4fc" }}
                >
                  Support
                </motion.h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item, index) => (
                    <motion.li 
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link 
                        to={item.href} 
                        className="text-sm leading-6 text-gray-300 hover:text-indigo-300 transition-colors duration-300 flex items-center group"
                      >
                        <motion.div
                          className="w-1 h-1 bg-indigo-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.5 }}
                        />
                        <motion.span
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.name}
                        </motion.span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-sm font-semibold leading-6 text-white mb-6"
                  whileHover={{ x: 5, color: "#a5b4fc" }}
                >
                  Company
                </motion.h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item, index) => (
                    <motion.li 
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link 
                        to={item.href} 
                        className="text-sm leading-6 text-gray-300 hover:text-indigo-300 transition-colors duration-300 flex items-center group"
                      >
                        <motion.div
                          className="w-1 h-1 bg-indigo-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.5 }}
                        />
                        <motion.span
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.name}
                        </motion.span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                className="mt-10 md:mt-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-sm font-semibold leading-6 text-white mb-6"
                  whileHover={{ x: 5, color: "#a5b4fc" }}
                >
                  Legal
                </motion.h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item, index) => (
                    <motion.li 
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link 
                        to={item.href} 
                        className="text-sm leading-6 text-gray-300 hover:text-indigo-300 transition-colors duration-300 flex items-center group"
                      >
                        <motion.div
                          className="w-1 h-1 bg-indigo-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.5 }}
                        />
                        <motion.span
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                        {item.name}
                        </motion.span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-xs leading-5 text-gray-400 text-center"
            whileHover={{ color: "#a5b4fc" }}
          >
            &copy; 2025 MR Hub. All rights reserved. Built with ❤️ for the Mixed Reality community.
          </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;