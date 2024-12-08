import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-10 mt-40 bg-black text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-between gap-10 px-6 md:px-10">
        {/* Nuvante Section */}
        <div className="w-full md:w-1/4 flex flex-col gap-4">
          <h3 className="font-semibold text-lg">Nuvante</h3>
          <p className="text-gray-400">
            Subscribe
            <br />
            Get The Latest Notifications About Offers & Deals.
          </p>
          <div className="flex items-center bg-white text-black rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-full outline-none bg-black text-white text-sm rounded-l-lg"
              style={{ border: "2px solid white" }}
            />
            <button className=" p-3 rounded-r-lg">
              <Image src="/send.svg" alt="send" width={20} height={20} />
            </button>
          </div>
          <div className="flex gap-4 mt-4 items-center">
            <a href="#" className="text-white hover:text-gray-500">
              <Image
                src="/facebook.svg"
                alt="facebook"
                width={24}
                height={24}
              />
            </a>
            <a href="#" className="text-white hover:text-gray-500">
              <Image src="/twitter.svg" alt="twitter" width={24} height={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-500">
              <Image
                src="/linkedin.svg"
                alt="linkedin"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>

        {/* Support Section */}
        <div className="w-full md:w-1/4 flex flex-col gap-4">
          <h3 className="font-semibold text-lg">Support</h3>
          <p className="text-gray-400">G - 41/2, Molarband Extn, Badarpur Border, New Delhi - 110044</p>
          <p className="text-gray-400">nuvantestores@gmail.com</p>
          <p className="text-gray-400">+91 9899044148</p>
        </div>

        {/* Account Section */}
        <div className="w-full md:w-1/4 flex flex-col gap-4">
          <h3 className="font-semibold text-lg">Account</h3>
          <ul className="text-gray-400 flex flex-col gap-2">
            <li>
              <a href="./Profile" className="hover:text-white">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Login / Register
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Cart
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
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

        {/* Quick Links Section */}
        <div className="w-full md:w-1/4 flex flex-col gap-4">
          <h3 className="font-semibold text-lg">Quick Link</h3>
          <ul className="text-gray-400 flex flex-col gap-2">
            <li>
              <a href="/Contact" className="hover:text-white">
                Contact
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
