import React from 'react';

interface SponsorCardProps {
  name: string;
  logo: string;
  description: string;
  website?: string;
}

export default function SponsorCard({ name, logo, description, website }: SponsorCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all">
      <div className="p-6">
        <img src={logo} alt={`${name} logo`} className="h-24 w-auto mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white text-center mb-2">{name}</h3>
        <p className="text-gray-300 text-center mb-4">{description}</p>
        {website && (
          <div className="text-center">
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
            >
              Visit Website
            </a>
          </div>
        )}
      </div>
    </div>
  );
}