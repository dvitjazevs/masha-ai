import React from 'react';
import { Bird } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Bird className="h-8 w-8 text-green-500" />
            <span className="text-2xl font-bold text-green-500">
              Masha AI
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-green-500">Возможности</a>
            <a href="#pricing" className="text-gray-600 hover:text-green-500">Цены</a>
          </nav>

          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
            Начать бесплатно
          </button>
        </div>
      </div>
    </header>
  );
}