import React from 'react';
import { ArrowRight, Trophy, Users, Target } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-gray-900/90">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        <div className="relative max-w-7xl mx-auto pt-32 px-4 sm:px-6 lg:px-8 flex flex-col h-full justify-center">
          <img 
            src="https://cdn.discordapp.com/attachments/1134152358457249853/1278721017514295306/PFP-3.png?ex=675d9440&is=675c42c0&hm=5696c73f6d13e6c6c6bc9dc9407984c64e3c8af2aa77b45b240b3a3e3ebf65ae"
            alt="S2P Logo"
            className="w-32 h-32 mb-8 rounded-full shadow-lg shadow-purple-500/20"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to <span className="text-purple-400">Strive 2 Perfection</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Striving for excellence in competitive gaming. Join us on our journey to perfection.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#teams" className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 flex items-center transition-colors">
              Our Teams <ArrowRight className="ml-2" size={20} />
            </a>
            <a 
              href="https://linktr.ee/Strive2Perfection" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              Connect With Us
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-600 p-4 rounded-lg mb-4">
                <Trophy size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Competitive Excellence</h3>
              <p className="text-gray-300">Dedicated to achieving the highest levels of competitive gaming performance.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-600 p-4 rounded-lg mb-4">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Strong Community</h3>
              <p className="text-gray-300">Building a supportive community of passionate gamers and fans.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-600 p-4 rounded-lg mb-4">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Clear Vision</h3>
              <p className="text-gray-300">Focused on developing talent and achieving competitive success.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}