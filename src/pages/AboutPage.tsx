import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageHeader from '../components/PageHeader';
import AnimatedCounter from '../components/AnimatedCounter';
import { Users, Award, Clock, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { ref: missionRef, inView: missionInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: teamRef, inView: teamInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

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
    { name: 'Years in operation', value: 5, suffix: '+', icon: <Clock className="h-8 w-8 text-indigo-600" /> },
    { name: 'Industry partners', value: 50, suffix: '+', icon: <Users className="h-8 w-8 text-indigo-600" /> },
    { name: 'Countries reached', value: 25, suffix: '+', icon: <Globe className="h-8 w-8 text-indigo-600" /> },
    { name: 'Industry awards', value: 12, suffix: '', icon: <Award className="h-8 w-8 text-indigo-600" /> },
  ];

  return (
    <div className="bg-white pt-16">
      <PageHeader 
        title="About MR Hub" 
        description="Pioneering the future of Mixed Reality technology and education"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div ref={missionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-6"
              whileHover={{ x: 5, color: "#4f46e5" }}
              transition={{ duration: 0.3 }}
            >
              Our Mission
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={missionInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              At MR Hub, we're dedicated to advancing the field of Mixed Reality by connecting innovators, 
              educating the public, and showcasing groundbreaking applications across industries.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={missionInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Founded in 2020 by a team of XR researchers and industry veterans, we've grown into a 
              global community of Mixed Reality enthusiasts, developers, and business leaders.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={missionInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Our platform serves as both an educational resource and a catalyst for collaboration, 
              helping to accelerate the adoption of Mixed Reality technologies worldwide.
            </motion.p>
          </motion.div>
          <motion.div 
            className="relative h-96"
            initial={{ opacity: 0, x: 30 }}
            animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="overflow-hidden rounded-2xl shadow-2xl group"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="MR Hub team collaboration" 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>
          </motion.div>
        </div>
        
        <div ref={statsRef} className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl p-8 mb-16 border border-gray-100">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            Our Impact
          </motion.h2>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.name} 
                className="mx-auto flex max-w-xs flex-col gap-y-4 group"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={statsInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-indigo-100"
                  whileHover={{ 
                    rotate: 360,
                    backgroundColor: "#eef2ff",
                    borderColor: "#c7d2fe",
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                <dt className="text-base leading-7 text-gray-600 group-hover:text-gray-700 transition-colors">
                  {stat.name}
                </dt>
                <dd className="order-first text-4xl font-semibold tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
        
        <div ref={teamRef} className="mb-16">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((person, index) => (
              <motion.div 
                key={person.name} 
                className="text-center group"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={teamInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="mx-auto h-48 w-48 overflow-hidden rounded-full shadow-lg group-hover:shadow-2xl transition-shadow duration-300 border-4 border-white"
                  whileHover={{ 
                    scale: 1.1,
                    borderColor: "#c7d2fe",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={person.image}
                    alt={person.name}
                  />
                </motion.div>
                <motion.h3 
                  className="mt-6 text-xl font-bold leading-7 tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  {person.name}
                </motion.h3>
                <motion.p 
                  className="text-sm font-semibold leading-6 text-indigo-600 group-hover:text-purple-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {person.role}
                </motion.p>
                <motion.p 
                  className="mt-4 text-base leading-7 text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {person.bio}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="bg-gradient-to-r from-indigo-700 to-purple-700 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2))",
                "linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
                "linear-gradient(225deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))",
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 relative">
            <motion.div 
              className="p-8 lg:p-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-3xl font-bold text-white mb-6"
                whileHover={{ x: 5 }}
              >
                Join Our Community
              </motion.h2>
              <motion.p 
                className="text-indigo-100 mb-8 leading-relaxed"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                Connect with Mixed Reality enthusiasts, developers, and industry experts. Stay updated on the latest 
                MR news, events, and opportunities.
              </motion.p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <motion.input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-all duration-300"
                    placeholder="Enter your email"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
                <div>
                  <motion.button
                    type="submit"
                    className="block w-full rounded-xl bg-white px-4 py-3 font-semibold text-indigo-700 shadow hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe to Newsletter
                  </motion.button>
                </div>
              </form>
            </motion.div>
            <motion.div 
              className="hidden lg:block relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="h-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Community collaboration" 
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;

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