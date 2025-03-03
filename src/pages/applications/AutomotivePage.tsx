import React from 'react';
import { Car } from 'lucide-react';
import ApplicationDetail from '../../components/ApplicationDetail';

const AutomotivePage: React.FC = () => {
  const application = {
    title: "Automotive Industry",
    icon: <Car className="h-8 w-8 text-indigo-600" />,
    mainImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    overview: "Mixed Reality is revolutionizing the automotive industry across the entire value chain, from design and manufacturing to sales and driver experience. MR technologies enable more efficient vehicle development, enhanced manufacturing processes, immersive customer experiences, and advanced driver assistance systems that improve safety and convenience. As vehicles become increasingly connected, Mixed Reality is playing a crucial role in the future of automotive innovation.",
    keyFeatures: [
      "Vehicle Design with immersive 3D prototyping and visualization",
      "Driver Assistance with navigation and safety information overlays",
      "Manufacturing support with guided assembly and quality control",
      "Maintenance training and technical support for service technicians",
      "Enhanced customer experiences for vehicle shopping and customization"
    ],
    sections: [
      {
        title: "Design and Engineering",
        content: "Mixed Reality transforms automotive design by allowing designers and engineers to visualize and interact with full-scale virtual vehicle models. Design teams can walk around virtual prototypes, look inside engine compartments, and evaluate ergonomics without building physical mockups. This accelerates the design process, reduces costs, and enables more iterations before committing to production tooling. MR also facilitates collaboration between global design teams working on the same virtual models.",
        image: "https://images.unsplash.com/photo-1581092160607-ee22731c9c8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Manufacturing and Assembly",
        content: "On the factory floor, Mixed Reality provides workers with step-by-step visual guidance for complex assembly tasks. Instructions appear directly in the worker's field of view, highlighting the correct components and assembly locations. This reduces errors, shortens training time, and improves quality. For quality control, MR applications can overlay design specifications onto physical components to quickly identify deviations or defects.",
        image: "https://images.unsplash.com/photo-1537041373723-5a3677d05ecf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Sales and Customer Experience",
        content: "Mixed Reality is transforming the car buying experience by allowing customers to visualize vehicles with different options and configurations before they're built. Shoppers can change colors, wheels, and interior options in real-time, or even place virtual vehicles in their own driveways to see how they look. For dealerships, this reduces the need to stock every possible configuration while providing customers with a more engaging and informative shopping experience.",
        image: "https://images.unsplash.com/photo-1560641764-3c5c63ff63ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Driver Assistance and In-Car Experience",
        content: "Mixed Reality is enhancing the driving experience through heads-up displays (HUDs) and augmented windshields that overlay navigation directions, safety alerts, and vehicle information directly in the driver's line of sight. This allows drivers to access important information without looking away from the road. Future developments will likely include more immersive passenger entertainment experiences and enhanced visualization of vehicle surroundings for improved safety.",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    caseStudies: [
      {
        title: "Accelerating Vehicle Design",
        company: "European Luxury Automaker",
        description: "Implemented MR design review process that reduced development time by 8 months and saved approximately €3.5 million in prototype costs.",
        image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Enhancing Assembly Efficiency",
        company: "Global Auto Manufacturing Corp",
        description: "Deployed MR assembly guidance system that reduced errors by 38%, decreased training time by 50%, and improved overall production efficiency by 15%.",
        image: "https://images.unsplash.com/photo-1486684228390-9e13eecef9c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Revolutionizing the Showroom Experience",
        company: "Premium Vehicle Retailer",
        description: "Created MR vehicle customization experience that increased option sales by 32% and improved customer satisfaction scores by 28 points.",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    technologies: [
      "CAD Integration",
      "Heads-Up Display Systems",
      "Virtual Showroom Platforms",
      "Assembly Guidance Software",
      "Vehicle Customization Tools",
      "Driver Assistance Overlays",
      "Maintenance Visualization"
    ]
  };

  return <ApplicationDetail {...application} />;
};

export default AutomotivePage;