import React from 'react';
import { Bird, Sparkles, MessageCircle, GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                🇷🇺 Русский → 🇬🇧 English
              </span>
            </div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Изучайте английский с{' '}
              <span className="text-green-500">
                AI-репетитором
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Познакомьтесь с Машей, вашим персональным AI-репетитором в Telegram. 
              Практикуйте английский через естественные диалоги и игры.
            </p>
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center text-lg">
              Начать бесплатно
              <Sparkles className="ml-2 h-5 w-5" />
            </button>
          </div>
          
          <div className="relative">
            <div className="absolute -top-20 -left-20">
              <div className="bg-yellow-100 rounded-full p-4">
                <GraduationCap className="h-8 w-8 text-yellow-600" />
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10">
              <div className="bg-green-100 rounded-full p-4">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto">
              <div className="flex items-center space-x-4 mb-4">
                <Bird className="h-12 w-12 text-green-500" />
                <div>
                  <h3 className="font-bold">Маша</h3>
                  <p className="text-sm text-gray-500">AI English Tutor</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-3 text-gray-700">
                  Let's practice ordering coffee! First, I'll teach you some useful phrases. Ready? ☕️
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-gray-700">
                  Да, я готов! (Yes, I'm ready!)
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-gray-700">
                  Great! Here's how to say "I would like a coffee, please":
                  "I would like a coffee, please" 
                  Try repeating this! 🎯
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}