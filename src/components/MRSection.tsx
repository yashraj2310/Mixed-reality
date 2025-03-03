import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
  path: string;
}

interface MRSectionProps {
  application: Feature;
}

const MRSection: React.FC<MRSectionProps> = ({ application }) => {
  return (
    <div id="applications" className="mb-24 overflow-hidden rounded-lg bg-white shadow">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="px-6 py-8 sm:px-8 lg:py-12">
          <div className="flex items-center">
            {application.icon}
            <h3 className="ml-3 text-2xl font-bold leading-8 text-gray-900">{application.title}</h3>
          </div>
          <p className="mt-6 text-base leading-7 text-gray-600">{application.description}</p>
          <div className="mt-8">
            <div className="space-y-4">
              {application.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-indigo-500" aria-hidden="true" />
                  </div>
                  <p className="ml-3 text-base leading-7 text-gray-600">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <Link
              to={application.path}
              className="inline-flex items-center text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Learn more about {application.title}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="relative h-64 lg:h-auto">
          <img
            src={application.image}
            alt={application.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r"></div>
          <div className="absolute bottom-0 left-0 p-6 lg:hidden">
            <h3 className="text-xl font-bold text-white">{application.title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MRSection;