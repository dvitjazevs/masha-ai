import React from 'react';
import { MessageSquare, Mic, ImageIcon, Sparkles, GraduationCap, Brain, Target } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6 text-green-500" />,
      title: "Живые диалоги",
      description: "Практикуйте английский в естественных разговорах с Машей."
    },
    {
      icon: <Target className="h-6 w-6 text-green-500" />,
      title: "Ролевые игры",
      description: "Отрабатывайте реальные ситуации через увлекательные диалоги."
    },
    {
      icon: <Mic className="h-6 w-6 text-green-500" />,
      title: "Голосовые сообщения",
      description: "Улучшайте произношение с помощью голосовых сообщений."
    },
    {
      icon: <Brain className="h-6 w-6 text-green-500" />,
      title: "Умное обучение",
      description: "AI подстраивается под ваш уровень и темп обучения."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Почему Маша?</h2>
          <p className="text-xl text-gray-600">
            Эффективное изучение английского с искусственным интеллектом
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
              <div className="h-12 w-12 bg-white rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}