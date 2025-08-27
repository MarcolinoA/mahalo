"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";

export type PeopleStepperProps = {
  id?: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (v: number) => void;
  className?: string;
};

export default function PeopleStepper({
  id,
  value,
  min = 1,
  max = 20,
  step = 1,
  onChange,
  className,
}: PeopleStepperProps) {
  const clamp = (v: number) => Math.min(max, Math.max(min, v));
  const dec = () => onChange(clamp(value - step));
  const inc = () => onChange(clamp(value + step));

  return (
    <div className={`flex w-full items-center gap-2 ${className ?? ""}`}>
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={dec}
        aria-label="Diminuisci"
        className="rounded-lg border border-primary flex-shrink-0 cursor-pointer"
      >
        <Minus className="h-4 w-4 text-primary" />
      </Button>
      <Input
        id={id}
        inputMode="numeric"
        pattern="[0-9]*"
        className="flex-1 w-20 text-center border border-primary rounded-lg"
        value={value}
        onChange={(e) => {
          const parsed = Number(e.target.value.replace(/[^0-9]/g, ""));
          if (!Number.isNaN(parsed)) onChange(clamp(parsed));
          else onChange(min);
        }}
      />
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={inc}
        aria-label="Aumenta"
        className="rounded-lg border border-primary flex-shrink-0 cursor-pointer"
      >
        <Plus className="h-4 w-4 text-primary" />
      </Button>
    </div>
  );
}
