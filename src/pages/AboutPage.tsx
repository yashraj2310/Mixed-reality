import React from 'react';
import PageHeader from '../components/PageHeader';
import { Users, Award, Clock, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      bio: 'Former lead researcher at MIT Media Lab with over 15 years of experience in spatial computing and mixed reality technologies.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      bio: 'Product visionary who previously led XR initiatives at Google and helped launch their first AR platform.'
    },
    {
      name: 'Aisha Patel',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      bio: 'Full-stack developer specializing in WebXR and spatial computing applications with contributions to major open-source MR frameworks.'
    },
    {
      name: 'David Kim',
      role: 'UX Research Director',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      bio: 'Human-computer interaction specialist focused on creating intuitive and accessible mixed reality experiences for diverse users.'
    }
  ];

  const stats = [
    { name: 'Years in operation', value: '5+', icon: <Clock className="h-6 w-6 text-indigo-600" /> },
    { name: 'Industry partners', value: '50+', icon: <Users className="h-6 w-6 text-indigo-600" /> },
    { name: 'Countries reached', value: '25+', icon: <Globe className="h-6 w-6 text-indigo-600" /> },
    { name: 'Industry awards', value: '12', icon: <Award className="h-6 w-6 text-indigo-600" /> },
  ];

  return (
    <div className="bg-white pt-16">
      <PageHeader 
        title="About MR Hub" 
        description="Pioneering the future of Mixed Reality technology and education"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              At MR Hub, we're dedicated to advancing the field of Mixed Reality by connecting innovators, 
              educating the public, and showcasing groundbreaking applications across industries.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2020 by a team of XR researchers and industry veterans, we've grown into a 
              global community of Mixed Reality enthusiasts, developers, and business leaders.
            </p>
            <p className="text-lg text-gray-600">
              Our platform serves as both an educational resource and a catalyst for collaboration, 
              helping to accelerate the adoption of Mixed Reality technologies worldwide.
            </p>
          </div>
          <div className="relative h-96">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="MR Hub team collaboration" 
              className="absolute inset-0 h-full w-full object-cover rounded-lg"
            />
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Impact</h2>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
                  {stat.icon}
                </div>
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((person) => (
              <div key={person.name} className="text-center">
                <div className="mx-auto h-40 w-40 overflow-hidden rounded-full">
                  <img
                    className="h-full w-full object-cover"
                    src={person.image}
                    alt={person.name}
                  />
                </div>
                <h3 className="mt-6 text-xl font-bold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-indigo-700 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-white mb-6">Join Our Community</h2>
              <p className="text-indigo-100 mb-8">
                Connect with Mixed Reality enthusiasts, developers, and industry experts. Stay updated on the latest 
                MR news, events, and opportunities.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-white px-4 py-3 font-semibold text-indigo-700 shadow hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
                  >
                    Subscribe to Newsletter
                  </button>
                </div>
              </form>
            </div>
            <div className="hidden lg:block relative">
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Community collaboration" 
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;