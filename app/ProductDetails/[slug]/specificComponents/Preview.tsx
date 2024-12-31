"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useContext } from "react";
import { GlobalContext } from "@/context/Global";
import { useUser } from "@clerk/nextjs";

const return_icon = "/icon-return.png";
const delivery_icon = "/icon-delivery.png";
const product_icon = "/product.png";

const Preview = () => {
  const [hash, setHash] = useState<string | string[]>("");
  const { slug } = useParams(); // Destructure slug directly
  const [current, setCurrent] = useState("");
  const [productImages, setProductImages] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [loaded, setLoaded] = useState(false);

  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("GlobalContext is not provided.");
  }
  const user = useUser();
  const { GlobalWishlist, changeGlobalWishlist, GlobalCart, changeGlobalCart } =
    context;

  useEffect(() => {
    const fetchImages = async () => {
      const id = hash || slug;
      try {
        const response = await axios.post(
          "http://localhost:3000/api/propagation/",
          { id: id, every: false }
        );
        setProductImages(response.data.productImages || []);
      } catch (error) {
        console.error("Error fetching product images:", error);
      }
    };

    fetchImages();
    if (slug === undefined) {
      console.log("the slug is undefined");
      window.location.href = "https://google.com";
    } else {
      setHash(slug);
    }
  }, [hash, slug]);

  const handleSwitch = (size: any) => {
    setCurrent(size);
  };

  const handleQuantityChange = (delta: any) => {
    if (quantity + delta < 1) {
      return;
    }
    setQuantity((prevQuantity) => prevQuantity + delta);
  };

  const handleWishlistPresence = async (event: React.MouseEvent) => {
    event.stopPropagation();
    console.log(user);
    if (!user.isSignedIn) {
      alert("You are not signed in, please sign in first to access wishlist!");
      alert("Redirecting...");
      window.location.href = "/sign-in";
      return;
    }
    try {
      const id: any = hash || slug;
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
            setLoaded(true);
          } else if (response.data === parseInt("404")) {
            alert(
              "there was an error updating the wishlist! Try refreshing the page!"
            );
          }
        });
    } catch (error) {
      console.error("Error updating wishlist:", error);
      alert(
        "There was an error updating the wishlist! Try refreshing the page."
      );
    }
  };

  return (
    <div className="flex flex-col xl:flex-row justify-betweengap-4 xl:gap-8 mt-6 ">
      <div className="flex xl:flex-col md:flex-row flex-col justify-between xl:h-[600px] w-full xl:w-[170px] items-center">
        {productImages.slice(0, 4).map((image, index) => (
          <div
            key={index}
            className="h-[138px] w-[170px] md:w-full bg-[#F5F5F5]"
          >
            <img
              className="mt-2 ml-3 h-[120px] w-[133px] object-contain"
              src={image}
              alt={`Preview ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="h-[400px] xl:h-[600px] w-full lg:ml-52 md:ml-24 xl:ml-0 md:w-[500px] bg-[#F5F5F5]">
        <img
          className="xl:ml-4 md:ml-6 md:mt-0 mt-10 xl:mt-16 h-[437px] w-[458px] object-contain"
          src={productImages[4] || product_icon}
          alt="Main Preview"
        />
      </div>
      <div className="h-[400px] xl:h-[600px] w-full xl:w-[400px] ml-16">
        <h1 className="text-2xl font-bold">Kaze GA Fuku T Shirt</h1>
        <div className="flex items-center mt-2">
          <div className="text-yellow-500">★★★★★</div>
          <span className="text-gray-500 ml-2">(150 Reviews)</span>
          <span className="text-green-600 ml-4">In Stock</span>
        </div>
        <p className="text-xl font-semibold mt-4">Rs.999</p>
        <p className="text-gray-600 mt-2">
          Nuvante’s First & Limited Edition Design for the Closed Ones
        </p>
        <div className="mt-4">
          <p className="font-medium">Colours:</p>
          <div className="flex items-center mt-2">
            <div className="h-6 w-6 rounded-full bg-black border border-gray-300">
              <Image
                src={delivery_icon}
                alt="delivery"
                width={50}
                height={50}
              ></Image>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-medium">Size:</p>
          <div className="flex items-center gap-2 mt-2">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                onClick={() => {
                  handleSwitch(size);
                }}
                key={size}
                className={`px-4 py-2 border rounded-md ${
                  !(current === size)
                    ? "hover:bg-white text-black"
                    : "hover:bg-red-500 text-white"
                } ${current === size ? "bg-red-500 text-white" : "bg-white"}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center mt-4">
          <button
            className="px-4 py-2 border rounded-l-md"
            onClick={() => {
              handleQuantityChange(-1);
            }}
          >
            -
          </button>
          <span className="px-4 py-2 border-t border-b">{quantity}</span>
          <button
            className="px-4 py-2 border rounded-r-md"
            onClick={() => {
              handleQuantityChange(1);
            }}
          >
            +
          </button>
          <button className="ml-4 px-6 py-2 bg-red-500 text-white rounded-md">
            Buy Now
          </button>
          <button
            onClick={handleWishlistPresence}
            className={`${
              GlobalWishlist.includes(String(hash)) ||
              GlobalWishlist.includes(String(slug))
                ? "bg-[#DB4444] text-white"
                : "bg-white text-black"
            } ml-4 px-4 py-2 border rounded-md text-[20px]`}
          >
            ♡
          </button>
        </div>
        <div className="mt-6 border-2 border-black flex flex-col rounded-md">
          <div className="flex items-start gap-4 p-4">
            <div className="text-2xl">
              <Image
                src={delivery_icon}
                alt="delivery"
                width={50}
                height={50}
              ></Image>
            </div>
            <div>
              <p className="font-medium">Free Delivery</p>
              <p className="text-gray-600 text-sm">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>
          <div className="w-[100%] bg-black h-[2px]"></div>
          <div className="flex items-start gap-4 mt-4 p-4">
            <div className="text-2xl">
              <Image
                src={return_icon}
                alt="return"
                width={50}
                height={50}
              ></Image>
            </div>
            <div>
              <p className="font-medium">Return Delivery</p>
              <p className="text-gray-600 text-sm">
                Free 30 Days Delivery Returns.{" "}
                <span className="text-blue-500">Details</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
