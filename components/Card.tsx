"use client";
import React, { useContext, useState } from "react";
import Stars from "./Stars";
import axios from "axios";
import { GlobalContext } from "@/context/Global";
import { useUser } from "@clerk/nextjs";

type propType = {
  id: string;
  src: string;
  productName: string;
  productPrice: number;
  cancelledPrice: number;
  reviews: number;
  stars: number;
  status: string;
};

export default function Card({
  id,
  src,
  productName,
  productPrice,
  cancelledPrice,
  reviews,
  stars,
  status,
}: propType) {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("GlobalContext is not provided.");
  }

  const user = useUser();

  const { GlobalWishlist, changeGlobalWishlist, GlobalCart, changeGlobalCart } =
    context;

  const [loadingWishlist, setLoadingWishlist] = useState(false);
  const [loadingCart, setLoadingCart] = useState(false);

  /**
   * 1.Handles the obnoxious operations related to wishlist using a global context.
   * 2.stopPropagation stops the default event listener on the card itself.
   * 3.loadingWishlist handles the timer effect you see after clicking on wishlist.
   * 4.isPresent is checking if the current id is already present in the globalWishlist/globalCart, if yes don't append, just delete, otherwise append. (kind of similar to a toggle state used when making a navbar)
   * 5.Promises are handled so that null data is not provided to the global state.
   */
  const handleWishlistPresence = async (event: React.MouseEvent) => {
    event.stopPropagation();
    console.log(user);
    if (!user.isSignedIn) {
      alert("You are not signed in, please sign in first to access wishlist!");
      alert("Redirecting...");
      window.location.href = "/sign-in";
      return;
    }
    setLoadingWishlist(true);

    try {
      const isPresent = GlobalWishlist.includes(id);
      await axios
        .post("http://localhost:3000/api/wishlist", {
          identifier: id,
          append: !isPresent,
        })
        .then((response: any) => {
          if (response.data === parseInt("200")) {
            const updatedWishlist = isPresent
              ? GlobalWishlist.filter((item) => item !== id)
              : [...GlobalWishlist, id];

            changeGlobalWishlist(updatedWishlist);
            setLoadingWishlist(false);
            console.log(updatedWishlist);
          } else if (response.data === parseInt("404")) {
            alert(
              "there was an error updating the wishlist! Try refreshing the page!"
            );
            setLoadingWishlist(false);
          }
        });
    } catch (error) {
      console.error("Error updating wishlist:", error);
      alert(
        "There was an error updating the wishlist! Try refreshing the page."
      );
    }
  };

  const handleAddToCart = async (event: React.MouseEvent) => {
    event.stopPropagation();
    if (!user.isSignedIn) {
      alert("You are not signed in, please sign in first to access cart!");
      alert("Redirecting...");
      window.location.href = "/sign-in";
      return;
    }
    setLoadingCart(true);

    try {
      const isPresent = GlobalCart.includes(id);
      await axios
        .post("http://localhost:3000/api/cart", {
          identifier: id,
          append: !isPresent,
        })
        .then((response: any) => {
          if (response.data === parseInt("200")) {
            const updatedCart = isPresent
              ? GlobalCart.filter((item) => item !== id)
              : [...GlobalCart, id];

            changeGlobalCart(updatedCart);
            setLoadingCart(false);
          } else if (response.data === parseInt("404")) {
            alert(
              "there was an error updating the cart! Try refreshing the page!"
            );
          }
        });
    } catch (error) {
      console.error("Error updating wishlist:", error);
    }
  };

  return (
    <div
      onClick={() => (window.location.href = `/ProductDetails/${id}`)}
      className="card sm:w-auto w-full relative flex flex-col gap-4 cursor-pointer group"
    >
      <div className="card-body flex sm:justify-center justify-center relative bg-[#F5F5F5] sm:w-fit w-full p-6 rounded-lg">
        <img src={src} alt={productName} className="rounded-md w-auto" />
        {status === "new" && (
          <h1 className="absolute top-1 left-1 rounded-lg bg-[#00FF66] px-3 py-1 text-white text-sm font-bold">
            NEW
          </h1>
        )}
        <button
          onClick={handleWishlistPresence}
          disabled={loadingWishlist}
          className={`absolute ${
            GlobalWishlist.includes(id) ? "bg-red-500" : "bg-white"
          } rounded-full top-2 right-2 w-7 h-7 ${
            loadingWishlist ? "opacity-50" : "opacity-70"
          } hover:opacity-100 transition-opacity`}
        >
          {loadingWishlist ? "⏳" : "❤️"}
        </button>
        <button
          onClick={handleAddToCart}
          disabled={loadingCart}
          className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white w-[90%] py-2 px-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        >
          {loadingCart
            ? "⏳"
            : GlobalCart.includes(id)
            ? "Remove from cart"
            : "Add to cart"}
        </button>
      </div>
      <div className="card-details flex flex-col gap-3">
        <h1 className="font-semibold text-black">{productName}</h1>
        <div className="flex gap-2">
          <h1 className="text-[#DB4444] font-bold">Rs. {productPrice}</h1>
          <h1 className="line-through text-gray-500">Rs. {cancelledPrice}</h1>
        </div>
        <div className="flex gap-14">
          <Stars count={stars} />
          <h1 className="text-black">({reviews})</h1>
        </div>
      </div>
    </div>
  );
}
