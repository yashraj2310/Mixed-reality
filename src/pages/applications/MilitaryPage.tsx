import React from 'react';
import { Shield } from 'lucide-react';
import ApplicationDetail from '../../components/ApplicationDetail';

const MilitaryPage: React.FC = () => {
  const application = {
    title: "Military & Defense",
    icon: <Shield className="h-8 w-8 text-indigo-600" />,
    mainImage: "https://images.unsplash.com/photo-1542451313056-b7c8e626645f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    overview: "Mixed Reality is transforming military operations, training, and strategic planning by providing enhanced situational awareness, immersive training environments, and advanced visualization capabilities. From battlefield simulations to real-time tactical information overlays, MR technologies are helping military personnel prepare for and execute missions more effectively while reducing risks and improving decision-making.",
    keyFeatures: [
      "Battlefield Simulation for realistic combat training in virtual environments",
      "Situational Awareness with real-time data overlays on soldiers' field of view",
      "Strategic planning and coordination using interactive 3D terrain models",
      "Equipment maintenance training with guided visual instructions",
      "Medical training for battlefield trauma care and triage"
    ],
    sections: [
      {
        title: "Training and Simulation",
        content: "Mixed Reality provides immersive, realistic training environments that prepare military personnel for complex scenarios without the logistical challenges and costs of live exercises. Soldiers can practice urban combat, aircraft pilots can simulate emergency procedures, and medics can train for battlefield trauma care. These simulations can be adjusted to represent different terrains, weather conditions, and threat levels, allowing for comprehensive training across a wide range of scenarios.",
        image: "https://images.unsplash.com/photo-1579912437766-7896df6d3cd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Enhanced Situational Awareness",
        content: "On the battlefield, Mixed Reality headsets can overlay critical information directly in a soldier's field of view. This includes navigation guidance, threat indicators, team member locations, and mission objectives. By integrating data from various sensors and intelligence sources, MR systems provide comprehensive situational awareness without requiring soldiers to look away from their surroundings, maintaining tactical focus while accessing crucial information.",
        image: "https://images.unsplash.com/photo-1569242840510-5a9e7a10ae54?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Command and Control",
        content: "For military commanders, Mixed Reality offers powerful tools for strategic planning and operational oversight. Interactive 3D terrain models allow for collaborative mission planning, with team members able to visualize and discuss tactical approaches. During operations, commanders can maintain a real-time 3D view of the battlefield, tracking asset positions and receiving updates on changing conditions to make informed decisions quickly.",
        image: "https://images.unsplash.com/photo-1521493959102-bdd6677fdd81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Maintenance and Logistics",
        content: "Military equipment maintenance benefits significantly from Mixed Reality applications. Technicians can receive step-by-step visual guidance for repair procedures overlaid directly on complex equipment. For logistics operations, MR systems help optimize supply chain management, inventory tracking, and equipment deployment. These applications reduce downtime, improve maintenance accuracy, and ensure critical equipment is operational when needed.",
        image: "https://images.unsplash.com/photo-1517650862521-d580d5348145?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    caseStudies: [
      {
        title: "Advanced Combat Training",
        company: "Defense Systems International",
        description: "Developed immersive combat simulation system that reduced training costs by 60% while improving tactical decision-making scores by 35%.",
        image: "https://images.unsplash.com/photo-1547547668-6a4d2915ee7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Battlefield Medical Response",
        company: "Military Medical Technologies",
        description: "Created MR trauma care training program that improved medic response time by 28% and treatment accuracy by 40% in field conditions.",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Enhanced Aircraft Maintenance",
        company: "Aerospace Defense Corp",
        description: "Implemented MR maintenance system for fighter jets, reducing maintenance time by 35% and improving first-time fix rates by 45%.",
        image: "https://images.unsplash.com/photo-1542522951-0602b237b9f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    technologies: [
      "Tactical Visualization Systems",
      "Battlefield Simulation Platforms",
      "Heads-Up Display Integration",
      "Sensor Data Fusion",
      "Secure Communication Networks",
      "GPS and Positioning Systems",
      "Terrain Mapping"
    ]
  };

  return <ApplicationDetail {...application} />;
};

export default MilitaryPage;