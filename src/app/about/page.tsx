import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "О нас | Next.js Приложение",
  description: "Информация о нашем Next.js приложении и используемых технологиях",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <nav className="mb-8">
            <a
              href="/"
              className="px-4 py-2 text-gray-600 dark:text-gray-300 font-semibold hover:underline"
            >
              Главная
            </a>
            <a
              href="/about"
              className="px-4 py-2 text-purple-600 dark:text-purple-400 font-semibold hover:underline"
            >
              О нас
            </a>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            О нашем приложении
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Создано с использованием современных веб-технологий
          </p>
        </header>

        <main className="max-w-4xl mx-auto">
          <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
              🛠️ Технологический стек
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Frontend
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Next.js 16.0.1 - React фреймворк</li>
                  <li>• React 19.2.0 - UI библиотека</li>
                  <li>• TypeScript - Типобезопасность</li>
                  <li>• Tailwind CSS - CSS фреймворк</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Инструменты
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• ESLint - Линтинг кода</li>
                  <li>• Turbopack - Быстрый бандлер</li>
                  <li>• PostCSS - Обработка CSS</li>
                  <li>• Next.js Dev Server - Разработка</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
              ✨ Возможности Next.js
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <div className="flex items-start">
                <span className="text-2xl mr-3">🚀</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Высокая производительность
                  </h3>
                  <p>Автоматическая оптимизация и кэширование для максимальной скорости загрузки</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3">📱</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Адаптивный дизайн
                  </h3>
                  <p>Отличный внешний вид на всех устройствах с помощью Tailwind CSS</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3">🔍</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    SEO оптимизация
                  </h3>
                  <p>Server-side rendering для лучшей индексации поисковыми системами</p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <a
              href="/"
              className="inline-block px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
            >
              ← Вернуться на главную
            </a>
          </section>
        </main>
      </div>
    </div>
  );
}