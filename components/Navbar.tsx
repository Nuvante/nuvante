"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { useTheme } from "next-themes";

const search = "/search.svg";
const heart = "/heart.svg";
const cart = "/cart.svg";
const User = "/user.svg";
const hamburger_light = "/hamburger_light.svg"; // white icon
const hamburger_dark = "/hamburger_dark.svg"; // black icon
const animated_light = "/animated_light.mp4";
const animated_dark = "/animated_dark.mp4";

export default function Navbar() {
  const [open, setOpen] = useState<Boolean>(false);
  const [dropdown, setDropdown] = useState<Boolean>(false);
  const { theme, resolvedTheme } = useTheme();
  const user = useUser();

  const selfRedirect = () => {
    window.location.href = "/";
  };

  const handleNavbar = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // Resolve theme on hydration
  const [currentTheme, setCurrentTheme] = useState("light");
  useEffect(() => {
    setCurrentTheme(resolvedTheme || "light");
  }, [resolvedTheme]);

  const logoSrc = currentTheme === "dark" ? animated_dark : animated_light;
  const hamburgerIcon =
    currentTheme === "dark" ? hamburger_light : hamburger_dark;

  return (
    <>
      {/* Desktop Navbar */}
      <div
        style={{ transition: "1s all ease" }}
        className={`navbar_wrapper navbar_main pb-1 w-full ${
          open ? "h-[420px]" : "h-[100px]"
        } lg:overflow-visible lg:flex overflow-y-hidden hidden`}
      >
        <div className="flex font-bold uppercase lg:justify-between justify-start lg:flex-row flex-col lg:items-center mt-4 navbar w-[90%] mx-auto">
          <div
            className="navbar-brand flex items-center cursor-pointer w-fit"
            onClick={selfRedirect}
          >
            <video
              className="top-0 p-1 w-[60px] md:h-fit md:w-[70px] lg:w-[80px] lg:h-[80px]"
              autoPlay
              loop
              playsInline
              muted
              onClick={selfRedirect}
            >
              <source src={logoSrc} type="video/mp4" />
            </video>
          </div>

          <div>
            <ul className="tracking-[2px] flex gap-4 lg:gap-8 ml-3 mt-4 lg:mt-0 lg:ml-0 lg:items-center flex-col text-black lg:flex-row w-fit">
              <li><a href="/" className="text-lg lg:text-base">Home</a></li>
              <li><Link href="/Contact" className="text-lg lg:text-base">Contact</Link></li>
              <li><Link href="/about" className="text-lg lg:text-base">About</Link></li>
              <li>
                <div
                  className="relative flex flex-col"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link href="/Products" className="text-lg lg:text-base">
                    Products
                  </Link>
                  <div
                    className={`bg-[#F5F5F5] absolute top-6 w-[200px] p-2 z-10 px-2 border ${
                      dropdown ? "block" : "hidden"
                    }`}
                  >
                    <div className="flex gap-4 text-black cursor-pointer w-fit mt-4">
                      <a href="/Products/T-shirt" className="border-b-[2px] border-b-[#F5F5F5]">
                        T Shirts
                      </a>
                    </div>
                    <div className="flex gap-4 text-black cursor-pointer w-fit mt-4">
                      <a href="/Products/Hoodie" className="border-b-[2px] border-b-[#F5F5F5]">
                        Hoodies
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="gap-4 lg:flex lg:flex-row flex flex-col lg:mt-0 mt-6">
            <div className="flex rounded-lg items-center bg-[#F5F5F5] px-4 w-fit">
              <input
                type="text"
                className="bg-[#F5F5F5] h-[35px] lg:h-[40px] outline-none w-[180px] lg:w-[220px] rounded-lg text-black text-sm lg:text-base"
                placeholder="What are you looking for?"
              />
              <Image src={search} width={25} height={25} className="cursor-pointer" alt="search" />
            </div>
            <div className="flex lg:flex-row items-center gap-4">
              <Link href="/Wishlist">
                <Image src={heart} width={25} height={25} className="cursor-pointer" alt="heart" />
              </Link>
              <Link href="/Cart">
                <Image src={cart} width={25} height={25} className="cursor-pointer" alt="cart" />
              </Link>
              <Link href={user.isLoaded && user.isSignedIn ? "/Profile" : "/sign-in"}>
                <Image src={User} width={25} height={25} className="cursor-pointer" alt="user" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        style={{ transition: "1s all ease" }}
        className={`navbar_responsive lg:hidden flex flex-col py-3 overflow-y-hidden ${
          open ? "h-[350px]" : "h-[90px]"
        }`}
      >
        <div className="flex justify-between items-center px-4">
          <div onClick={handleNavbar} className="lg:hidden cursor-pointer">
            <Image src={hamburgerIcon} alt="menu" width={24} height={24} />
          </div>
          <div className="navbar-brand flex items-center cursor-pointer w-fit" onClick={selfRedirect}>
            <video
              className="top-0 p-1 w-[60px] md:h-fit md:w-[70px] lg:w-[80px] lg:h-[80px]"
              autoPlay
              loop
              playsInline
              muted
              onClick={selfRedirect}
            >
              <source src={logoSrc} type="video/mp4" />
            </video>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/Wishlist">
              <Image src={heart} width={25} height={25} className="cursor-pointer" alt="heart" />
            </Link>
            <Link href="/Cart">
              <Image src={cart} width={25} height={25} className="cursor-pointer" alt="cart" />
            </Link>
            <Link href={user.isLoaded && user.isSignedIn ? "/Profile" : "/sign-in"}>
              <Image src={User} width={25} height={25} className="cursor-pointer" alt="user" />
            </Link>
          </div>
        </div>

        <div>
          <ul className="tracking-[2px] flex gap-4 ml-3 mt-4 flex-col font-semibold text-black w-fit">
            <li><a href="/" className="text-lg">Home</a></li>
            <li><Link href="/Contact" className="text-lg">Contact</Link></li>
            <li><Link href="/about" className="text-lg">About</Link></li>
            <li>
              <div
                className="relative flex flex-col"
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <Link href="/Products" className="text-lg">Products</Link>
                <div
                  className={`bg-[#F5F5F5] absolute top-6 w-[200px] p-2 z-10 px-2 border ${
                    dropdown ? "block" : "hidden"
                  }`}
                >
                  <div className="flex gap-4 text-black cursor-pointer w-fit mt-4">
                    <a href="/Products/T-shirt" className="border-b-[2px] border-b-[#F5F5F5]">
                      T Shirts
                    </a>
                  </div>
                  <div className="flex gap-4 text-black cursor-pointer w-fit mt-4">
                    <a href="/Products/Hoodie" className="border-b-[2px] border-b-[#F5F5F5]">
                      Hoodies
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <div className="gap-4 flex flex-col mt-6">
            <div className="flex rounded-lg items-center bg-[#F5F5F5] px-4 w-fit">
              <input
                type="text"
                className="bg-[#F5F5F5] h-[35px] outline-none w-[180px] rounded-lg text-black text-sm"
                placeholder="What are you looking for?"
              />
              <Image src={search} width={25} height={25} className="cursor-pointer" alt="search" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
