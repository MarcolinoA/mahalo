// components/home/hero-section.tsx

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="relative w-screen h-[100vh] overflow-hidden">
      {/* Immagine con animazione di zoom */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ scale: 1.5 }} // Parte con un ingrandimento
        animate={{ scale: 1 }}  // Si espande fino alla dimensione normale
        transition={{ duration: 2, ease: "easeInOut" }} // Imposta la durata e la transizione
      >
        <img 
          src="home-page/test.jpeg"  // Verifica il percorso corretto
          alt="Hero" 
          className="w-full h-full object-cover"  // Garantisce che l'immagine copra tutta l'area
        />
      </motion.div>

      {/* Contenuto centrale */}
      <div className="absolute top-[75vh] left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center">
        <Link href="/work-in-progress">
          <Button
            variant="link"
            className="border-4 border-primary bg-background hover:bg-background text-primary font-bold text-2xl sm:text-3xl md:text-4xl rounded-md transition-colors duration-300 w-[250px] h-[40px] sm:w-[300px] sm:h-[50px] md:w-[350px] md:h-[60px]"
            style={{ fontFamily: '"Pacifico", sans-serif' }}
          >
            Il Menu!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
