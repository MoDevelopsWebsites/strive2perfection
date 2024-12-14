import React from 'react';
import { Youtube, Twitter } from 'lucide-react';

interface SocialLink {
  platform: 'tiktok' | 'youtube' | 'twitter' | 'twitch';
  url: string;
}

interface CreatorCardProps {
  name: string;
  image: string;
  role: string;
  socials: SocialLink[];
}

export default function CreatorCard({ name, image, role, socials }: CreatorCardProps) {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'tiktok': return <BrandTiktok size={20} />;
      case 'youtube': return <Youtube size={20} />;
      case 'twitter': return <Twitter size={20} />;
      default: return null;
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all">
      <div className="p-6">
        <img 
          src={image} 
          alt={name} 
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-bold text-white text-center mb-1">{name}</h3>
        <p className="text-purple-400 text-center mb-4">{role}</p>
        <div className="flex justify-center space-x-4">
          {socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              {getSocialIcon(social.platform)}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}