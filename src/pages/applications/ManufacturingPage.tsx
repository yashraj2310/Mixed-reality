import React from 'react';
import { Factory } from 'lucide-react';
import ApplicationDetail from '../../components/ApplicationDetail';

const ManufacturingPage: React.FC = () => {
  const application = {
    title: "Manufacturing & Engineering",
    icon: <Factory className="h-8 w-8 text-indigo-600" />,
    mainImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    overview: "Mixed Reality is revolutionizing manufacturing and engineering processes by enabling more efficient design, assembly, maintenance, and quality control. By overlaying digital information onto physical equipment and environments, MR helps workers complete complex tasks with greater accuracy and speed while reducing errors and training time. From the initial design phase through production and maintenance, MR applications are transforming industrial workflows.",
    keyFeatures: [
      "Prototyping & Design visualization before physical production begins",
      "Guided Assembly with real-time digital instructions overlaid on physical components",
      "Maintenance support with visual overlays showing repair procedures",
      "Remote expert assistance for complex troubleshooting",
      "Training simulations for equipment operation and maintenance"
    ],
    sections: [
      {
        title: "Design and Prototyping",
        content: "Mixed Reality transforms the design process by allowing engineers to create and manipulate 3D models in physical space. Teams can visualize full-scale prototypes, walk around them, look inside them, and make modifications without building physical mockups. This accelerates the design cycle, reduces material waste, and enables more collaborative review processes where stakeholders can provide feedback on virtual prototypes before committing to production.",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Assembly and Production",
        content: "On the factory floor, Mixed Reality provides workers with step-by-step visual guidance overlaid directly on their work area. Assembly instructions, part information, and quality specifications appear in the worker's field of view, eliminating the need to consult manuals or computer screens. This hands-free guidance reduces errors by up to 90%, increases assembly speed, and significantly shortens training time for new workers.",
        image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Maintenance and Repair",
        content: "Maintaining complex industrial equipment becomes more efficient with Mixed Reality. Technicians wearing MR headsets can see repair procedures overlaid directly on the machinery they're servicing. Critical components are highlighted, tool requirements are displayed, and step-by-step instructions guide the entire process. For particularly complex issues, remote experts can see what the technician sees and provide real-time guidance by placing virtual annotations in the technician's field of view.",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Quality Control and Inspection",
        content: "Mixed Reality enhances quality control processes by providing inspectors with precise visual guidance. MR applications can highlight areas requiring inspection, overlay tolerance specifications directly on parts, and automatically document findings. Computer vision algorithms can work alongside human inspectors to detect defects that might be missed by the human eye. This combination of human expertise and digital assistance results in higher quality products with fewer defects reaching customers.",
        image: "https://images.unsplash.com/photo-1581092160607-ee22731c9c8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    caseStudies: [
      {
        title: "Accelerating Aircraft Assembly",
        company: "Aerospace Innovations",
        description: "Implemented MR-guided assembly for aircraft wiring harnesses, reducing assembly time by 30% and wiring errors by 90%.",
        image: "https://images.unsplash.com/photo-1559297434-fae8a1916a79?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Streamlining Automotive Design",
        company: "Global Motors",
        description: "Adopted MR for design reviews, cutting prototype iterations by 60% and reducing time-to-market by 8 months for new vehicle models.",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Enhancing Field Service Efficiency",
        company: "Industrial Equipment Corp",
        description: "Equipped field technicians with MR headsets for remote expert assistance, increasing first-time fix rates by 35% and reducing average repair time by 45%.",
        image: "https://images.unsplash.com/photo-1581092160562-3bd89be37f09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    technologies: [
      "CAD Integration",
      "Digital Twin Systems",
      "Work Instruction Platforms",
      "Remote Collaboration Tools",
      "Computer Vision Quality Control",
      "IoT Data Visualization",
      "Spatial Mapping"
    ]
  };

  return <ApplicationDetail {...application} />;
};

export default ManufacturingPage;