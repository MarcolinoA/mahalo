"use client"
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import MobileNavbar from "./mobile-navbar";
import "@fontsource/pacifico";
import Link from "next/link";
import { usePathname } from "next/navigation";  // Usa usePathname al posto di useRouter

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/work-in-progress", label: "Menu" },
  { href: "/work-in-progress", label: "Chi siamo" },
  { href: "/work-in-progress", label: "Contatti" },
];

export default function DesktopNavbar() {
  const pathname = usePathname();

  return (
    <header
      style={{ fontFamily: '"Pacifico", sans-serif' }}
      className="border-b"
    >
      {/* Navbar desktop (hidden on mobile) */}
      <div className="hidden md:flex h-25 justify-between gap-4 px-4 md:px-8">
        {/* Left side */}
        <div className="flex gap-2">
          <div className="flex items-center">
            {/* Logo */}
            <a href="/" className="text-primary hover:text-primary/90">
              <Image
                src="/logo.webp"
                alt="Logo"
                width={300} // Larghezza di base
                height={120} // Altezza di base
                className="max-w-[180px] h-auto" // Assicura che il logo si ridimensioni proporzionalmente
              />
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 w-full justify-center md:justify-center">
          {/* Navigation menu centered */}
          <NavigationMenu className="h-full *:h-full flex justify-center w-full">
            <NavigationMenuList className="h-full gap-2 flex-row justify-center">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index} className="h-full">
                  <NavigationMenuLink
                    asChild
                    className={`text-2xl ${
                      pathname === link.href
                        ? "text-primary border-b-primary"
                        : "text-muted-foreground"
                    } hover:text-primary border-b-primary hover:border-b-primary h-full justify-center rounded-none border-y-2 border-transparent py-1.5 font-bold hover:bg-transparent data-[active]:bg-transparent! data-[active]:text-primary`}
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-2">
          <Button
            asChild
            variant="link"
            size="lg"
            className="p-0 text-primary font-bold text-3xl"
          >
            <Link href="/work-in-progress" className="p-0">
              Prenota Ora!
            </Link>
          </Button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden w-full h-25 flex justify-between items-center px-6">
        <MobileNavbar />
      </div>
    </header>
  );
}
