"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function CarouselOffres() {
  const numberArray = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <div className="my-10">
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="verticalSwiper"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        speed={2000}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {numberArray.map((number) => (
          <SwiperSlide key={number}>
            <img
              src={`/carousel/${number}.png`}
              alt={`Offre ${number}`}
              className="object-cover h-[180px] border-2 border-white"
              style={{ borderRadius: "5px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
