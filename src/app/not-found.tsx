import { Metadata, Viewport } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Страница не найдена | LOTUS",
  description: "Запрошенная страница не существует",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Страница не найдена</h2>
        <p className="text-gray-400 mb-8 max-w-md">
          Извините, но страница, которую вы ищете, не существует или была перемещена.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}