import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
  path: string;
}

interface MRSectionProps {
  application: Feature;
}

const MRSection: React.FC<MRSectionProps> = ({ application }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div 
      ref={ref}
      id="applications" 
      className="mb-24 overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-100 group"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <motion.div 
          className="px-6 py-8 sm:px-8 lg:py-12 relative"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="flex items-center mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg"
              whileHover={{ 
                rotate: 360,
                boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)",
              }}
              transition={{ duration: 0.6 }}
            >
              {React.cloneElement(application.icon as React.ReactElement, {
                className: "h-8 w-8 text-white"
              })}
            </motion.div>
            <h3 className="ml-4 text-2xl font-bold leading-8 text-gray-900 group-hover:text-indigo-600 transition-colors">
              {application.title}
            </h3>
          </motion.div>
          
          <motion.p 
            className="text-base leading-7 text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {application.description}
          </motion.p>
          
          <div className="mt-8">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {application.features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start group/item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="flex-shrink-0 mt-1"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight className="h-5 w-5 text-indigo-500 group-hover/item:text-purple-500 transition-colors" aria-hidden="true" />
                  </motion.div>
                  <p className="ml-3 text-base leading-7 text-gray-600 group-hover/item:text-gray-900 transition-colors">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Link
                to={application.path}
                className="group/link inline-flex items-center text-sm font-semibold leading-6 text-indigo-600 hover:text-purple-600 transition-all duration-300"
              >
                <motion.div
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <Sparkles className="w-4 h-4 mr-2 group-hover/link:text-purple-500 transition-colors" />
                  Learn more about {application.title}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronRight className="ml-1 h-4 w-4 group-hover/link:text-purple-500 transition-colors" />
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          </div>
          
          {/* Decorative elements */}
          <motion.div
            className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-50"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
        
        <motion.div 
          className="relative h-64 lg:h-auto overflow-hidden"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.img
            src={application.image}
            alt={application.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            whileHover={{ scale: 1.1 }}
          />
          
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r"
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 0.4 }}
            transition={{ duration: 0.3 }}
          />
          
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          
          <div className="absolute bottom-0 left-0 p-6 lg:hidden">
            <motion.h3 
              className="text-xl font-bold text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {application.title}
            </motion.h3>
          </div>
          
          {/* Floating particles effect */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-70"
            animate={{
              y: [0, -20, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 0,
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-1 h-1 bg-indigo-300 rounded-full opacity-80"
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-60"
            animate={{
              y: [0, -25, 0],
              x: [0, -15, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: 2,
            }}
          />
        </motion.div>
      </div>
      
      {/* Bottom accent line */}
      <motion.div
        className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
      />
    </motion.div>
  );
};

export default MRSection;