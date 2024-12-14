import React from 'react';
import SponsorCard from '../components/SponsorCard';

export default function Sponsors() {
  const sponsors = [
    {
      name: "Kinxe Gaming",
      logo: "https://kinxegaming.com/static/media/KinxeGaming_1.60e0c9e6a5316384f490.png",
      description: "Official Gaming Gear Partner of Strive 2 Perfection",
      website: "https://kinxegaming.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Our Sponsors</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proud to be partnered with industry-leading brands who support our vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.name} {...sponsor} />
          ))}
        </div>
      </div>
    </div>
  );
}