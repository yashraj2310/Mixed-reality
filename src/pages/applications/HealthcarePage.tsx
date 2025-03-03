import React from 'react';
import { Stethoscope } from 'lucide-react';
import ApplicationDetail from '../../components/ApplicationDetail';

const HealthcarePage: React.FC = () => {
  const application = {
    title: "Healthcare & Medical Training",
    icon: <Stethoscope className="h-8 w-8 text-indigo-600" />,
    mainImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    overview: "Mixed Reality is revolutionizing healthcare by enabling medical professionals to visualize complex anatomical structures, practice surgical procedures in a risk-free environment, and enhance patient care through improved diagnostics and treatment planning. From medical education to surgical planning and telemedicine, MR applications are transforming how healthcare is delivered and taught.",
    keyFeatures: [
      "Surgical Simulations that allow surgeons to practice complex procedures in a realistic environment",
      "Medical Education with interactive 3D anatomy models that students can manipulate and explore",
      "Remote Consultations where specialists can visualize patient data in 3D while consulting from anywhere",
      "Rehabilitation programs that gamify physical therapy to improve patient engagement and outcomes",
      "Diagnostic visualization tools that convert 2D medical imaging into interactive 3D models"
    ],
    sections: [
      {
        title: "Surgical Training and Planning",
        content: "Mixed Reality provides surgeons with the ability to practice procedures on virtual patients before performing them in real life. By creating detailed 3D models from patient scans, surgeons can plan complex operations, visualize critical structures, and anticipate potential complications. Studies have shown that MR-based surgical training can reduce procedural errors by up to 40% and decrease operation time by 20%.",
        image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Medical Education",
        content: "Traditional anatomy education relies on textbooks, cadavers, and 2D images. Mixed Reality transforms this experience by allowing students to interact with detailed 3D anatomical models. Students can peel away layers of the human body, observe physiological processes in motion, and understand spatial relationships between structures. This immersive approach has been shown to improve knowledge retention by up to 30% compared to traditional methods.",
        image: "https://images.unsplash.com/photo-1516549655669-df51a1e22fa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Remote Consultations and Telemedicine",
        content: "Mixed Reality enables enhanced telemedicine capabilities by allowing healthcare providers to collaborate remotely while viewing and manipulating the same 3D medical data. Specialists can guide local physicians through procedures by placing virtual annotations directly in the physician's field of view. This technology is particularly valuable for providing expert care to underserved or remote areas where specialist access is limited.",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Patient Education and Consent",
        content: "Explaining complex medical conditions and procedures to patients can be challenging. Mixed Reality provides an intuitive way for healthcare providers to show patients exactly what is happening in their bodies and what a proposed treatment entails. This improved understanding leads to better informed consent, reduced anxiety, and increased patient satisfaction with their care experience.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    caseStudies: [
      {
        title: "Reducing Surgical Complications with MR Planning",
        company: "Cleveland Clinic",
        description: "Implemented MR surgical planning for complex cardiac procedures, resulting in a 35% reduction in complications and 15% shorter hospital stays.",
        image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Accelerating Medical Training",
        company: "Stanford Medical School",
        description: "Integrated MR anatomy lessons into curriculum, reducing learning time by 25% while improving test scores by 18% compared to traditional methods.",
        image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Enhancing Rural Healthcare Access",
        company: "Global Health Initiative",
        description: "Deployed MR telemedicine solutions to connect rural clinics with urban specialists, providing expert consultations to over 5,000 patients annually.",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    technologies: [
      "HoloLens Medical Suite",
      "Surgical Planning Software",
      "3D Anatomical Libraries",
      "Medical Imaging Integration",
      "Haptic Feedback Systems",
      "Telemedicine Platforms",
      "AI Diagnostic Assistance"
    ]
  };

  return <ApplicationDetail {...application} />;
};

export default HealthcarePage;