"use client";
import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import PeopleStepper from "../people-stepper";
import { it } from "date-fns/locale";

export type ReservationCardProps = {
  imageSrc: string;
  imageAlt?: string;
  title?: string;
  subtitle?: string;
  onSubmit?: (payload: { people: number; date: Date; time: string }) => void;
};

export default function ReservationCard({
  imageSrc,
  imageAlt = "Prenota il tuo tavolo",
  title = "Prenota il tuo tavolo!",
  subtitle = "Scegli la data e l'orario perfetti per te.",
  onSubmit,
}: ReservationCardProps) {
  const [people, setPeople] = React.useState(2);
  const [date, setDate] = React.useState<Date>(new Date());
  const [time, setTime] = React.useState<string | null>(null);
  const [submitting, setSubmitting] = React.useState(false);

  const eveningSlots = ["19:00", "19:30", "20:00", "20:30","21:00", "21:30", "22:00"];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!time) return;
    setSubmitting(true);
    const payload = { people, date, time };
    onSubmit?.(payload);
    setTimeout(() => setSubmitting(false), 400);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-sidebar">
      <div className="w-full p-6 sm:p-8 md:p-12 lg:p-16 text-center">
        {/* Wrapper unico: card con due colonne attaccate */}
        <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-0">
            {/* Lato immagine */}
            <div className="relative h-64 sm:h-72 md:h-[420px] lg:h-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />

              {/* Gradient solo nella parte inferiore */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex w-full justify-center pb-4 md:pb-6 text-white">                <h2 className="text-2xl font-semibold drop-shadow-sm md:text-3xl lg:text-4xl">
                  Mahalo, mi casa es su casa!
                </h2>
              </div>
            </div>

            {/* Lato form, attaccato all'immagine (nessun gap) */}
            <div className="bg-background p-5 sm:p-6 md:p-8 lg:p-4">
              <h3 className="text-2xl font-semibold tracking-tight md:text-2xl lg:text-3xl">
                {title}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                {subtitle}
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-5 space-y-5 md:mt-6 md:space-y-6"
              >
                {/* Calendario + Orari (senza componente esterno) */}
                <div className="flex w-full flex-col lg:flex-row items-center justify-center rounded-xl border border-primary/70 p-3 sm:rounded-2xl sm:p-4 md:p-5 lg:p-4 gap-3 xl:gap-4">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(d) => d && (setDate(d), setTime(null))}
                    className=""
                    disabled={[{ before: new Date() }]}
                    locale={it}
                  />

                  {/* Lista orari */}
                  <div className="w-full lg:w-56 items-center justify-center align-middle">
                    <div className="grid gap-2 max-[480px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-1">
                      {eveningSlots.map((slot) => (
                        <Button
                          type="button"
                          key={slot}
                          variant={time === slot ? "default" : "outline"}
                          className={[
                            "w-full rounded-lg border",
                            "text-sm sm:text-base md:text-lg",
                            "py-2 sm:py-2.5 md:py-3",
                            time === slot
                              ? "border-primary"
                              : "border-primary/50",
                          ].join(" ")}
                          onClick={() => setTime(slot)}
                        >
                          {slot}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 md:space-y-3 text-left">
                  <Label
                    htmlFor="people"
                    className="text-sm sm:text-base md:text-lg"
                  >
                    Numero di persone
                  </Label>
                  <PeopleStepper
                    id="people"
                    min={1}
                    max={20}
                    value={people}
                    onChange={(val) => setPeople(val)}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-base md:text-lg cursor-pointer rounded-lg"
                  disabled={!date || !time || submitting}
                >
                  {submitting ? "Invio…" : "Conferma prenotazione"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
