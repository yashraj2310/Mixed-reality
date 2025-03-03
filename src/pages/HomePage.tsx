import React from 'react';
import Hero from '../components/Hero';
import MRSection from '../components/MRSection';
import { mrApplications } from '../App';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Mixed Reality Applications</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Transforming Industries Through Mixed Reality
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Mixed Reality combines elements of both Augmented Reality (AR) and Virtual Reality (VR), 
              allowing digital and physical objects to interact in real time. Explore how MR is revolutionizing 
              various industries.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-7xl">
            {mrApplications.map((application) => (
              <MRSection key={application.id} application={application} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;