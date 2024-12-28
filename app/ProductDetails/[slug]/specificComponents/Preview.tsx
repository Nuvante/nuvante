"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

const Preview = () => {
  const [hash, setHash] = useState(null);
  const { slug } = useParams(); // Destructure slug directly
  const [current, setCurrent] = useState("X");
  const [productImages, setProductImages] = useState<string[]>([]);

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
    setHash(slug);
  }, [hash, slug]);

  const handleSwitch = (str) => {
    setCurrent(str);
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
          src={productImages[4] || ""}
          alt="Main Preview"
        />
      </div>
      <div className="h-[400px] xl:h-[600px] w-full xl:w-[400px] p-4 ml-20">
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
            <div className="h-6 w-6 rounded-full bg-black border border-gray-300"></div>
          </div>
        </div>
        {/* <div className="mt-4">
          <p className="font-medium">Size:</p>
          <div className="flex items-center gap-2 mt-2">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                onClick={handleSwitch(size)}
                key={size}
                className={`px-4 py-2 border rounded-md ${
                  !(current === size) ? "hover:bg-gray-200" : "hover:bg-red-500"
                } ${current === size ? "bg-red-500" : "bg-gray-500"}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div> */}
        <div className="flex items-center mt-4">
          <button className="px-4 py-2 border rounded-l-md">-</button>
          <span className="px-4 py-2 border-t border-b">2</span>
          <button className="px-4 py-2 border rounded-r-md">+</button>
          <button className="ml-4 px-6 py-2 bg-red-500 text-white rounded-md">
            Buy Now
          </button>
          <button className="ml-4 px-4 py-2 border rounded-md">♡</button>
        </div>
        <div className="mt-6 border-t pt-4">
          <div className="flex items-start gap-4">
            <div className="text-2xl">🚚</div>
            <div>
              <p className="font-medium">Free Delivery</p>
              <p className="text-gray-600 text-sm">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 mt-4">
            <div className="text-2xl">↩️</div>
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
