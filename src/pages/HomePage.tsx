import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '../components/Hero';
import MRSection from '../components/MRSection';
import AnimatedCounter from '../components/AnimatedCounter';
import { mrApplications } from '../App';
import { Users, Building, Globe, Award, Zap, Eye, Brain, Rocket } from 'lucide-react';

const HomePage: React.FC = () => {
  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: featuresRef, inView: featuresInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const stats = [
    { icon: <Users className="h-8 w-8" />, value: 50, suffix: "M+", label: "Users Worldwide" },
    { icon: <Building className="h-8 w-8" />, value: 10000, suffix: "+", label: "Companies" },
    { icon: <Globe className="h-8 w-8" />, value: 150, suffix: "+", label: "Countries" },
    { icon: <Award className="h-8 w-8" />, value: 95, suffix: "%", label: "Satisfaction Rate" },
  ];

  const features = [
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Experience real-time rendering with sub-20ms latency for seamless mixed reality interactions."
    },
    {
      icon: <Eye className="h-12 w-12 text-blue-500" />,
      title: "Spatial Awareness",
      description: "Advanced computer vision and SLAM technology for precise object tracking and environmental understanding."
    },
    {
      icon: <Brain className="h-12 w-12 text-purple-500" />,
      title: "AI-Powered",
      description: "Machine learning algorithms that adapt to user behavior and optimize experiences in real-time."
    },
    {
      icon: <Rocket className="h-12 w-12 text-red-500" />,
      title: "Future-Ready",
      description: "Built on cutting-edge technologies with continuous updates and new feature rollouts."
    },
  ];

  return (
    <main>
      <Hero />
      
      {/* Stats Section */}
      <motion.section 
        ref={statsRef}
        className="py-24 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={statsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Powering the Mixed Reality Revolution
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Join millions of users and thousands of companies already transforming their industries with Mixed Reality
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ y: 50, opacity: 0 }}
                animate={statsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4 text-white group-hover:bg-white/20 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-4xl font-bold text-white mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/80 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        ref={featuresRef}
        className="py-24 bg-gray-50 relative"
        initial={{ opacity: 0 }}
        animate={featuresInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={featuresInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Mixed Reality Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the next generation of Mixed Reality with cutting-edge features designed for the future
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100"
                initial={{ y: 50, opacity: 0 }}
                animate={featuresInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <motion.div 
                  className="mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl lg:text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-base font-semibold leading-7 text-indigo-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Mixed Reality Applications
            </motion.h2>
            <motion.p 
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Transforming Industries Through Mixed Reality
            </motion.p>
            <motion.p 
              className="mt-6 text-lg leading-8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Mixed Reality combines elements of both Augmented Reality (AR) and Virtual Reality (VR), 
              allowing digital and physical objects to interact in real time. Explore how MR is revolutionizing 
              various industries.
            </motion.p>
          </motion.div>
          
          <div className="mx-auto mt-16 max-w-7xl">
            {mrApplications.map((application) => (
              <MRSection key={application.id} application={application} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;