import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="https://cdn.discordapp.com/attachments/1134152358457249853/1278721017514295306/PFP-3.png?ex=675d9440&is=675c42c0&hm=5696c73f6d13e6c6c6bc9dc9407984c64e3c8af2aa77b45b240b3a3e3ebf65ae"
        alt="Strive 2 Perfection Logo" 
        className="h-10 w-auto rounded-full"
      />
      <span className="ml-3 text-white font-bold text-xl">Strive 2 Perfection</span>
    </Link>
  );
}