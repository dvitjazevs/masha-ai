import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const features = [
    "Безлимитные разговоры с Машей",
    "Обмен голосовыми сообщениями",
    "Интерактивные языковые игры",
    "Визуальное обучение",
    "Отслеживание прогресса",
    "Персональный подход"
  ];

  return (
    <section id="pricing" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Доступная цена</h2>
          <p className="text-xl text-gray-600">
            Начните изучать английский уже сегодня
          </p>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="px-6 py-8 bg-green-500 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">Премиум доступ</h3>
            <div className="flex justify-center items-baseline">
              <span className="text-5xl font-bold">$1.99</span>
              <span className="ml-2">/месяц</span>
            </div>
          </div>

          <div className="px-6 py-8">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
              Попробовать бесплатно
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}