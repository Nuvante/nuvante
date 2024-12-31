import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React from "react";
import MajorLayout from "./major_layout";
import Hero from "@/components/Hero";
import Arrivals from "@/components/Arrivals";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import productModel from "@/models/Product";

export default async function Page() {
  const response: any = await productModel
    .find({})
    .then((data) => {
      return data;
    })
    .catch((error) => {
      localStorage.setItem("page.tsx/Products", error);
      window.location.href = "/404-error";
      return [];
    });

  return (
    <>
      <Navbar></Navbar>
      <MajorLayout>
        <Hero></Hero>
        <Arrivals fragment={response === null ? [] : response}></Arrivals>
        <Products fragment={response === null ? [] : response}></Products>
        <Services></Services>
      </MajorLayout>
      <Footer></Footer>
    </>
  );
}
