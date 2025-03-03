import React from 'react';
import { GraduationCap } from 'lucide-react';
import ApplicationDetail from '../../components/ApplicationDetail';

const EducationPage: React.FC = () => {
  const application = {
    title: "Education & Training",
    icon: <GraduationCap className="h-8 w-8 text-indigo-600" />,
    mainImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    overview: "Mixed Reality is transforming education by creating immersive, interactive learning environments that engage students in ways traditional methods cannot. From K-12 classrooms to university settings and professional training programs, MR enables learners to interact with complex concepts in 3D space, conduct virtual experiments, and develop practical skills in safe, controlled environments.",
    keyFeatures: [
      "Immersive Learning with interactive historical events and scientific phenomena",
      "Virtual laboratories for safe experimentation without real-world risks or resource constraints",
      "Technical Training for complex equipment operation and maintenance",
      "Spatial concept visualization for abstract mathematical and scientific principles",
      "Collaborative learning environments where students can interact with shared 3D content"
    ],
    sections: [
      {
        title: "K-12 Education",
        content: "Mixed Reality brings subjects to life in K-12 classrooms by allowing students to explore historical sites, dissect virtual organisms, or manipulate molecular structures. Rather than reading about ancient Rome, students can walk through a virtual reconstruction of the Forum. Instead of looking at 2D diagrams of cell structures, they can explore an interactive 3D cell model. These experiences create emotional connections to learning material, improving engagement and retention.",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Higher Education",
        content: "Universities are implementing Mixed Reality to enhance learning in fields ranging from architecture to zoology. Engineering students can visualize complex mechanical systems in 3D space. Medical students can practice procedures on virtual patients. Art history students can examine masterpieces in virtual museums. These applications not only improve comprehension but also prepare students for professional environments where MR technologies are increasingly common.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Professional and Technical Training",
        content: "Mixed Reality provides safe, cost-effective training for high-risk or expensive procedures. Maintenance technicians can practice repairing complex equipment with virtual guidance. Healthcare professionals can simulate emergency scenarios. Military personnel can train for dangerous missions. These applications reduce training costs, eliminate safety risks, and allow for unlimited repetition without consuming physical resources.",
        image: "https://images.unsplash.com/photo-1581092921461-7d65ca45393a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Special Education and Accessibility",
        content: "Mixed Reality offers unique benefits for students with special educational needs. For those with attention disorders, immersive environments can reduce distractions. For students with physical disabilities, MR can provide experiences that might otherwise be inaccessible. Visual learners benefit from spatial representations, while kinesthetic learners engage through virtual manipulation of objects. These adaptable experiences help create more inclusive educational environments.",
        image: "https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    caseStudies: [
      {
        title: "Reimagining Science Education",
        company: "Smithsonian Learning Lab",
        description: "Developed MR science curriculum that increased student test scores by 23% and doubled self-reported interest in STEM subjects.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Industrial Maintenance Training",
        company: "Global Manufacturing Corp",
        description: "Implemented MR training for complex equipment maintenance, reducing training time by 40% and improving first-time repair success by 28%.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Language Learning Immersion",
        company: "Linguistic Horizons",
        description: "Created virtual cultural immersion experiences for language learners, achieving 35% faster vocabulary acquisition compared to traditional methods.",
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    technologies: [
      "Educational Content Libraries",
      "Virtual Lab Simulations",
      "Interactive 3D Models",
      "Collaborative Learning Platforms",
      "Assessment Tools",
      "Adaptive Learning Systems",
      "Classroom Management Software"
    ]
  };

  return <ApplicationDetail {...application} />;
};

export default EducationPage;