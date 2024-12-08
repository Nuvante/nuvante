"use client";
import React from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const Phone = "./icons-phone.svg";
const mail = "./icons-mail.svg";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="p-4">
        <div className="md:mt-6 ml-32">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  Home
                  {/* <Link href="/">Home</Link> */}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Contact Us!</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex flex-col md:flex-row mt-5 justify-center">
          <div className="flex flex-col w-full md:w-[340px] h-auto md:h-auto md:mt-16 border rounded-[4px] bg-white p-4">
            <div className="w-full md:w-auto md:mt-8 border-b-2">
              <div className="flex flex-row h-[40px] w-[135px]">
                <Image src={Phone} alt="Phone" width={40} height={40}></Image>
                <h1 className="text-[16px] text-center pt-2 font-semibold w-[79px] ">
                  Call Us
                </h1>
              </div>

              <p className="pt-3">We are available 24/7.</p>
              <p className="pt-3 pb-9">Phone: +91 9899044148</p>
            </div>
            <div className="w-full md:w-auto md:mt-8">
              <div className="flex flex-row h-[40px] w-96">
                <Image src={mail} alt="Mail" width={40} height={40}></Image>
                <h1 className="text-[16px] text-center pt-2 pl-2 font-semibold w-[95px]">
                  Write to us
                </h1>
              </div>

              <p className="pt-3">
                Fill out the form and we will contact you within 24 hours.
              </p>
              <p className="pt-3">Email: nuvantestores@gmail.com</p>
            </div>
          </div>
          <div className="w-full md:w-[800px] h-auto md:h-auto bg-white p-6 md:mt-16 lg:ml-5 rounded-[">
            <div className="flex flex-col w-full h-auto mt-9">
              <div className="flex flex-col md:flex-row md:justify-evenly md:space-x-4">
                <div className="w-full md:w-1/3 md:ml-1 mb-4 md:mb-0">
                  <input
                    className="w-full h-[50px] px-4 py-2 outline-none bg-[#F5F5F5]"
                    type="text"
                    placeholder="Your Name *"
                  />
                </div>
                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                  <input
                    className="w-full px-4 py-2 h-[50px] bg-[#F5F5F5] outline-none"
                    type="text"
                    placeholder="Your Email *"
                  />
                </div>
                <div className="w-full md:w-[28%]">
                  <input
                    className="w-full h-[50px] p-2 bg-[#F5F5F5] px-4 py-2 outline-none"
                    type="tel"
                    placeholder="Your Phone *"
                  />
                </div>
              </div>
              <div className="mt-8">
                <textarea
                  className="h-[207px] w-full md:w-[99%] px-4 py-2 outline-none md:ml-2 bg-[#F5F5F5]"
                  name="message"
                  id=""
                  placeholder="Your Message *"
                ></textarea>
              </div>
              <div className="flex justify-end md:pr-4 mt-4">
                <button className="text-center rounded-[4px] bg-[#DB4444] h-[56px] w-[215px] text-white mb-10">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
