"use client";

import { useEffect, useRef } from 'react';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Устанавливаем muted по умолчанию для надежного автопроигрывания
    video.muted = true;
    
    const attemptPlay = async () => {
      try {
        // Пробуем воспроизвести видео
        await video.play();
        console.log("Video autoplay successful");
        
        // Пробуем включить звук с небольшой задержкой
        setTimeout(() => {
          if (video) {
            video.muted = false;
            console.log("Audio enabled");
          }
        }, 500);
      } catch (error) {
        console.log("Auto-play was prevented, video will play muted:", error);
        // Если автопроигрывание заблокировано, оставляем muted=true
      }
    };

    // Пробуем воспроизвести сразу
    attemptPlay();

    // Добавляем обработчики событий для улучшения автопроигрывания
    const handleCanPlay = () => {
      attemptPlay();
    };

    const handleUserInteraction = () => {
      if (video.paused) {
        attemptPlay();
      }
    };

    video.addEventListener('canplay', handleCanPlay);
    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('touchstart', handleUserInteraction, { once: true });

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  return (
    <div className="w-full relative">
      <video
        ref={videoRef}
        className="w-full h-auto object-contain"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
      >
        <source src="/LOTUS_2.1.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  );
}