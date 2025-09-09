import React, { FC } from "react";
import Image from "next/image";
interface CardProps {
  title?: string;
  imageURl: string;
  link?: string;
}
const Card: FC<CardProps> = ({ title, imageURl, link }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-section w-[48%] rounded-3xl">
      <Image
        width={200}
        height={200}
        src={imageURl}
        alt="title"
        className="object-cover"
      />
      <h3 className=" font-vazirmatn font-medium">{title}</h3>
    </div>
  );
};

export default Card;
