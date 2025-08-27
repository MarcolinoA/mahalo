import ReservationCard from "@/components/reservation/reservation-overlay";
import DesktopNavbar from "@/components/shared/navbar/desktop-navbar";

export function generateMetadata() {
  return { title: "Prenota" };
}

export default function PrenotaPage() {
  return (
    <main className="min-h-screen bg-sidebar">
      <DesktopNavbar />
      <ReservationCard
        imageSrc="/reserve/reserve.webp"
      />
    </main>
  );
}
