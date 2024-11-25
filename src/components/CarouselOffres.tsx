"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import * as React from "react";

export default function CarouselOffres() {
  const numberArray = Array.from({ length: 7 }, (_, i) => i + 1);
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
            <CarouselItem key={number} className="pl-1 item-embla">
              <div className="flex justify-center items-center h-[400px]">
                <Image
                  src={`/carousel/${number}.png`}
                  alt={`Offre ${number}`}
                  className="object-cover pl-2"
                  width={355}
                  height={200}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
