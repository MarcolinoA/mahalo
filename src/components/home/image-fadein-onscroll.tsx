"use client";
import { useEffect, useRef, useState } from "react";

const images = [
  "image1.webp",
  "image2.webp",
  "image3.webp",
  "image4.webp",
  "image5.webp",
  "image6.webp",
];

const MultipleImagesFreeLayout = ({
  onAnimationComplete,
}: {
  onAnimationComplete: () => void;
}) => {
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [scaleFactor, setScaleFactor] = useState(1);
  const [animationComplete, setAnimationComplete] = useState(false); // Stato per completamento animazione
  
  // Aggiorna larghezza e altezza della finestra
  const updateWindowSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setWindowSize({ width, height });

    if (width < 768) setScaleFactor(1.3); // mobile
    else if (width < 992) setScaleFactor(1.15); // tablet
    else if (width < 1280) setScaleFactor(0.9); // small desktop (via di mezzo)
    else setScaleFactor(0.50); // desktop grande
  };

  useEffect(() => {
    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);
    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  // Gestisce la visibilità delle immagini con IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = imgRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && !visibleIndexes.includes(index)) {
            setVisibleIndexes((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.5 }
    );

    imgRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, [visibleIndexes]);

  // Funzione che gestisce quando tutte le immagini sono visibili e completa l'animazione
  useEffect(() => {
    if (visibleIndexes.length === images.length) {
      setTimeout(() => {
        setAnimationComplete(true);
      }, 2500); // Aggiungi ritardo di 1.5 secondi per permettere alle immagini di apparire
    }
  }, [visibleIndexes]);

  // Quando l'animazione è completa, esegui la callback per passare alla home
  useEffect(() => {
    if (animationComplete) {
      onAnimationComplete();
    }
  }, [animationComplete, onAnimationComplete]);

  const positions = [
    { x: -0.25, y: -0.15 },
    { x: 0.25, y: -0.1 },
    { x: -0.15, y: 0.3 },
    { x: 0.2, y: 0.3 },
    { x: -0.05, y: 0.05 },
    { x: 0.05, y: -0.3 },
  ];

  const baseSizes = [
    { width: 0.28, height: 0.28 },
    { width: 0.3, height: 0.3 },
    { width: 0.25, height: 0.25 },
    { width: 0.27, height: 0.27 },
    { width: 0.32, height: 0.32 },
    { width: 0.28, height: 0.28 },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-sidebar">
      {images.map((img, index) => (
        <div
          key={index}
          ref={(el) => {
            imgRefs.current[index] = el;
          }}
          className={`absolute image-container ${
            visibleIndexes.includes(index) ? "fade-in" : ""
          }`}
          style={{
            top: `50%`,
            left: `50%`,
            transform: `translate(-50%, -50%) translate(${
              positions[index].x * windowSize.width
            }px, ${positions[index].y * windowSize.height}px)`,
            zIndex: index + 1,
            transitionDelay: `${index * 0.3}s`,
          }}
        >
          <img
            src={`/home-page/${img}`}
            alt={`Image ${index + 1}`}
            width={baseSizes[index].width * windowSize.width * scaleFactor}
            height={baseSizes[index].height * windowSize.height * scaleFactor}
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default MultipleImagesFreeLayout;
