"use client"
import { useRef, useState } from "react";
import { Disc3Icon } from "lucide-react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioPlaying, setAudioPlaying] = useState(false); // Stato per il controllo audio

  // Gestisce la riproduzione audio
  const toggleAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      if (audioPlaying) {
        // Mette in pausa l'audio
        audio.pause();
      } else {
        // Riproduce l'audio
        audio
          .play()
          .catch(() =>
            console.log("Errore nel tentativo di riprodurre l'audio")
          );
      }
      setAudioPlaying(!audioPlaying); // Alterna lo stato
    }
  };

  return (
    <>
      {/* Audio di sottofondo */}
      <audio ref={audioRef} src="/music/hawaii.ogg" loop />

      {/* Bottone per il controllo della musica con l'icona Disc3 */}
      <button
        onClick={toggleAudio}
        className="z-100 absolute bottom-5 right-5 p-3 bg-white rounded-full shadow-lg cursor-pointer flex items-center justify-center 
                  md:bottom-10 md:right-10 md:p-4"
      >
        <Disc3Icon
          className={`text-primary text-5xl transition-transform duration-500 ease-in-out 
                    sm:text-5xl 
                    md:text-6xl 
                    lg:text-7xl 
                    xl:text-8xl 
                    ${audioPlaying ? "rotate" : "rotate-0"}`}
        />
      </button>
    </>
  );
};

export default BackgroundMusic;
