import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React from "react";
import LayoutNavbar from "./layout_navbar";
import MajorLayout from "./major_layout";
import Hero from "@/components/Hero";
import Arrivals from "@/components/Arrivals";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import productModel from "@/models/Product";
import clientModel from "@/models/Clients";
import { currentUser } from "@clerk/nextjs/server";
import { GlobalContextProvider } from "@/context/Global";
import { useContext } from "react";
import { GlobalContext } from "@/context/Global";
export default async function Page() {
  const response = await productModel.find({});
  const user = await currentUser();

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <MajorLayout>
        <Hero></Hero>
        <Arrivals fragment={response}></Arrivals>
        <Products fragment={response}></Products>
        <Services></Services>
      </MajorLayout>
      <Footer></Footer>
    </>
  );
}
