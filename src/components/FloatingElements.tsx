import React from 'react';
import { motion } from 'framer-motion';
import { Cube, Zap, Eye, Cpu, Wifi, Headphones } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const elements = [
    { Icon: Cube, delay: 0, x: 100, y: 50 },
    { Icon: Zap, delay: 0.5, x: -80, y: 100 },
    { Icon: Eye, delay: 1, x: 150, y: -50 },
    { Icon: Cpu, delay: 1.5, x: -120, y: -80 },
    { Icon: Wifi, delay: 2, x: 80, y: 120 },
    { Icon: Headphones, delay: 2.5, x: -50, y: 80 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-indigo-300/20"
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [0, x, x * 1.5],
            y: [0, y, y * 1.5],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          style={{
            left: '50%',
            top: '50%',
          }}
        >
          <Icon size={40} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;