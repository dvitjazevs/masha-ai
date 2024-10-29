import React from 'react';
import { Bird } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Bird className="h-8 w-8 text-green-500" />
              <span className="text-2xl font-bold text-green-500">
                Маша
              </span>
            </div>
            <p className="text-gray-600 max-w-md">
              Ваш AI-репетитор английского языка в Telegram. Делаем изучение языка 
              увлекательным и эффективным через живое общение.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Продукт</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-green-500">Возможности</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-green-500">Цены</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-500">Конфиденциальность</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500">Условия использования</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Маша AI. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}