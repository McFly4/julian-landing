"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import * as React from "react";

export default function CarouselOffres() {
  const numberArray = Array.from({ length: 6 }, (_, i) => i + 1);
  return (
    <div>
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {numberArray.map((number) => (
            <CarouselItem
              key={number}
              className="pl-1 item-embla flex items-center"
            >
              <div className="flex justify-center items-center mt-[40px]">
                <img
                  src={`/brands/${number}.svg`}
                  alt={`Offre ${number}`}
                  className="object-cover pl-[70px] w-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
