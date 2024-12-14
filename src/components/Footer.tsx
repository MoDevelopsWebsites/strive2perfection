import React from 'react';
import { Twitter, Twitch, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900/80 text-gray-300 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img 
              src="https://cdn.discordapp.com/attachments/1134152358457249853/1278721017514295306/PFP-3.png?ex=675d9440&is=675c42c0&hm=5696c73f6d13e6c6c6bc9dc9407984c64e3c8af2aa77b45b240b3a3e3ebf65ae"
              alt="Strive 2 Perfection Logo" 
              className="h-12 w-auto rounded-full"
            />
            <p className="mt-2 text-sm">Strive 2 Perfection</p>
          </div>
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitch size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Youtube size={24} />
              </a>
            </div>
            <a 
              href="https://linktr.ee/Strive2Perfection" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Visit our Linktree
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Strive 2 Perfection. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}