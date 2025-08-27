"use client";

import React from "react";
import Image from "next/image";

const WorkInProgress = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-sidebar">
      <div className="w-full max-w-4xl flex flex-col items-center p-8 md:p-16 text-center">
        {/* Immagine */}
        <Image
          src="/work-in-progress/tiki.png"
          alt="Logo Santa Marta"
          width={200}
          height={200}
          className="mb-6"
          loading="lazy"
        />

        <h2 className="text-4xl font-bold text-primary mb-4">Ciao! Contattami!</h2>

        <p className="mt-4 max-w-lg text-xl text-gray-800">
          Grazie per aver dato uno sguardo a questo piccolo lavoro, spero che
          possa essere solo <strong>l&apos;inizio del progetto vero e proprio!</strong> 
          <br />
          Ciò che avete osservato fino ad ora è solo una bozza che può e deve essere ripensata
          insieme a voi, serve perché possiate avere un&apos;idea di ciò che può
          essere, della mia dedizione in questo lavoro e di quanto possa influire nel vostro <strong>brand identity</strong>. 
          <br />
          Un sito web che comprenda, <strong>in un unico link</strong>, tutte le informazioni necessarie e
          la possibilità di prenotare online e che rispecchia la vostra
          filosofia e il vostro stile unico non può che portare benefici alla
          vostra attività. 
          <br />
          Di seguito lascio i miei recapiti nel caso foste
          interessati ad avere anche solo una <strong>semplice chiacchierata</strong> senza
          impegni.
          <br />
          Grazie ancora per l&apos;attenzione...anzi <strong>Mahalo!</strong>
        </p>

        <div className="mt-8 w-full max-w-md space-y-6 text-center">
          {/* Telefono */}
          <div>
            <h3 className="font-semibold text-3xl text-primary">Telefono</h3>
            <p className="text-xl">+39 344 276 7875</p>
          </div>

          {/* Email */}
          <div>
            <h3 className="font-semibold text-3xl text-primary">Email</h3>
            <p className="text-xl">info@marcoagostinello.com</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkInProgress;
