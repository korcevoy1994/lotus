"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  Car
} from 'lucide-react';

// Динамически импортируем компоненты, которые могут вызывать проблемы с SSR
const DecryptedText = dynamic(() => import('@/components/DecryptedText'), {
  ssr: false,
  loading: () => <span className="animate-pulse bg-gray-700 h-8 w-32 rounded inline-block"></span>
});

const HeroVideo = dynamic(() => import('@/components/HeroVideo'), {
  ssr: false,
  loading: () => <div className="w-full h-64 bg-gray-800 animate-pulse"></div>
});

const BottomBarWrapper = dynamic(() => import('@/components/BottomBarWrapper'), {
  ssr: false,
  loading: () => <div className="fixed bottom-0 left-0 right-0 h-20 bg-black/90 backdrop-blur-md border-t border-yellow-400/20 z-50"></div>
});

export default function PageContent() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black pb-24">
      {/* Видео в самом верху страницы */}
      <HeroVideo />

      {/* Приглашение на мероприятие */}
      <div className="px-6 py-16 max-w-6xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light mb-8 tracking-wider text-white">
            <DecryptedText
              text="Lotus"
              className="text-white"
              encryptedClassName="text-gray-500"
              speed={50}
              maxIterations={15}
              sequential={true}
              revealDirection="center"
              animateOn="view"
            />
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl italic font-light text-gray-300">
            <DecryptedText
              text="Legenda britanică a ajuns în Moldova."
              className="text-gray-300"
              encryptedClassName="text-gray-600"
              speed={30}
              maxIterations={20}
              sequential={true}
              revealDirection="start"
              animateOn="view"
            />
          </p>
        </div>

        {/* Основное приглашение */}
        <div className="text-center mb-16">
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 leading-relaxed text-white">
            <DecryptedText
              text="Vă invităm la deschiderea oficială a noului showroom LOTUS Moldova"
              className="text-white"
              encryptedClassName="text-gray-500"
              speed={40}
              maxIterations={12}
              sequential={true}
              revealDirection="center"
              animateOn="view"
            />
          </p>
        </div>

        {/* Детали мероприятия в правильном порядке */}
        <div className="space-y-8 text-center max-w-4xl mx-auto">
          {/* 1. Локация */}
          <div className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 border border-yellow-400/20 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-400/10">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl flex items-center justify-center border border-yellow-400/30">
                <MapPin className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-sm uppercase tracking-wider mb-2 text-yellow-400 font-light">
                  <DecryptedText
                    text="Locatie"
                    className="text-yellow-400"
                    encryptedClassName="text-gray-600"
                    speed={30}
                    maxIterations={8}
                    sequential={true}
                    revealDirection="start"
                    animateOn="view"
                  />
                </h3>
                <p className="text-white text-xl md:text-2xl leading-relaxed">
                  <DecryptedText
                    text="Chisinău, str. Calea Orheiului 17"
                    className="text-white"
                    encryptedClassName="text-gray-500"
                    speed={40}
                    maxIterations={10}
                    sequential={true}
                    revealDirection="start"
                    animateOn="view"
                  />
                </p>
              </div>
            </div>
          </div>

          {/* 2. Дата */}
          <div className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 border border-yellow-400/20 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-400/10">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl flex items-center justify-center border border-yellow-400/30">
                <Calendar className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-sm uppercase tracking-wider mb-2 text-yellow-400 font-light">
                  <DecryptedText
                    text="Data"
                    className="text-yellow-400"
                    encryptedClassName="text-gray-600"
                    speed={30}
                    maxIterations={8}
                    sequential={true}
                    revealDirection="start"
                    animateOn="view"
                  />
                </h3>
                <p className="text-white text-xl md:text-2xl leading-relaxed">
                  <DecryptedText
                    text="14 noiembrie 2025"
                    className="text-white"
                    encryptedClassName="text-gray-500"
                    speed={40}
                    maxIterations={10}
                    sequential={true}
                    revealDirection="start"
                    animateOn="view"
                  />
                </p>
              </div>
            </div>
          </div>

          {/* 3. Время */}
          <div className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 border border-yellow-400/20 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-400/10">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl flex items-center justify-center border border-yellow-400/30">
                <Clock className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-sm uppercase tracking-wider mb-2 text-yellow-400 font-light">
                  <DecryptedText
                    text="Ora"
                    className="text-yellow-400"
                    encryptedClassName="text-gray-600"
                    speed={30}
                    maxIterations={8}
                    sequential={true}
                    revealDirection="start"
                    animateOn="view"
                  />
                </h3>
                <p className="text-white text-xl md:text-2xl leading-relaxed">
                  <DecryptedText
                    text="18:30"
                    className="text-white"
                    encryptedClassName="text-gray-500"
                    speed={40}
                    maxIterations={10}
                    sequential={true}
                    revealDirection="start"
                    animateOn="view"
                  />
                </p>
              </div>
            </div>
          </div>

          {/* 4. Дресс код */}
          <div className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 border border-yellow-400/20 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-400/10">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl flex items-center justify-center border border-yellow-400/30">
                <Users className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-sm uppercase tracking-wider mb-2 text-yellow-400 font-light">
                  <DecryptedText
                    text="Dress Code"
                    className="text-yellow-400"
                    encryptedClassName="text-gray-600"
                    speed={30}
                    maxIterations={8}
                    sequential={true}
                    revealDirection="start"
                    animateOn="view"
                  />
                </h3>
                <p className="text-white text-xl md:text-2xl leading-relaxed">
                  <DecryptedText
                    text="Business Casual"
                    className="text-white"
                    encryptedClassName="text-gray-500"
                    speed={40}
                    maxIterations={10}
                    sequential={true}
                    revealDirection="start"
                    animateOn="view"
                  />
                </p>
              </div>
            </div>
          </div>

          {/* 5. Парковка */}
          <div className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 border border-yellow-400/20 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-400/10">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl flex items-center justify-center border border-yellow-400/30">
                <Car className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-sm uppercase tracking-wider mb-2 text-yellow-400 font-light">
                  <DecryptedText
                    text="Parcare"
                    className="text-yellow-400"
                    encryptedClassName="text-gray-600"
                    speed={30}
                    maxIterations={8}
                    sequential={true}
                    revealDirection="start"
                    animateOn="view"
                  />
                </h3>
                <p className="text-white text-xl md:text-2xl leading-relaxed">
                  <DecryptedText
                    text="Fourchette - acces asistat de personalul evenimentului"
                    className="text-white"
                    encryptedClassName="text-gray-500"
                    speed={40}
                    maxIterations={10}
                    sequential={true}
                    revealDirection="start"
                    animateOn="view"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomBarWrapper />
    </div>
  );
}