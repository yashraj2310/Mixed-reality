import React from 'react';
import { Building2 } from 'lucide-react';
import ApplicationDetail from '../../components/ApplicationDetail';

const ArchitecturePage: React.FC = () => {
  const application = {
    title: "Architecture & Real Estate",
    icon: <Building2 className="h-8 w-8 text-indigo-600" />,
    mainImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    overview: "Mixed Reality is transforming architecture and real estate by enabling immersive visualization of unbuilt structures, interactive design reviews, and virtual property tours. These technologies help architects communicate designs more effectively, allow clients to experience spaces before construction begins, and give potential buyers the ability to explore properties remotely with unprecedented realism and interactivity.",
    keyFeatures: [
      "Virtual Property Tours of unbuilt or remote properties",
      "Architectural Visualization with interactive 3D models at actual scale",
      "Real-time design modifications during client presentations",
      "Collaborative design reviews with remote stakeholders",
      "On-site construction visualization showing completed structures in context"
    ],
    sections: [
      {
        title: "Design Visualization and Client Presentations",
        content: "Mixed Reality transforms how architects present designs to clients by replacing static renderings with interactive 3D experiences. Using MR headsets, clients can walk through virtual buildings at actual scale, experiencing spatial relationships and design details in a way that 2D plans or even 3D models on screens cannot convey. This leads to better client understanding, more informed feedback, and fewer expensive design changes later in the process.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Virtual Property Tours",
        content: "For real estate professionals, Mixed Reality enables compelling virtual property tours that go beyond traditional photos or videos. Potential buyers can explore properties remotely, walking through spaces at their own pace and even visualizing different furniture arrangements or design options. For properties still under construction, MR can show how the finished space will look, helping secure pre-construction sales and reducing marketing costs.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Collaborative Design and Planning",
        content: "Mixed Reality facilitates more effective collaboration among architecture and construction teams. During design reviews, team members can gather around a virtual model, pointing out issues and suggesting changes that everyone can see in 3D space. For urban planning, MR allows stakeholders to visualize how new developments will impact existing neighborhoods, helping make more informed decisions about zoning and public spaces.",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Construction Site Visualization",
        content: "On construction sites, Mixed Reality helps bridge the gap between plans and physical implementation. Workers wearing MR headsets can see where components should be installed, verify that work matches design specifications, and identify potential conflicts before they become costly problems. Project managers can visualize construction progress against schedules and budgets, improving project oversight and coordination.",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    caseStudies: [
      {
        title: "Revolutionizing Client Presentations",
        company: "Modern Design Architects",
        description: "Implemented MR design presentations, reducing client revision requests by 40% and shortening the design approval process by 3 weeks on average.",
        image: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Enhancing Pre-Construction Sales",
        company: "Urban Development Group",
        description: "Created MR experiences for unbuilt luxury condominiums, achieving 75% pre-construction sales compared to historical average of 40%.",
        image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Improving Construction Accuracy",
        company: "Precision Builders",
        description: "Deployed MR construction guidance system that reduced installation errors by 65% and decreased rework costs by $350,000 on a major commercial project.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    technologies: [
      "BIM Integration",
      "Photorealistic Rendering",
      "Spatial Design Tools",
      "Virtual Staging",
      "Construction Sequencing",
      "Measurement Tools",
      "Collaborative Annotation"
    ]
  };

  return <ApplicationDetail {...application} />;
};

export default ArchitecturePage;