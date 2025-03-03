import React from 'react';
import PageHeader from '../components/PageHeader';
import { Glasses, Smartphone, Laptop, Cpu, Wifi, Headphones, Gamepad, Lightbulb } from 'lucide-react';

const TechnologyPage: React.FC = () => {
  const technologies = [
    {
      name: 'MR Headsets',
      description: 'Advanced headsets that combine transparent displays with spatial mapping capabilities to overlay digital content onto the physical world.',
      icon: <Glasses className="h-8 w-8 text-indigo-600" />,
      examples: ['Microsoft HoloLens 2', 'Magic Leap 2', 'Meta Quest Pro', 'Apple Vision Pro']
    },
    {
      name: 'Mobile AR',
      description: 'Smartphone-based augmented reality that uses the device camera and sensors to place digital objects in the real world.',
      icon: <Smartphone className="h-8 w-8 text-indigo-600" />,
      examples: ['ARKit (iOS)', 'ARCore (Android)', 'Snapchat AR', 'Instagram AR Effects']
    },
    {
      name: 'Spatial Computing',
      description: 'Computing paradigm that uses the physical space around us as a medium for human-computer interaction.',
      icon: <Laptop className="h-8 w-8 text-indigo-600" />,
      examples: ['Windows Mixed Reality', 'Unity MARS', 'Unreal Engine XR', 'Niantic Lightship']
    },
    {
      name: 'Computer Vision',
      description: 'AI systems that enable devices to identify, process, and understand visual data from the real world.',
      icon: <Cpu className="h-8 w-8 text-indigo-600" />,
      examples: ['OpenCV', 'TensorFlow Vision', 'SLAM (Simultaneous Localization and Mapping)', 'Object Recognition']
    },
    {
      name: 'Spatial Audio',
      description: 'Sound technologies that create immersive 3D audio experiences that respond to user movement and environment.',
      icon: <Headphones className="h-8 w-8 text-indigo-600" />,
      examples: ['Dolby Atmos', 'Microsoft Spatial Sound', 'Apple Spatial Audio', 'Google Resonance Audio']
    },
    {
      name: 'Haptic Feedback',
      description: 'Technologies that simulate touch sensations to enhance the feeling of interacting with virtual objects.',
      icon: <Gamepad className="h-8 w-8 text-indigo-600" />,
      examples: ['Ultraleap (formerly Ultrahaptics)', 'HaptX Gloves', 'TeslaSuit', 'bHaptics']
    },
    {
      name: 'Connectivity',
      description: 'High-speed, low-latency networks that enable real-time data processing for MR applications.',
      icon: <Wifi className="h-8 w-8 text-indigo-600" />,
      examples: ['5G Networks', 'Wi-Fi 6E', 'Edge Computing', 'Cloud Rendering']
    },
    {
      name: 'Development Platforms',
      description: 'Software frameworks and tools that enable developers to create mixed reality experiences.',
      icon: <Lightbulb className="h-8 w-8 text-indigo-600" />,
      examples: ['Unity', 'Unreal Engine', 'Microsoft Mesh', 'WebXR']
    }
  ];

  return (
    <div className="bg-white pt-16">
      <PageHeader 
        title="Mixed Reality Technology" 
        description="The hardware and software powering the Mixed Reality revolution"
        image="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Key Technologies in Mixed Reality</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-start">
              <div className="mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{tech.name}</h3>
              <p className="text-gray-600 mt-2">{tech.description}</p>
              <ul className="mt-4 list-disc list-inside text-gray-700">
                {tech.examples.map((example, idx) => (
                  <li key={idx}>{example}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
