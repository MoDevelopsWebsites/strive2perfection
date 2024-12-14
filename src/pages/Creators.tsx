import React from 'react';
import CreatorCard from '../components/CreatorCard';

export default function Creators() {
  const creators = [
    {
      name: "Camz",
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      role: "Content Creator",
      socials: [
        { platform: 'tiktok', url: 'https://www.tiktok.com/@2xcamzfn' },
        { platform: 'youtube', url: 'https://youtube.com/@camz' },
        { platform: 'twitter', url: 'https://twitter.com/camz' }
      ]
    },
    {
      name: "Kaggant",
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      role: "Content Creator",
      socials: [
        { platform: 'twitch', url: 'https://twitch.tv/kaggant' },
        { platform: 'youtube', url: 'https://youtube.com/@kaggant' },
        { platform: 'twitter', url: 'https://twitter.com/kaggant' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Our Content Creators</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the talented creators who bring our community's stories to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creators.map((creator) => (
            <CreatorCard key={creator.name} {...creator} />
          ))}
        </div>
      </div>
    </div>
  );
}