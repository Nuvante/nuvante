"use client";
import React from "react";
import Image from "next/image";
import { EmblaCarousel } from "./Slider";

const caretRight = "./caret-right.svg";

export default function Hero() {
  return (
    <>
      <div className="flex gap-1 justify-between">
        <div className="flex flex-col gap-6 w-[20%] hero_left pt-10">
          <div className="flex gap-4 text-black cursor-pointer w-fit">
            <a href="#">T Shirts</a>
            <Image
              src={caretRight}
              alt="dropdown"
              width={20}
              height={20}
            ></Image>
          </div>
          <div className="flex gap-4 text-black cursor-pointer w-fit">
            <a href="#">Hoodies </a>
            <Image
              src={caretRight}
              alt="dropdown"
              width={20}
              height={20}
            ></Image>
          </div>
        </div>
        <div className=" w-[76%] pt-10">
          <EmblaCarousel></EmblaCarousel>
        </div>
      </div>
    </>
  );
}
