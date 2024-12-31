import React from "react";
import Image from "next/image";

const facebook_icon = "/facebook.svg";
const gram_icon = "/instagram.svg";
const linkedin_icon = "/linkedin.svg";
const caret_right = "/caret-right.svg";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 mt-40">
      <div className=" w-[90%] mx-auto flex lg:flex-row flex-col lg:gap-20 justify-between gap-10 px-6">
        <div className="w-full  flex flex-col">
          <h3 className="font-semibold text-2xl">Nuvante</h3>
          <p className="text-[20px] mt-4">
            Subscribe
            <br />
          </p>
          <p className="mt-6 mb-5">
            Get The Latest Notifications About Offers & Deals.
          </p>
          <div className="flex items-center border border-white rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-full outline-none bg-black text-white text-sm"
            />
            <button className="p-3 bg-white text-black">
              <Image
                src={caret_right}
                width={26}
                height={26}
                alt="caret"
              ></Image>
            </button>
          </div>
          <div className="flex gap-6 mt-6 text-xl">
            <a href="#" className="hover:text-gray-500">
              <Image
                src={facebook_icon}
                alt="facebook_icon_footer"
                width={25}
                height={25}
              ></Image>
            </a>
            <a href="#" className="hover:text-gray-500">
              <Image
                src={gram_icon}
                alt="gram_icon_footer"
                width={25}
                height={25}
              ></Image>
            </a>
            <a href="#" className="hover:text-white">
              <Image
                src={linkedin_icon}
                alt="linkedin_icon_footer"
                width={25}
                height={25}
              ></Image>
            </a>
          </div>
        </div>

        {/* Support Section */}
        <div className="w-full md:w-1/4 flex flex-col gap-6">
          <h3 className="font-semibold text-lg">Support</h3>
          <p className="text-gray-400">New Delhi, India.</p>
          <p className="text-gray-400">nuvantestores@gmail.com</p>
          <p className="text-gray-400">+91 9899044148</p>
        </div>

        <div className="w-full md:w-1/4 flex flex-col gap-6">
          <h3 className="font-semibold text-lg">Account</h3>
          <ul className="text-gray-400 flex flex-col gap-2">
            <li>
              <a href="./Profile" className="hover:text-white">
                My Account
              </a>
            </li>
            <li>
              <a href="/Sign-up" className="hover:text-white">
                Login / Register
              </a>
            </li>
            <li>
              <a href="/Cart" className="hover:text-white">
                Cart
              </a>
            </li>
            <li>
              <a href="/Wishlist" className="hover:text-white">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shop
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div className="w-full md:w-1/4 flex flex-col gap-6">
          <h3 className="font-semibold text-lg">Quick Link</h3>
          <ul className="text-gray-400 flex flex-col gap-2">
            <li>
              <a href="/Contact" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="/Contact" className="hover:text-white">
                About us
              </a>
            </li>
            <li>
              <a href="/Contact" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/Contact" className="hover:text-white">
                Return Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © Copyright. All rights reserved.
      </div>
    </footer>
  );
}
