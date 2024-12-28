import React from "react";
import Bread from "./specificComponents/Bread";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preview from "./specificComponents/Preview";
import Suggestion from "./specificComponents/Suggestion";
import Heading from "@/components/Heading";
import clientModel from "@/models/Clients";

const Page = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="p-4">
        <div className="mt-6 ml-4 xl:ml-32">
          <Bread />
          <Preview />
          <div className="w-full xl:w-[1170px] h-auto">
            <div className="mt-12 xl:mt-36 flex flex-col gap-6">
              <div className="flex w-full justify-between items-center">
                <Heading message="Related Items" secondaryMessage="" />
              </div>
              <div className="flex flex-col gap-12">
                <Suggestion />
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
