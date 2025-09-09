"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import { sliderItems } from "@/data/sliderdata";
import { Navigation, Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
      >
        {sliderItems.map((item , idx) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-90 md:h-190 bg-gray-100 rounded-lg overflow-hidden flex flex-col items-center justify-center text-center">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="w-full h-full object-cover absolute inset-0"
                priority={idx === 0} 
              />
              <div className="bg-bg/80 p-4 rounded-md z-10 relative">
                <h3 className="text-lg font-bold md:text-6xl font-vazirmatn text-primary">
                  {item.title}
                </h3>

             
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
