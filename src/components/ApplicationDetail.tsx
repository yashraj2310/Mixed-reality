import React from 'react';
import { ArrowLeft, ChevronRight, Sparkles, Zap, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CaseStudy {
  title: string;
  company: string;
  description: string;
  image: string;
}

interface DetailSection {
  title: string;
  content: string;
  image?: string;
}

interface ApplicationDetailProps {
  title: string;
  icon: React.ReactNode;
  mainImage: string;
  overview: string;
  keyFeatures: string[];
  sections: DetailSection[];
  caseStudies: CaseStudy[];
  technologies: string[];
}

const ApplicationDetail: React.FC<ApplicationDetailProps> = ({
  title,
  icon,
  mainImage,
  overview,
  keyFeatures,
  sections,
  caseStudies,
  technologies
}) => {
  const { ref: overviewRef, inView: overviewInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: sectionsRef, inView: sectionsInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: casesRef, inView: casesInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="bg-white pt-24 pb-12 relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            whileHover={{ x: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              to="/applications" 
              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-purple-600 transition-colors duration-300 group"
            >
              <motion.div
                whileHover={{ x: -3 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:text-purple-600 transition-colors" />
              </motion.div>
              Back to all applications
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex items-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="mr-6 p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg"
            whileHover={{ 
              rotate: 360,
              scale: 1.1,
              boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)",
            }}
            transition={{ duration: 0.6 }}
          >
            {React.cloneElement(icon as React.ReactElement, {
              className: "h-10 w-10 text-white"
            })}
          </motion.div>
          <motion.h1 
            className="text-4xl font-bold text-gray-900"
            whileHover={{ x: 5, color: "#4f46e5" }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h1>
        </motion.div>
        
        <motion.div 
          className="mb-16 overflow-hidden rounded-2xl shadow-2xl group"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.img 
            src={mainImage} 
            alt={title} 
            className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        </motion.div>
        
        <div ref={overviewRef} className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={overviewInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-6 flex items-center"
              whileHover={{ x: 5 }}
            >
              <Eye className="w-8 h-8 mr-3 text-indigo-600" />
              Overview
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={overviewInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {overview}
            </motion.p>
            
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-6 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={overviewInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ x: 5 }}
            >
              <Zap className="w-8 h-8 mr-3 text-yellow-500" />
              Key Features
            </motion.h2>
            <div className="space-y-4 mb-8">
              {keyFeatures.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start group/feature p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={overviewInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 5, backgroundColor: "#f8fafc" }}
                >
                  <motion.div 
                    className="flex-shrink-0 mt-1"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight className="h-5 w-5 text-indigo-500 group-hover/feature:text-purple-500 transition-colors" aria-hidden="true" />
                  </motion.div>
                  <p className="ml-3 text-base leading-7 text-gray-600 group-hover/feature:text-gray-900 transition-colors">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-gray-50 to-indigo-50 p-8 rounded-2xl h-fit shadow-lg border border-gray-100"
            initial={{ opacity: 0, x: 30 }}
            animate={overviewInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h3 
              className="text-xl font-bold text-gray-900 mb-6 flex items-center"
              whileHover={{ x: 5 }}
            >
              <Sparkles className="w-6 h-6 mr-2 text-indigo-600" />
              Related Technologies
            </motion.h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.span 
                  key={index} 
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white text-indigo-800 shadow-sm hover:shadow-md border border-indigo-100 hover:border-indigo-200 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={overviewInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "#eef2ff",
                    boxShadow: "0 4px 12px rgba(99, 102, 241, 0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-indigo-500 rounded-full mr-2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div ref={sectionsRef}>
          {sections.map((section, index) => (
            <motion.div 
              key={index} 
              className={`mb-20 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex gap-12 items-center`}
              initial={{ opacity: 0, y: 50 }}
              animate={sectionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div 
                className="lg:w-1/2"
                whileHover={{ x: index % 2 === 0 ? 5 : -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h2 
                  className="text-3xl font-bold text-gray-900 mb-6"
                  whileHover={{ color: "#4f46e5" }}
                  transition={{ duration: 0.3 }}
                >
                  {section.title}
                </motion.h2>
                <motion.p 
                  className="text-lg text-gray-600 leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {section.content}
                </motion.p>
              </motion.div>
              {section.image && (
                <motion.div 
                  className="lg:w-1/2 mt-6 lg:mt-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="overflow-hidden rounded-2xl shadow-xl group"
                    whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  >
                    <img 
                      src={section.image} 
                      alt={section.title} 
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        <div ref={casesRef} className="mb-16">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 text-center mb-12 flex items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={casesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-10 h-10 mr-4 text-indigo-600" />
            Success Stories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-gray-100"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={casesInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <motion.div 
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </motion.div>
                <div className="p-6">
                  <motion.p 
                    className="text-sm font-medium text-indigo-600 mb-2"
                    whileHover={{ color: "#7c3aed" }}
                  >
                    {study.company}
                  </motion.p>
                  <motion.h3 
                    className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {study.title}
                  </motion.h3>
                  <motion.p 
                    className="text-base text-gray-500 mb-6 group-hover:text-gray-600 transition-colors duration-300"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {study.description}
                  </motion.p>
                  <motion.div 
                    className="mt-6"
                    whileHover={{ x: 5 }}
                  >
                    <motion.a 
                      href="#" 
                      className="text-indigo-600 hover:text-purple-600 font-medium flex items-center group/link transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Sparkles className="w-4 h-4 mr-2 group-hover/link:text-purple-600 transition-colors" />
                      Read case study
                      <motion.span 
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        &rarr;
                      </motion.span>
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
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
              <h3 className="text-3xl font-bold mb-4">Ready to Implement {title}?</h3>
              <p className="text-xl mb-8 opacity-90">
                Get started with our comprehensive implementation guide and expert support
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Implementation
                </motion.button>
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Expert
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ApplicationDetail;