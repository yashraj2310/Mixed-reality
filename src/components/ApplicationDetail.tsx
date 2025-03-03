import React from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CaseStudy {
  title: string;
  company: string;
  description: string;
  image: string;
}

interface DetailSection {
  title: string;
  content: string;
  image?: string;
}

interface ApplicationDetailProps {
  title: string;
  icon: React.ReactNode;
  mainImage: string;
  overview: string;
  keyFeatures: string[];
  sections: DetailSection[];
  caseStudies: CaseStudy[];
  technologies: string[];
}

const ApplicationDetail: React.FC<ApplicationDetailProps> = ({
  title,
  icon,
  mainImage,
  overview,
  keyFeatures,
  sections,
  caseStudies,
  technologies
}) => {
  return (
    <div className="bg-white pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link to="/applications" className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all applications
          </Link>
        </div>
        
        <div className="flex items-center mb-8">
          <div className="mr-4 p-2 bg-indigo-100 rounded-lg">
            {icon}
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        </div>
        
        <div className="mb-16 overflow-hidden rounded-xl">
          <img 
            src={mainImage} 
            alt={title} 
            className="w-full h-96 object-cover"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-lg text-gray-600 mb-8">{overview}</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
            <div className="space-y-4 mb-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-indigo-500" aria-hidden="true" />
                  </div>
                  <p className="ml-3 text-base leading-7 text-gray-600">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Related Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {sections.map((section, index) => (
          <div key={index} className={`mb-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex gap-12`}>
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
              <p className="text-lg text-gray-600">{section.content}</p>
            </div>
            {section.image && (
              <div className="lg:w-1/2 mt-6 lg:mt-0">
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="rounded-lg w-full h-80 object-cover"
                />
              </div>
            )}
          </div>
        ))}
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm font-medium text-indigo-600">{study.company}</p>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">{study.title}</h3>
                  <p className="mt-3 text-base text-gray-500">{study.description}</p>
                  <div className="mt-6">
                    <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium">
                      Read case study
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetail;