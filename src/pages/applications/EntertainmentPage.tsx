import React from 'react';
import { Gamepad2 } from 'lucide-react';
import ApplicationDetail from '../../components/ApplicationDetail';

const EntertainmentPage: React.FC = () => {
  const application = {
    title: "Entertainment & Gaming",
    icon: <Gamepad2 className="h-8 w-8 text-indigo-600" />,
    mainImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    overview: "Mixed Reality is revolutionizing entertainment and gaming by blending digital content with the physical world to create immersive, interactive experiences. From games that transform living rooms into adventure landscapes to enhanced live performances with digital effects, MR is opening new creative possibilities for entertainment creators and delivering unprecedented levels of engagement for audiences.",
    keyFeatures: [
      "Immersive Gaming with real-world interaction and physical movement",
      "Enhanced Live Performances with digital effects and interactive elements",
      "Interactive storytelling experiences that respond to user actions and environments",
      "Location-based entertainment that transforms physical spaces",
      "Social experiences that connect remote participants in shared virtual spaces"
    ],
    sections: [
      {
        title: "Mixed Reality Gaming",
        content: "Mixed Reality gaming transforms physical spaces into game environments, allowing players to interact with virtual objects and characters that appear to exist in the real world. Unlike VR games that replace reality entirely, MR games incorporate real-world elements, encouraging physical movement and social interaction. Players might defend their living room from alien invaders, solve puzzles using real-world objects, or transform their neighborhood into a fantasy adventure landscape.",
        image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Live Entertainment and Performances",
        content: "Mixed Reality is enhancing live performances with spectacular visual effects that audiences can experience without special equipment. Concerts feature virtual performers or interactive visual elements that respond to music and crowd energy. Theater productions incorporate digital scenery and characters that interact with physical actors. Sports broadcasts overlay statistics and visual effects that enhance viewer understanding and excitement.",
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Interactive Storytelling",
        content: "Mixed Reality enables new forms of interactive storytelling where narratives unfold in physical spaces, responding to user actions and environmental factors. These experiences might guide users through historical events recreated in modern locations, tell personalized stories based on user choices, or create mystery adventures where clues are hidden in both digital and physical realms. The result is deeply engaging narrative experiences with unprecedented levels of immersion.",
        image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Location-Based Entertainment",
        content: "Purpose-built MR entertainment venues are creating destination experiences that combine physical sets with digital overlays. These attractions might transform entire buildings into spacecraft, fantasy castles, or historical settings. Visitors wear MR headsets that add virtual elements to carefully designed physical spaces, creating multi-sensory adventures impossible to replicate at home. These experiences often incorporate social elements, allowing groups to collaborate and compete.",
        image: "https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    caseStudies: [
      {
        title: "Transforming Home Gaming",
        company: "Immersive Play Studios",
        description: "Launched MR adventure game that turns living rooms into jungle expeditions, achieving 2 million downloads and 85% positive reviews for its innovative gameplay.",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Revolutionizing Concert Experiences",
        company: "Digital Stage Productions",
        description: "Created MR concert platform that enables virtual performers alongside physical artists, increasing ticket sales by 40% and social media engagement by 300%.",
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Immersive Theme Park Attractions",
        company: "Adventure World Entertainment",
        description: "Developed MR-enhanced theme park attraction combining physical sets with digital overlays, resulting in 90-minute average wait times and 95% visitor satisfaction.",
        image: "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    technologies: [
      "Spatial Mapping",
      "Motion Tracking",
      "Gesture Recognition",
      "Environmental Understanding",
      "Multi-user Synchronization",
      "Audio Spatialization",
      "Real-time Visual Effects"
    ]
  };

  return <ApplicationDetail {...application} />;
};

export default EntertainmentPage;