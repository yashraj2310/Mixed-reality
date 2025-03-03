import React from 'react';
import { Users } from 'lucide-react';
import ApplicationDetail from '../../components/ApplicationDetail';

const WorkplacePage: React.FC = () => {
  const application = {
    title: "Workplace Collaboration",
    icon: <Users className="h-8 w-8 text-indigo-600" />,
    mainImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    overview: "Mixed Reality is transforming workplace collaboration by creating immersive virtual environments where remote teams can interact with shared content and each other in ways that feel natural and intuitive. From enhanced video meetings with 3D data visualization to virtual workspaces where colleagues can collaborate regardless of physical location, MR technologies are helping organizations overcome the limitations of traditional remote work tools.",
    keyFeatures: [
      "Remote Meetings with 3D data visualization and spatial interaction",
      "Project Planning with enhanced visualization and collaborative modeling",
      "Collaborative design and problem-solving in shared virtual spaces",
      "Training and onboarding with interactive guidance",
      "Virtual workspaces that simulate physical office environments"
    ],
    sections: [
      {
        title: "Enhanced Remote Meetings",
        content: "Mixed Reality elevates remote meetings beyond flat video calls by creating shared virtual spaces where participants appear as 3D avatars or volumetric captures. Team members can make eye contact, use natural gestures, and interact with shared 3D content as if they were in the same room. This spatial dimension makes communication more natural and effective, reducing the fatigue and disconnection often experienced with traditional video conferencing.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Collaborative Data Visualization",
        content: "Complex data becomes more accessible and actionable when visualized in 3D space using Mixed Reality. Teams can gather around virtual data models, examining trends from different angles, zooming into details, and manipulating variables to see real-time effects. This spatial approach to data analysis helps teams identify patterns and insights that might be missed in traditional 2D presentations, leading to better-informed decisions.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Virtual Workspaces",
        content: "Mixed Reality enables the creation of persistent virtual workspaces that simulate the benefits of physical offices for distributed teams. Employees can have personalized virtual desks surrounded by their projects and resources, move between virtual meeting rooms, and engage in spontaneous interactions with colleagues. These spaces provide the structure and social connection of physical offices while eliminating geographic limitations.",
        image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Remote Expert Assistance",
        content: "When on-site workers need expert guidance, Mixed Reality allows remote specialists to see what the worker sees and provide visual instructions overlaid directly on the worker's view. This capability is valuable across industries, from manufacturing and maintenance to healthcare and field service. Remote experts can draw annotations, place 3D models, or highlight components in the worker's field of view, dramatically improving the effectiveness of remote support.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    caseStudies: [
      {
        title: "Transforming Global Collaboration",
        company: "International Consulting Group",
        description: "Implemented MR collaboration platform for global teams, reducing travel costs by $2.3M annually while improving project completion times by 22%.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Enhancing Product Design Reviews",
        company: "Innovation Design Studios",
        description: "Adopted MR for collaborative design reviews, cutting iteration cycles by 40% and enabling seamless collaboration between teams in three different countries.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Revolutionizing Field Service Support",
        company: "Global Maintenance Solutions",
        description: "Deployed MR remote expert system for field technicians, increasing first-time fix rates by 35% and reducing average resolution time from 3 hours to 45 minutes.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    technologies: [
      "Spatial Collaboration Platforms",
      "3D Data Visualization Tools",
      "Avatar Systems",
      "Shared Digital Workspaces",
      "Remote Annotation Tools",
      "Spatial Audio",
      "Presence Technology"
    ]
  };

  return <ApplicationDetail {...application} />;
};

export default WorkplacePage;