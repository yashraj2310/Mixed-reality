import React from 'react';
import { Landmark } from 'lucide-react';
import ApplicationDetail from '../../components/ApplicationDetail';

const TourismPage: React.FC = () => {
  const application = {
    title: "Tourism & Cultural Heritage",
    icon: <Landmark className="h-8 w-8 text-indigo-600" />,
    mainImage: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    overview: "Mixed Reality is transforming tourism and cultural heritage experiences by bringing history to life, enhancing visitor engagement, and providing rich contextual information about destinations. From historical reconstructions that show ancient ruins as they once appeared to interactive museum exhibits and personalized guided tours, MR technologies are creating more immersive, educational, and memorable experiences for travelers and cultural enthusiasts.",
    keyFeatures: [
      "Historical Reconstructions showing ancient sites as they appeared in their prime",
      "Interactive Museums with enhanced exhibits and contextual information",
      "Guided tours with personalized content and navigation assistance",
      "Language translation and cultural context for international travelers",
      "Virtual pre-visit experiences for trip planning and accessibility"
    ],
    sections: [
      {
        title: "Historical Site Reconstruction",
        content: "Mixed Reality brings archaeological sites and historical landmarks to life by overlaying reconstructions of how these places appeared in their original state. Visitors to ancient ruins can see walls, roofs, and decorations restored in their field of view, with the ability to toggle between past and present. These visualizations help visitors understand the historical significance of sites and appreciate their original grandeur, creating more meaningful connections to cultural heritage.",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Enhanced Museum Experiences",
        content: "Museums are using Mixed Reality to create more engaging and interactive exhibits. Artifacts in display cases can reveal their stories, showing how they were used and their cultural context. Historical figures can appear as virtual guides, explaining events from their perspective. Art comes alive with animation or additional layers of information about techniques, symbolism, and the artist's process. These enhancements deepen visitor engagement and understanding without altering the physical artifacts.",
        image: "https://images.unsplash.com/photo-1565060169194-19fabf63012c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Personalized Guided Tours",
        content: "Mixed Reality enables personalized guided tours that adapt to each visitor's interests, pace, and knowledge level. Virtual guides can lead visitors through cities, parks, or cultural sites, highlighting points of interest and providing contextual information. These guides can offer different perspectives for different audiences—simplified content for children, detailed historical context for history enthusiasts, or architectural focus for design professionals—all at the same physical location.",
        image: "https://images.unsplash.com/photo-1473163928189-364b2c4e1135?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Cultural Context and Translation",
        content: "For international travelers, Mixed Reality can provide crucial cultural context and language translation. MR applications can translate signs, menus, and information panels in real-time, overlaying the translated text in the visitor's field of view. Beyond simple translation, these applications can explain cultural customs, historical references, and local traditions that might otherwise be missed, helping visitors develop deeper appreciation for the destinations they explore.",
        image: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    caseStudies: [
      {
        title: "Revitalizing Ancient Rome",
        company: "Italian Heritage Foundation",
        description: "Created MR reconstruction of the Roman Forum, increasing visitor engagement time by 45 minutes on average and boosting ticket sales by 30%.",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Transforming Museum Engagement",
        company: "National History Museum",
        description: "Implemented MR exhibits that brought dinosaur fossils to life, resulting in 40% increase in visitor numbers and 28% improvement in educational outcomes for school groups.",
        image: "https://images.unsplash.com/photo-1574217013471-57c7f24448a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Enhancing Urban Tourism",
        company: "City Tourism Board",
        description: "Developed city-wide MR tour system with 50+ points of interest, generating 125,000 downloads in the first year and increasing average tourist stay by 1.5 days.",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    technologies: [
      "Historical Reconstruction",
      "Geolocation Services",
      "Real-time Translation",
      "Cultural Context AI",
      "Interactive Storytelling",
      "Navigation Assistance",
      "Virtual Guides"
    ]
  };

  return <ApplicationDetail {...application} />;
};

export default TourismPage;