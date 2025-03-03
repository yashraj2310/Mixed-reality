import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { mrApplications } from '../App';

const ApplicationsPage: React.FC = () => {
  return (
    <div className="bg-white pt-16">
      <PageHeader 
        title="Mixed Reality Applications" 
        description="Explore how Mixed Reality is transforming industries across the globe"
        image="https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {mrApplications.map((app) => (
            <div key={app.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={app.image}
                  alt={app.title}
                  className="h-64 w-full object-cover object-center group-hover:opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-white/90 rounded-full">
                      {app.icon}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    <Link to={app.path}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {app.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">{app.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicationsPage;