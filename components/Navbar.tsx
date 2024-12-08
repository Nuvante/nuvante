"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const logo_l = "./logo_l.svg";
const logo_r = "./logo_r.svg";
const search = "./search.svg";
const heart = "./heart.svg";
const cart = "./cart.svg";
const user = "./user.svg";

const transition = {
  transition: "1s all linear",
};

export default function Navbar() {
  const [open, setOpen] = useState<Boolean>(false);

  const selfRedirect = () => {
    //~ pass
    window.location.href = "/";
  };

  const handleNavbar = () => {
    //~ pretty similar to !false or !true, apparently xors the current navbar state by 1.
    // ! current_state ^ 1
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <div
        onClick={handleNavbar}
        className="hamburger lg:hidden absolute top-20 right-9  flex-col gap-2 cursor-pointer flex"
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div
        style={{
          transition: "1s all ease",
        }}
        className={`navbar_wrapper pb-1 w-full ${open ? "h-[400px]" : "h-[96px]"
          } overflow-hidden`}
      >
        <div className="flex lg:justify-between justify-start lg:flex-row flex-col lg:items-center mt-6 navbar w-[90%] mx-auto">
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
            <ul className="flex gap-6 lg:gap-10 ml-3 mt-2 lg:mt-0 lg:ml-0 lg:items-center flex-col text-black lg:flex-row w-fit">
              <li>
                <a href="/" className="underline underline-offset-4">
                  Home
                </a>
              </li>
              <li>
                <a href="/Contact">Contact</a>
              </li>
              <li>
                <a href="/404-error">About</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
            </ul>
          </div>
          <div className="gap-4 lg:flex lg:flex-row flex flex-col lg:mt-0 mt-6">
            <div className="flex rounded-lg items-center bg-[#F5F5F5] px-4 w-fit ">
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
            <div className="flex lg:flex-row items-center gap-4">
              <Link href='/Wishlist'>
                <Image
                  src={heart}
                  width={30}
                  height={30}
                  className="cursor-pointer"
                  alt="heart"
                ></Image>
              </Link>
              <Link href='/Cart'>
                <Image
                  src={cart}
                  width={30}
                  height={30}
                  className="cursor-pointer"
                  alt="cart"
                ></Image>
              </Link>
              <Link href="/Profile">
                <Image
                  src={user}
                  width={30}
                  height={30}
                  className="cursor-pointer"
                  alt="user"
                ></Image>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
