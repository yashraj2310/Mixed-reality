import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageHeader from '../components/PageHeader';
import { Glasses, Smartphone, Laptop, Cpu, Wifi, Headphones, Gamepad, Lightbulb, Zap, Eye, Brain, Layers } from 'lucide-react';

const TechnologyPage: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const technologies = [
    {
      name: 'MR Headsets',
      description: 'Advanced headsets that combine transparent displays with spatial mapping capabilities to overlay digital content onto the physical world.',
      icon: <Glasses className="h-8 w-8 text-indigo-600" />,
      examples: ['Microsoft HoloLens 2', 'Magic Leap 2', 'Meta Quest Pro', 'Apple Vision Pro'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Mobile AR',
      description: 'Smartphone-based augmented reality that uses the device camera and sensors to place digital objects in the real world.',
      icon: <Smartphone className="h-8 w-8 text-indigo-600" />,
      examples: ['ARKit (iOS)', 'ARCore (Android)', 'Snapchat AR', 'Instagram AR Effects'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Spatial Computing',
      description: 'Computing paradigm that uses the physical space around us as a medium for human-computer interaction.',
      icon: <Laptop className="h-8 w-8 text-indigo-600" />,
      examples: ['Windows Mixed Reality', 'Unity MARS', 'Unreal Engine XR', 'Niantic Lightship'],
      color: 'from-purple-500 to-violet-600'
    },
    {
      name: 'Computer Vision',
      description: 'AI systems that enable devices to identify, process, and understand visual data from the real world.',
      icon: <Cpu className="h-8 w-8 text-indigo-600" />,
      examples: ['OpenCV', 'TensorFlow Vision', 'SLAM (Simultaneous Localization and Mapping)', 'Object Recognition'],
      color: 'from-red-500 to-pink-600'
    },
    {
      name: 'Spatial Audio',
      description: 'Sound technologies that create immersive 3D audio experiences that respond to user movement and environment.',
      icon: <Headphones className="h-8 w-8 text-indigo-600" />,
      examples: ['Dolby Atmos', 'Microsoft Spatial Sound', 'Apple Spatial Audio', 'Google Resonance Audio'],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      name: 'Haptic Feedback',
      description: 'Technologies that simulate touch sensations to enhance the feeling of interacting with virtual objects.',
      icon: <Gamepad className="h-8 w-8 text-indigo-600" />,
      examples: ['Ultraleap (formerly Ultrahaptics)', 'HaptX Gloves', 'TeslaSuit', 'bHaptics'],
      color: 'from-teal-500 to-cyan-600'
    },
    {
      name: 'Connectivity',
      description: 'High-speed, low-latency networks that enable real-time data processing for MR applications.',
      icon: <Wifi className="h-8 w-8 text-indigo-600" />,
      examples: ['5G Networks', 'Wi-Fi 6E', 'Edge Computing', 'Cloud Rendering'],
      color: 'from-indigo-500 to-blue-600'
    },
    {
      name: 'Development Platforms',
      description: 'Software frameworks and tools that enable developers to create mixed reality experiences.',
      icon: <Lightbulb className="h-8 w-8 text-indigo-600" />,
      examples: ['Unity', 'Unreal Engine', 'Microsoft Mesh', 'WebXR'],
      color: 'from-pink-500 to-rose-600'
    }
  ];

  const keyFeatures = [
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "Ultra-Low Latency",
      description: "Sub-20ms motion-to-photon latency for seamless real-time interactions",
      metric: "<20ms"
    },
    {
      icon: <Eye className="h-12 w-12 text-blue-500" />,
      title: "Precision Tracking",
      description: "6DOF tracking with millimeter-level accuracy for precise spatial computing",
      metric: "±1mm"
    },
    {
      icon: <Brain className="h-12 w-12 text-purple-500" />,
      title: "AI Processing",
      description: "Real-time AI inference for object recognition and scene understanding",
      metric: "30 FPS"
    },
    {
      icon: <Layers className="h-12 w-12 text-green-500" />,
      title: "Multi-Layer Rendering",
      description: "Advanced occlusion and depth rendering for realistic mixed reality",
      metric: "8K per eye"
    }
  ];

  return (
    <div className="bg-white pt-16">
      <PageHeader 
        title="Mixed Reality Technology" 
        description="The hardware and software powering the Mixed Reality revolution"
        image="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      
      {/* Key Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cutting-Edge Performance Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the technical excellence that powers next-generation Mixed Reality applications
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <motion.div 
                  className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  {feature.metric}
                </div>
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
      </section>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Technologies in Mixed Reality</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the fundamental technologies that make Mixed Reality experiences possible
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div 
              key={index} 
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-start border border-gray-100 relative overflow-hidden"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            >
              {/* Background gradient */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />
              
              {/* Floating particles */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              />
              
              <motion.div 
                className="mb-6 p-3 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl group-hover:from-indigo-200 group-hover:to-purple-200 transition-all duration-300"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                }}
                transition={{ duration: 0.6 }}
              >
                {React.cloneElement(tech.icon as React.ReactElement, {
                  className: "h-8 w-8 text-indigo-600 group-hover:text-purple-600 transition-colors duration-300"
                })}
              </motion.div>
              
              <motion.h3 
                className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                {tech.name}
              </motion.h3>
              
              <motion.p 
                className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {tech.description}
              </motion.p>
              
              <motion.div 
                className="mt-auto w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <motion.div
                    className="w-2 h-2 bg-indigo-500 rounded-full mr-2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Key Examples:
                </h4>
                <ul className="space-y-2">
                  {tech.examples.map((example, idx) => (
                    <motion.li 
                      key={idx}
                      className="text-sm text-gray-600 flex items-center group-hover:text-gray-700 transition-colors duration-300"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 + idx * 0.05 }}
                      whileHover={{ x: 5, color: "#4f46e5" }}
                    >
                      <motion.div
                        className="w-1 h-1 bg-indigo-400 rounded-full mr-3 flex-shrink-0"
                        whileHover={{ scale: 1.5 }}
                      />
                      {example}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              {/* Hover effect border */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-200 rounded-2xl transition-colors duration-300"
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
              <h3 className="text-3xl font-bold mb-4">Ready to Build with Mixed Reality?</h3>
              <p className="text-xl mb-8 opacity-90">
                Explore our comprehensive development tools and start creating immersive experiences today
              </p>
              <motion.button
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Building Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologyPage;
