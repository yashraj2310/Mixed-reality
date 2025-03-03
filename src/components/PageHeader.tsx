import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  image?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, image }) => {
  return (
    <div className="relative bg-indigo-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-indigo-800 h-1/3 sm:h-2/3"></div>
        {image && (
          <div className="absolute inset-0 opacity-30">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl">{title}</h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-indigo-200 sm:mt-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;