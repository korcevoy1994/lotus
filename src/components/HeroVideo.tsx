"use client";

import { useEffect, useRef, useState } from 'react';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Устанавливаем muted по умолчанию для надежного автопроигрывания
    video.muted = true;
    setIsMuted(true);

    const attemptPlay = async () => {
      try {
        // Пробуем воспроизвести видео
        await video.play();
        console.log("Video autoplay successful");
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

    const handleVolumeChange = () => {
      setIsMuted(video.muted);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('volumechange', handleVolumeChange);
    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('touchstart', handleUserInteraction, { once: true });

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('volumechange', handleVolumeChange);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      if (video.muted) {
        video.muted = false;
        await video.play();
      } else {
        video.muted = true;
      }
      setIsMuted(video.muted);
    } catch (error) {
      console.log('Не удалось переключить звук после клика:', error);
    }
  };

  return (
    <div className="w-full relative">
      <button
        type="button"
        aria-label={isMuted ? "Activați sunetul" : "Dezactivați sunetul"}
        onClick={toggleSound}
        className="absolute top-4 right-4 z-10 px-4 py-2 rounded-full bg-[#fdef01] text-black shadow-md hover:brightness-105 active:scale-95 transition"
      >
        {isMuted ? "🔊 Activați sunetul" : "🔇 Dezactivați sunetul"}
      </button>
      <video
        ref={videoRef}
        className="w-full h-auto object-contain"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        controls={false}
      >
        <source src="/LOTUS.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  );
}