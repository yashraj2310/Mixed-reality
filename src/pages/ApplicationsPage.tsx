import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageHeader from '../components/PageHeader';
import { mrApplications } from '../App';
import { Sparkles, ArrowRight } from 'lucide-react';

const ApplicationsPage: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="bg-white pt-16">
      <PageHeader 
        title="Mixed Reality Applications" 
        description="Explore how Mixed Reality is transforming industries across the globe"
        image="https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Mixed Reality Applications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how Mixed Reality is revolutionizing industries and creating new possibilities for human-computer interaction
          </p>
        </motion.div>
        
        <div ref={ref} className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {mrApplications.map((app) => (
            <motion.div 
              key={app.id} 
              className="group relative"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.8, delay: app.id * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl bg-gray-200 shadow-lg group-hover:shadow-2xl transition-shadow duration-500"
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  src={app.image}
                  alt={app.title}
                  className="h-64 w-full object-cover object-center transition-all duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                
                {/* Gradient overlays */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-purple-600/30 to-pink-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Icon container */}
                <motion.div 
                  className="absolute bottom-4 left-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + app.id * 0.1 }}
                >
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div 
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg group-hover:bg-white group-hover:shadow-xl transition-all duration-300"
                      whileHover={{ 
                        rotate: 360,
                        boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)",
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {React.cloneElement(app.icon as React.ReactElement, {
                        className: "h-6 w-6 text-indigo-600 group-hover:text-purple-600 transition-colors duration-300"
                      })}
                    </motion.div>
                  </motion.div>
                </motion.div>
                
                {/* Floating particles */}
                <motion.div
                  className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full opacity-70"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: app.id * 0.5,
                  }}
                />
                
                {/* Hover overlay with action */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                >
                  <motion.div
                    className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ArrowRight className="h-8 w-8 text-white" />
                  </motion.div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="mt-6 flex justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 + app.id * 0.1 }}
              >
                <div className="flex-1">
                  <motion.h3 
                    className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <Link to={app.path} className="flex items-center">
                      <span aria-hidden="true" className="absolute inset-0" />
                      <Sparkles className="w-4 h-4 mr-2 text-indigo-500 group-hover:text-purple-500 transition-colors" />
                      {app.title}
                    </Link>
                  </motion.h3>
                  
                  <motion.p 
                    className="mt-2 text-sm text-gray-500 line-clamp-2 group-hover:text-gray-600 transition-colors duration-300"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {app.description}
                  </motion.p>
                  
                  {/* Feature highlights */}
                  <motion.div 
                    className="mt-3 flex flex-wrap gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + app.id * 0.1 }}
                  >
                    {app.features.slice(0, 2).map((feature, idx) => (
                      <motion.span
                        key={idx}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 group-hover:bg-purple-100 group-hover:text-purple-800 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {feature.split(' ')[0]}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"
              />
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2))",
                  "linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
                  "linear-gradient(225deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))",
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Industry?</h3>
              <p className="text-xl mb-8 opacity-90">
                Discover how Mixed Reality can revolutionize your business processes and customer experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                </motion.button>
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ApplicationsPage;