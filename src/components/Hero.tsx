import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
      <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
        <div className="px-6 lg:px-0 lg:pt-4">
          <div className="mx-auto max-w-2xl">
            <div className="max-w-lg">
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <a href="#" className="inline-flex space-x-6">
                  <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                    What's new
                  </span>
                  <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                    <span>Just released in 2025</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </a>
              </div>
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                The Future of Mixed Reality
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover how Mixed Reality is transforming industries by seamlessly blending digital and physical worlds. 
                From healthcare to entertainment, explore the revolutionary applications changing how we work, learn, and play.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#applications"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Explore Applications
                </a>
                <a href="#technology" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn about the technology <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
          <div className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36" aria-hidden="true" />
          <div className="shadow-lg md:rounded-3xl">
            <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
              <div
                className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                aria-hidden="true"
              />
              <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                  <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                          MixedReality.tsx
                        </div>
                        <div className="border-r border-gray-600/10 px-4 py-2">App.tsx</div>
                      </div>
                    </div>
                    <div className="px-6 pb-14 pt-6">
                      <pre className="text-[0.8125rem] leading-6 text-gray-300">
                        <code>
                          {`import { MixedRealityScene } from 'mr-framework';

// Create an immersive MR experience
const MRApplication = () => {
  return (
    <MixedRealityScene>
      <VirtualObject
        position={{ x: 0, y: 1.5, z: -2 }}
        scale={1.0}
        model="heart.glb"
        interactive
      />
      <AnchorPoint worldSpace={true}>
        <Annotation>
          Human Heart - Tap to explore
        </Annotation>
      </AnchorPoint>
      <GestureRecognizer
        onPinch={handleZoom}
        onRotate={handleRotate}
      />
    </MixedRealityScene>
  );
};`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>
  );
};

export default Hero;