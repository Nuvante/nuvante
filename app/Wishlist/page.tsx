"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { GlobalContext } from "@/context/Global";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [currentWishlist, setCurrentWishlist] = useState([]);

  const {
    GlobalWishlist,
    GlobalCart,
    changeGlobalWishlist,
    changeGlobalCart,
  }: any = useContext(GlobalContext);

  useEffect(() => {
    const propagate_data = async () => {
      const localProducts = await axios
        .post("http://localhost:3000/api/propagation/", {
          every: true,
        })
        .then((response) => {
          return response.data;
        });
      setProducts(localProducts);
      const currentWishlist = await axios
        .get("http://localhost:3000/api/propagation_client/")
        .then((response) => {
          return response.data.wishlist;
        });

      setCurrentWishlist(currentWishlist);
    };
    propagate_data();
  }, [GlobalWishlist]);

  const handleBag = async () => {
    for (let i = 0; i < GlobalWishlist.length; ++i) {
      if (!GlobalCart.includes(GlobalWishlist[i])) {
        changeGlobalCart(GlobalWishlist[i]);
        const response = await axios.post("http://localhost:3000/api/cart", {
          identifier: GlobalWishlist[i],
          append: true,
        });
        console.log(response);
      }
    }
    console.log("the global cart: ", GlobalCart);
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div className="p-4">
        <div className="mt-6 ml-4 xl:ml-32">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Wishlist</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="flex flex-col xl:flex-col xl:justify-between xl:w-[1170px] w-full xl:ml-28 mt-8">
          <div className="flex flex-col xl:flex-row xl:justify-between">
            <div>
              <h1 className="p-5">Wishlist ({currentWishlist.length})</h1>
            </div>
            <div>
              <button
                className="w-full xl:w-[223px] h-[56px] text-center border border-black"
                onClick={handleBag}
              >
                Move All to bag
              </button>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row gap-x-5 w-full mt-7">
            {products.map((product: any, index: any) => {
              let smol: any = product._id;
              if (currentWishlist.includes(smol)) {
                return (
                  <Card
                    id={product._id}
                    key={index}
                    productName={product.productName}
                    productPrice={Number(product.productPrice)}
                    cancelledPrice={product.cancelledProductPrice}
                    reviews={product.productReviews.length} //* Assuming number of reviews (NaN)
                    stars={product.productStars}
                    src={product.productImages[0]}
                    status={product.latest ? "new" : "old"}
                  ></Card>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="h-auto w-full xl:h-[438px] xl:w-[1170px]"></div>
      <Footer />
    </div>
  );
};

export default Page;
