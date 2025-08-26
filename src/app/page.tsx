"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundMusic from "@/components/shared/background-music";  // Importa BackgroundMusic
import HeroSection from "@/components/home/hero-section";
import DesktopNavbar from "@/components/shared/navbar/desktop-navbar";
import "@fontsource/pacifico";
import RootImages from "@/components/home/root-images";

const Home = () => {
  const [showIntro, setShowIntro] = useState(true); // Set default to true to show intro

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-sidebar">
      {/* Musica di sottofondo */}
      <BackgroundMusic />

      {/* Animazione intro */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 1.2, ease: "easeInOut" } }}
            className="fixed top-0 left-0 w-screen h-screen z-50"
          >
            <RootImages onAnimationComplete={() => setShowIntro(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pagina vera */}
      <div className={`relative w-screen min-h-screen ${showIntro ? "opacity-0" : "opacity-100"}`}>
        <DesktopNavbar />
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
