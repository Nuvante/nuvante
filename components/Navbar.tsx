"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

const logo_l = "./logo_l.svg";
const logo_r = "./logo_r.svg";
const search = "./search.svg";
const heart = "./heart.svg";
const cart = "./cart.svg";
const user = "./user.svg";

export default function Navbar() {
  const [open, setOpen] = useState<Boolean>(false);

  const selfRedirect = () => {
    window.location.href = "/";
  };

  return (
    <>
      <div className="navbar_wrapper pb-1 w-full ">
        <div className="flex justify-between items-center mt-6 navbar w-[90%] mx-auto">
          <div
            onClick={() => {
              selfRedirect();
            }}
            className="navbar-brand flex items-center cursor-pointer"
          >
            <Image src={logo_l} width={54} height={30} alt="logo_left"></Image>
            <Image
              src={logo_r}
              width={100}
              height={60}
              alt="logo-right"
            ></Image>
          </div>
          <div>
            <ul className="flex gap-10 items-center text-black">
              <li>
                <a href="#" className="underline underline-offset-4">
                  Home
                </a>
              </li>
              <li>
                <a href="/Contact">Contact</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-4">
            <div className="flex rounded-lg items-center bg-[#F5F5F5] px-4">
              <input
                type="text"
                className="bg-[#F5F5F5] h-[45px] outline-none w-[220px] rounded-lg text-black"
                placeholder="What are you looking for?"
              ></input>
              <div className="">
                <Image
                  src={search}
                  width={30}
                  className="cursor-pointer"
                  height={30}
                  alt="search"
                ></Image>
              </div>
            </div>
            <Image
              src={heart}
              width={30}
              height={30}
              className="cursor-pointer"
              alt="heart"
            ></Image>
            <Image
              src={cart}
              width={30}
              height={30}
              className="cursor-pointer"
              alt="cart"
            ></Image>

            <Image
              src={user}
              width={30}
              height={30}
              className="cursor-pointer"
              alt="user"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
