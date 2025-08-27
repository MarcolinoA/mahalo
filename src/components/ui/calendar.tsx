"use client";

import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  components: userComponents,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  const defaultClassNames = {
    // layout
    months: "relative flex flex-col sm:flex-row gap-4",
    month: "w-full",
    month_caption:
      "relative mx-6 sm:mx-8 md:mx-10 mb-1 flex h-9 items-center justify-center z-20",
    caption_label:
      "text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl font-semibold",
    nav: "absolute top-0 flex w-full justify-between z-10",
    button_previous: cn(
      buttonVariants({ variant: "ghost" }),
      "cursor-pointer size-8 sm:size-9 lg:size-8 xl:size-9 text-primary hover:text-foreground p-0"
    ),
    button_next: cn(
      buttonVariants({ variant: "ghost" }),
      "cursor-pointer size-8 sm:size-9 lg:size-8 xl:size-9 text-primary hover:text-foreground p-0"
    ),
    weekday:
      "size-9 p-0 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-medium text-muted-foreground/80",
    day_button: [
      "cursor-pointer relative flex",
      "size-9 sm:size-10 md:size-11 lg:size-10 xl:size-11",
      "items-center justify-center whitespace-nowrap rounded-md p-0",
      "text-sm sm:text-base md:text-lg lg:text-base xl:text-lg",
      "text-foreground",
      "group-[[data-selected]:not(.range-middle)]:[transition-property:color,background-color,border-radius,box-shadow]",
      "group-[[data-selected]:not(.range-middle)]:duration-150",
      "group-data-disabled:pointer-events-none",
      "hover:not-in-data-selected:bg-accent",
      "group-data-selected:bg-primary",
      "hover:not-in-data-selected:text-foreground",
      "group-data-selected:text-primary-foreground",
      "group-data-disabled:text-foreground/30",
      "group-data-disabled:line-through",
      "group-data-outside:text-foreground/30",
      "group-data-selected:group-data-outside:text-primary-foreground",
      "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]",
      "group-[.range-start:not(.range-end)]:rounded-e-none",
      "group-[.range-end:not(.range-start)]:rounded-s-none",
      "group-[.range-middle]:rounded-none",
      "group-[.range-middle]:group-data-selected:bg-accent",
      "group-[.range-middle]:group-data-selected:text-foreground",
    ].join(" "),

    day: "group size-9 sm:size-10 md:size-11 lg:size-10 xl:size-11 px-0 py-px",
    range_start: "range-start",
    range_end: "range-end",
    range_middle: "range-middle",
    today:
      "*:after:pointer-events-none *:after:absolute *:after:bottom-1 *:after:start-1/2 *:after:z-10 *:after:size-[3px] *:after:-translate-x-1/2 *:after:rounded-full *:after:bg-primary [&[data-selected]:not(.range-middle)>*]:after:bg-background [&[data-disabled]>*]:after:bg-foreground/30 *:after:transition-colors",

    outside:
      "text-muted-foreground data-selected:bg-accent/50 data-selected:text-muted-foreground",
    hidden: "invisible",
    week_number: "size-9 p-0 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-muted-foreground/80",
  };

  const mergedClassNames: typeof defaultClassNames = Object.keys(
    defaultClassNames
  ).reduce(
    (acc, key) => ({
      ...acc,
      [key]: classNames?.[key as keyof typeof classNames]
        ? cn(
            defaultClassNames[key as keyof typeof defaultClassNames],
            classNames[key as keyof typeof classNames]
          )
        : defaultClassNames[key as keyof typeof defaultClassNames],
    }),
    {} as typeof defaultClassNames
  );

  const defaultComponents = {
    Chevron: (props: {
      className?: string;
      size?: number;
      disabled?: boolean;
      orientation?: "left" | "right" | "up" | "down";
    }) => {
      if (props.orientation === "left") {
        return <ChevronLeftIcon size={16} {...props} aria-hidden="true" />;
      }
      return <ChevronRightIcon size={16} {...props} aria-hidden="true" />;
    },
  };

  const mergedComponents = {
    ...defaultComponents,
    ...userComponents,
  };

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("w-fit", className)}
      classNames={mergedClassNames}
      components={mergedComponents}
      {...props}
    />
  );
}

export { Calendar };
