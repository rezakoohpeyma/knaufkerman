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
            <div className="w-full h-90 md:h-170 bg-gray-100 rounded-lg overflow-hidden flex flex-col items-center justify-center text-center">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="w-full h-full object-cover absolute inset-0"
                priority={idx === 0} 
              />
              <div className="bg-bg/80 p-4 rounded-md z-10 relative">
                <h3 className="text-lg md:text-2xl font-vazirmatn text-text">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-text/80">
                  {item.description}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    className="mt-2 inline-block text-primary font-medium"
                  >
                    مشاهده بیشتر
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
