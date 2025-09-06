"use client";

import React from "react";
import Slider from "@/components/ui/slider";
import { MapPin, FileText, Wrench } from "lucide-react";
import Image from "next/image";
import Card from "@/components/ui/card";

function Page() {
  return (
    <div>
      <Slider />
{/* {جزئیات توضیحی شرکت} */}
      <div className="max-w-7xl mt-20 mx-auto flex  justify-between transition-colors bg-section h-60 md:h-80 p-5 rounded-2xl">
        <div className="flex flex-col justify-center gap-10">
          <h2 className="text-3xl font-normal border-r-3  ps-2 border-cyan-500 ">شرکت فنی مهندسی  
          <span className="text-primary font-medium"> طاق </span>
          </h2>
        <p className="text-second">مجری سیستم ساخت و ساز خشک کناف، سقف کاذب، سقف کلیک، دیوار</p>
        </div>

        <div className="flex items-center">
          <Image
            src="/images/landing/infocard.jpg"
            width={500}
            height={500}
            alt="لوگو"
          ></Image>
        </div>
      </div>

     <div className="max-w-7xl mt-10 mx-auto flex  justify-between transition-colors  h-60 md:h-80 ">
    
      <Card title="دیتیل های فنی کناف" imageURl="/images/landing/kplus-Recourse_gray.png" link="" />
      <Card title="لیست قیمت" imageURl="/images/landing/list-price.png" link="" />
      </div>
    </div>
  );
}

export default Page;
