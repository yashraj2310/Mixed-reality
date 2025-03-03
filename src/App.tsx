import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Menu, X, ChevronRight, Laptop, Stethoscope, GraduationCap, Factory, ShoppingBag, Shield, Gamepad2, Building2, Users, Car, Landmark } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ApplicationsPage from './pages/ApplicationsPage';
import TechnologyPage from './pages/TechnologyPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HealthcarePage from './pages/applications/HealthcarePage';
import EducationPage from './pages/applications/EducationPage';
import ManufacturingPage from './pages/applications/ManufacturingPage';
import RetailPage from './pages/applications/RetailPage';
import MilitaryPage from './pages/applications/MilitaryPage';
import EntertainmentPage from './pages/applications/EntertainmentPage';
import ArchitecturePage from './pages/applications/ArchitecturePage';
import WorkplacePage from './pages/applications/WorkplacePage';
import AutomotivePage from './pages/applications/AutomotivePage';
import TourismPage from './pages/applications/TourismPage';

export const mrApplications = [
  {
    id: 1,
    title: "Healthcare & Medical Training",
    description: "Mixed Reality is revolutionizing healthcare by enabling surgical simulations, 3D anatomy models for medical education, and enhanced remote consultations where doctors can visualize patient data in real-time.",
    icon: <Stethoscope className="h-8 w-8 text-indigo-600" />,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Surgical Simulations for practice procedures",
      "Medical Education with interactive 3D anatomy models",
      "Remote Consultations with 3D visualization"
    ],
    path: "/applications/healthcare"
  },
  {
    id: 2,
    title: "Education & Training",
    description: "MR creates immersive learning environments where students can interact with historical events, conduct virtual laboratory experiments, and visualize complex concepts in 3D space.",
    icon: <GraduationCap className="h-8 w-8 text-indigo-600" />,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Immersive Learning with interactive historical events",
      "Virtual laboratories for safe experimentation",
      "Technical Training without real-world risks"
    ],
    path: "/applications/education"
  },
  {
    id: 3,
    title: "Manufacturing & Engineering",
    description: "Engineers use MR for prototyping and design, creating and modifying 3D models before production. Workers receive guided assembly instructions overlaid directly on equipment.",
    icon: <Factory className="h-8 w-8 text-indigo-600" />,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Prototyping & Design before physical production",
      "Guided Assembly with real-time digital instructions",
      "Maintenance support with visual overlays"
    ],
    path: "/applications/manufacturing"
  },
  {
    id: 4,
    title: "Retail & E-commerce",
    description: "MR enhances shopping experiences with virtual try-ons for clothing, glasses, and makeup. Customers can also place virtual furniture in their real-world spaces before purchasing.",
    icon: <ShoppingBag className="h-8 w-8 text-indigo-600" />,
    image: "https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Virtual Try-Ons for clothing and accessories",
      "Interior Design with virtual furniture placement",
      "Enhanced product visualization"
    ],
    path: "/applications/retail"
  },
  {
    id: 5,
    title: "Military & Defense",
    description: "Military applications include battlefield simulations for training and enhanced situational awareness by overlaying real-time data onto a soldier's field of view.",
    icon: <Shield className="h-8 w-8 text-indigo-600" />,
    image: "https://images.unsplash.com/photo-1542451313056-b7c8e626645f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Battlefield Simulation for realistic training",
      "Situational Awareness with real-time data overlays",
      "Strategic planning and coordination"
    ],
    path: "/applications/military"
  },
  {
    id: 6,
    title: "Entertainment & Gaming",
    description: "MR creates immersive gaming experiences where players interact with both real-world objects and virtual characters, and enhances live performances with interactive digital effects.",
    icon: <Gamepad2 className="h-8 w-8 text-indigo-600" />,
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Immersive Gaming with real-world interaction",
      "Enhanced Live Performances with digital effects",
      "Interactive storytelling experiences"
    ],
    path: "/applications/entertainment"
  },
  {
    id: 7,
    title: "Architecture & Real Estate",
    description: "Architects and real estate professionals use MR for virtual property tours of unbuilt homes and interactive 3D model presentations for clients.",
    icon: <Building2 className="h-8 w-8 text-indigo-600" />,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Virtual Property Tours of unbuilt properties",
      "Architectural Visualization with interactive 3D models",
      "Real-time design modifications"
    ],
    path: "/applications/architecture"
  },
  {
    id: 8,
    title: "Workplace Collaboration",
    description: "Teams use MR for enhanced remote meetings with 3D data visualization, interactive diagrams, and holograms in virtual conference rooms.",
    icon: <Users className="h-8 w-8 text-indigo-600" />,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Remote Meetings with 3D data interaction",
      "Project Planning with enhanced visualization",
      "Collaborative design and problem-solving"
    ],
    path: "/applications/workplace"
  },
  {
    id: 9,
    title: "Automotive Industry",
    description: "Car manufacturers use MR for vehicle design prototyping and developing driver assistance systems with real-time navigation overlays on windshields.",
    icon: <Car className="h-8 w-8 text-indigo-600" />,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Vehicle Design with 3D prototyping",
      "Driver Assistance with navigation overlays",
      "Maintenance training and support"
    ],
    path: "/applications/automotive"
  },
  {
    id: 10,
    title: "Tourism & Cultural Heritage",
    description: "MR enhances tourism with historical reconstructions that show ancient ruins as they once were and creates interactive museum experiences.",
    icon: <Landmark className="h-8 w-8 text-indigo-600" />,
    image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Historical Reconstructions of ancient sites",
      "Interactive Museums with enhanced exhibits",
      "Guided tours with contextual information"
    ],
    path: "/applications/tourism"
  }
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/applications" element={<ApplicationsPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Application subpages */}
        <Route path="/applications/healthcare" element={<HealthcarePage />} />
        <Route path="/applications/education" element={<EducationPage />} />
        <Route path="/applications/manufacturing" element={<ManufacturingPage />} />
        <Route path="/applications/retail" element={<RetailPage />} />
        <Route path="/applications/military" element={<MilitaryPage />} />
        <Route path="/applications/entertainment" element={<EntertainmentPage />} />
        <Route path="/applications/architecture" element={<ArchitecturePage />} />
        <Route path="/applications/workplace" element={<WorkplacePage />} />
        <Route path="/applications/automotive" element={<AutomotivePage />} />
        <Route path="/applications/tourism" element={<TourismPage />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;