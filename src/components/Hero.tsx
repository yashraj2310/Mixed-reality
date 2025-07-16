import React from 'react';
import { ChevronRight, Play, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import FloatingElements from './FloatingElements';

const Hero: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 min-h-screen flex items-center">
      <ParticleBackground />
      <FloatingElements />
      
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2))",
            "linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
            "linear-gradient(225deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))",
            "linear-gradient(315deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2))",
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
        <div className="px-6 lg:px-0 lg:pt-4">
          <motion.div 
            className="mx-auto max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-lg">
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <motion.a 
                  href="#" 
                  className="inline-flex space-x-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span 
                    className="rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-sm font-semibold leading-6 text-white ring-1 ring-inset ring-white/20"
                    animate={{ 
                      boxShadow: [
                        "0 0 20px rgba(99, 102, 241, 0.3)",
                        "0 0 30px rgba(147, 51, 234, 0.4)",
                        "0 0 20px rgba(99, 102, 241, 0.3)",
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="inline w-4 h-4 mr-1" />
                    What's new
                  </motion.span>
                  <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-white/80">
                    <span>Just released in 2025</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronRight className="h-5 w-5 text-white/60" aria-hidden="true" />
                    </motion.div>
                  </span>
                </motion.a>
              </div>
              <motion.h1 
                className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  The Future of Mixed Reality
                </motion.span>
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg leading-8 text-white/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Discover how Mixed Reality is transforming industries by seamlessly blending digital and physical worlds. 
                From healthcare to entertainment, explore the revolutionary applications changing how we work, learn, and play.
              </motion.p>
              <div className="mt-10 flex items-center gap-x-6">
                <motion.a
                  href="#applications"
                  className="group relative rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">
                    <Sparkles className="inline w-4 h-4 mr-2" />
                    Explore Applications
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.a>
                <motion.a 
                  href="#technology" 
                  className="group text-sm font-semibold leading-6 text-white flex items-center"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Play className="w-4 h-4 mr-2 group-hover:text-indigo-400 transition-colors" />
                  Explore Applications
                  <motion.span 
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white/10 backdrop-blur-sm shadow-xl shadow-indigo-600/20 ring-1 ring-white/10 md:-mr-20 lg:-mr-36" aria-hidden="true" />
          <motion.div 
            className="shadow-2xl md:rounded-3xl overflow-hidden"
            whileHover={{ scale: 1.02, rotateY: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))] relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.3))",
                    "linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))",
                    "linear-gradient(225deg, rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.3), rgba(59, 130, 246, 0.3))",
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
              />
              <div
                className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-white/10 opacity-20 ring-1 ring-inset ring-white/20 md:ml-20 lg:ml-36"
                aria-hidden="true"
              />
              <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                  <motion.div 
                    className="w-screen overflow-hidden rounded-tl-xl bg-gray-900/90 backdrop-blur-sm border border-white/10"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <div className="flex bg-gray-800/60 ring-1 ring-white/10">
                      <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                        <motion.div 
                          className="border-b border-r border-b-white/20 border-r-white/10 bg-white/10 px-4 py-2 text-white relative overflow-hidden"
                          whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                          />
                          MixedReality.tsx
                        </motion.div>
                        <div className="border-r border-gray-600/10 px-4 py-2">App.tsx</div>
                      </div>
                    </div>
                    <div className="px-6 pb-14 pt-6">
                      <motion.pre 
                        className="text-[0.8125rem] leading-6 text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                      >
                        <code>
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2, delay: 1.2 }}
                          >
                            {`import { MixedRealityScene } from 'mr-framework';

// Create an immersive MR experience
const MRApplication = () => {
  return (
    <MixedRealityScene>
      <VirtualObject
        position={{ x: 0, y: 1.5, z: -2 }}
        scale={1.0}
        model="brain.glb"
        interactive
        animation="pulse"
      />
      <AnchorPoint worldSpace={true}>
        <Annotation>
          Human Brain - Tap to explore
        </Annotation>
      </AnchorPoint>
      <GestureRecognizer
        onPinch={handleZoom}
        onRotate={handleRotate}
        onTap={handleInteraction}
      />
      <SpatialAudio
        source="ambient-medical.mp3"
        position={{ x: 0, y: 0, z: 0 }}
      />
    </MixedRealityScene>
  );
};`}
                          </motion.span>
                        </code>
                      </motion.pre>
                    </div>
                  </motion.div>
                </div>
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 md:rounded-3xl" aria-hidden="true" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div 
        className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-gray-900 sm:h-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      />
    </div>
  );
};

export default Hero;