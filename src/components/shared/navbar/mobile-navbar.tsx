"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Fade as Hamburger } from "hamburger-react";
import "@fontsource/pacifico"; // Peso predefinito 400

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  const MobileNavItem = ({ href, label }: { href: string; label: string }) => (
    <SheetClose asChild>
      <Link
        href={href}
        className="border-b border-primary font-bold justify-start items-start gap-3 text-xl w-full"
        style={{ fontFamily: '"Pacifico", sans-serif' }}
      >
        <span className="text-6xl">{label}</span>
      </Link>
    </SheetClose>
  );

  return (
    <div className="w-full flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.webp"
          alt="Santa Marta"
          width={150} height={80}
        />
      </Link>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button aria-label="Apri menu" className="p-2">
            <Hamburger
              toggled={open}
              size={35}
              rounded
              distance="md"
              label="Menu"
              color="#2e7d32"
              hideOutline={true}
            />
          </button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="bg-muted text-primary w-full sm:max-w-none"
          style={{ top: 70, height: "calc(100dvh - 70px)" }}
        >
          <div className="flex flex-col justify-start items-start gap-6 p-6">
            <MobileNavItem href="/" label="Home" />
            <MobileNavItem href="/work-in-progress" label="Menu" />
            <MobileNavItem href="/work-in-progress" label="Chi Siamo" />
            <MobileNavItem href="/work-in-progress" label="Contatti" />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
