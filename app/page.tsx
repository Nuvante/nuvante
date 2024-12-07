import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
// import Landing from "@/Layouts/landing";
import react from "react";
import LayoutNavbar from "./layout_navbar";
import MajorLayout from "./major_layout";
import Hero from "@/components/Hero";
import Arrivals from "@/components/Arrivals";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <MajorLayout>
        <Hero></Hero>
        <Arrivals></Arrivals>
        <Products></Products>
        <Services></Services>
      </MajorLayout>
      <Footer></Footer>
    </>
  );
}
