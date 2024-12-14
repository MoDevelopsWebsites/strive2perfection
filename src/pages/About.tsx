import React from 'react';

export default function About() {
  const leadership = [
    {
      name: "Helix",
      role: "CEO",
      image: "https://cdn.discordapp.com/attachments/1134152358457249853/1317315157822541824/Capture_decran_2024-07-06_181833.png?ex=675e3cd8&is=675ceb58&hm=44eced53cd5e50d06770263d5def3a48422cabd1387cc976479fcb8e82e5f788&"
    },
    {
      name: "Stunna",
      role: "COO",
      image: "https://i.pinimg.com/736x/66/9a/14/669a1498ef7202a653597f2ab4808d2e.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">About S2P</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strive 2 Perfection (S2P) is more than just an esports organization - we're a community dedicated to excellence in competitive gaming.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader) => (
              <div key={leader.name} className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="p-8 flex items-center">
                  <img src={leader.image} alt={leader.name} 
                       className="w-24 h-24 rounded-full object-cover" />
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-white">{leader.name}</h3>
                    <p className="text-purple-400 text-lg">{leader.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-8">Our Vision</h2>
          <div className="bg-gray-800 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              At S2P, we believe in pushing the boundaries of what's possible in esports. Our mission is to nurture talent, 
              foster a competitive spirit, and create an environment where players can reach their full potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}