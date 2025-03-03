import React from 'react';
import PageHeader from '../components/PageHeader';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  const offices = [
    {
      city: 'San Francisco',
      address: '100 Technology Drive, Suite 300, San Francisco, CA 94103',
      phone: '+1 (415) 555-1234',
      email: 'sf@mrhub.com',
      hours: 'Mon-Fri: 9AM - 6PM PST'
    },
    {
      city: 'London',
      address: '25 Innovation Square, Shoreditch, London EC2A 4PQ, UK',
      phone: '+44 20 7123 4567',
      email: 'london@mrhub.com',
      hours: 'Mon-Fri: 9AM - 6PM GMT'
    },
    {
      city: 'Tokyo',
      address: 'Shibuya Scramble Square, 21F, 2-24-12 Shibuya, Tokyo 150-0002, Japan',
      phone: '+81 3 1234 5678',
      email: 'tokyo@mrhub.com',
      hours: 'Mon-Fri: 9AM - 6PM JST'
    }
  ];

  const faqs = [
    {
      question: 'What is Mixed Reality?',
      answer: 'Mixed Reality (MR) is a technology that blends elements of both Augmented Reality (AR) and Virtual Reality (VR), allowing digital and physical objects to interact in real time. Unlike VR, which creates a fully immersive digital environment, or AR, which simply overlays digital information on the real world, MR creates an environment where physical and digital objects can coexist and interact.'
    },
    {
      question: 'What equipment do I need to experience Mixed Reality?',
      answer: 'To experience full Mixed Reality, you typically need a dedicated MR headset like Microsoft HoloLens, Magic Leap, or Apple Vision Pro. However, some limited MR experiences are available on smartphones and tablets using AR platforms like ARKit (iOS) or ARCore (Android).'
    },
    {
      question: 'How can my business implement Mixed Reality solutions?',
      answer: 'Implementing MR solutions typically involves partnering with specialized development studios or building in-house expertise. The process usually includes defining use cases, selecting appropriate hardware and software platforms, developing custom applications, and training staff. Our team can provide consultations to help determine the best approach for your specific industry and needs.'
    },
    {
      question: 'What\'s the difference between AR, VR, and MR?',
      answer: 'Virtual Reality (VR) creates a completely digital environment that replaces the real world. Augmented Reality (AR) overlays digital information on the real world without interaction between the two. Mixed Reality (MR) blends physical and digital worlds, allowing real and virtual elements to interact with each other in real time.'
    },
    {
      question: 'Is Mixed Reality only for gaming and entertainment?',
      answer: 'No, while gaming and entertainment are popular applications, Mixed Reality has diverse applications across many industries including healthcare, education, manufacturing, architecture, retail, and more. MR is being used for professional training, remote collaboration, design visualization, and many other practical business applications.'
    }
  ];

  return (
    <div className="bg-white pt-16">
      <PageHeader 
        title="Contact Us" 
        description="Get in touch with our Mixed Reality experts"
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions about Mixed Reality or interested in implementing MR solutions for your business? 
              Our team of experts is here to help. Fill out the form and we'll get back to you as soon as possible.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Our Offices</h3>
            <div className="space-y-8">
              {offices.map((office) => (
                <div key={office.city} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">{office.city}</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <p className="ml-3 text-gray-600">{office.address}</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                      <p className="ml-3 text-gray-600">{office.phone}</p>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                      <p className="ml-3 text-gray-600">{office.email}</p>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                      <p className="ml-3 text-gray-600">{office.hours}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-6 py-5">
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <div className="mt-2">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-indigo-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need immediate assistance?</h2>
          <p className="text-lg text-gray-600 mb-6">Our support team is available Monday through Friday, 9AM-6PM EST</p>
          <div className="flex justify-center space-x-4">
            <a href="tel:+18005551234" className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
              <Phone className="h-5 w-5 mr-2" />
              Call Support
            </a>
            <a href="mailto:support@mrhub.com" className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-gray-50 border border-indigo-600">
              <Mail className="h-5 w-5 mr-2" />
              Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;