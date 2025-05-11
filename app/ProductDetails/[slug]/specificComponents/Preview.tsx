"use client";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Image from "next/image";
import { GlobalContext } from "@/context/Global";
import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const logo = "/logo.png";

const Preview = () => {
  const [hash, setHash] = useState<string | string[]>("");

  const { slug } = useParams();
  const [current, setCurrent] = useState("");
  const [productImages, setProductImages] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<any>({});
  const [collapsible, setCollapsible] = useState<boolean[]>(Array(4).fill(false));
  const id: any = hash || slug;

  const context = useContext(GlobalContext);
  if (!context) throw new Error("GlobalContext is not provided.");
  const { GlobalWishlist, changeGlobalWishlist, GlobalCart, changeGlobalCart } = context;

  const user = useUser();

  const fetchProductData = async () => {
    try {
      const { data } = await axios.post(`/api/propagation/`, { id, every: false });
      const images = data.productImages || [];
      setProductImages(images.reverse());
      setCurrentProduct(data);
      setLoaded(true);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    if (!slug) {
      window.location.href = "https://google.com";
      return;
    }
    setHash(slug);
    fetchProductData();
  }, [slug]);

  const handleSwitch = (size: string) => setCurrent(size);

  const handleQuantityChange = (delta: number) => {
    if (quantity + delta >= 1) setQuantity(prev => prev + delta);
  };

  const updateCart = async (id: string) => {
    const isPresent = GlobalCart.includes(id);
    try {
      const res = await axios.post(`/api/cart`, { identifier: id, append: !isPresent });
      if (res.data === 200) {
        const updatedCart = isPresent ? GlobalCart.filter(item => item !== id) : [...GlobalCart, id];
        changeGlobalCart(updatedCart);
        alert("Cart updated successfully!");
      }
    } catch (err) {
      console.error("Cart error:", err);
    }
  };

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user.isSignedIn) {
      alert("Please sign in first.");
      window.location.href = "/sign-in";
      return;
    }
    updateCart(hash as string);
  };

  const updateWishlist = async (id: string) => {
    const isPresent = GlobalWishlist.includes(id);
    try {
      const res = await axios.post(`/api/wishlist`, { identifier: id, append: !isPresent });
      if (res.data === 200) {
        const updatedWishlist = isPresent ? GlobalWishlist.filter(item => item !== id) : [...GlobalWishlist, id];
        changeGlobalWishlist(updatedWishlist);
        setLoaded(true);
      }
    } catch (err) {
      console.error("Wishlist error:", err);
    }
  };

  const handleWishlistPresence = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user.isSignedIn) {
      alert("Please sign in first.");
      window.location.href = "/sign-in";
      return;
    }
    updateWishlist(hash as string);
  };

  const toggleCollapsible = (index: number) => {
    setCollapsible(prev => prev.map((val, i) => (i === index ? !val : val)));
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged: (s) => setCurrentSlide(s.track.details.rel),
    slides: { perView: 1, spacing: 15 },
    dragSpeed: 0.8,
    vertical: typeof window !== "undefined" ? window.innerWidth >= 1024 : false,
    renderMode: "performance",
  });

  return loaded ? (
    <div className="flex preview_container justify-between lg:flex-row flex-col-reverse gap-10 w-full">
      {/* Left Collapsibles */}
      <div className="flex flex-col gap-4 lg:p-4 lg:h-[78vh] lg:sticky lg:w-[34%] top-6 w-full">
        <div className="flex flex-col border-2 border-black p-4 gap-4">
          {["DESCRIPTION", "MATERIALS", "PACKAGING", "SHIPPING & RETURNS"].map((section, i) => (
            <div key={i} className="border-b-2 border-b-gray-200 text-sm">
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => toggleCollapsible(i)}
              >
                <span>{section}</span>
                <span>[+]</span>
              </div>
              <div className={`transition-all duration-500 ${collapsible[i] ? "h-[100px] py-2 overflow-y-auto" : "h-0 overflow-hidden"}`}>
                {currentProduct[section.toLowerCase().replace(/\s+/g, '')]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Images and Dots */}
      <div className="relative flex flex-col gap-4 lg:w-[50%] w-full">
        <div
          ref={sliderRef}
          className="keen-slider aspect-[3/4] lg:aspect-[4/5] 2xl:aspect-[5/6] w-full rounded-md overflow-hidden"
        >
          {productImages.map((img, idx) => (
            <div
              key={idx}
              className="keen-slider__slide flex items-center justify-center bg-white"
            >
              <img
                src={img}
                alt={`product-${idx}`}
                className="w-full max-w-full h-full object-contain border p-1 border-gray-400"
              />
            </div>
          ))}
        </div>

        {/* Desktop Vertical Dots */}
        <div className="hidden lg:flex absolute top-1/2 left-[-25px] -translate-y-1/2 flex-col items-center gap-2 z-10">
          {productImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full ${currentSlide === idx ? "bg-black" : "bg-gray-400"}`}
            ></button>
          ))}
        </div>

        {/* Mobile Horizontal Dots */}
        <div className="flex lg:hidden justify-center gap-2 mt-2">
          {productImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-2.5 h-2.5 rounded-full ${currentSlide === idx ? "bg-black" : "bg-gray-400"}`}
            ></button>
          ))}
        </div>

        {/* Mobile Info */}
        <div className="lg:hidden border-2 border-black flex flex-col gap-3 p-4">
          <h1 className="text-sm">{currentProduct.productName}</h1>
          <div className="flex gap-2">
            <span className="line-through text-xs">Rs. {currentProduct.cancelledProductPrice}</span>
            <span className="text-xs">Rs. {currentProduct.productPrice}</span>
          </div>
          <p className="text-xs">{currentProduct.productInfo}</p>
          <p className="text-[10px] opacity-70 border-b pb-2">SHIPPING, EXCHANGES AND RETURNS</p>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {["S", "M", "L", "XL"].map(size => (
              <div
                key={size}
                className={`border-2 py-2 text-center cursor-pointer ${size === current ? "bg-black text-white" : "text-black"}`}
                onClick={() => handleSwitch(size)}
              >
                {size}
              </div>
            ))}
          </div>
          <p className="text-[9px] text-gray-600 mt-2">This product has a larger fit than usual. Model is wearing L.</p>
          <button className="mt-2 border-2 border-black py-2" onClick={handleAddToCart}>ADD</button>
          <button className="bg-black text-white py-2">BUY IT NOW</button>
        </div>
      </div>

      {/* Desktop Info */}
      <div className="hidden lg:flex flex-col border-2 border-black gap-3 p-4 w-[33%] sticky top-4">
        <h1 className="text-lg">{currentProduct.productName}</h1>
        <div className="flex gap-2">
          <span className="line-through text-sm">Rs. {currentProduct.cancelledProductPrice}</span>
          <span className="text-sm">Rs. {currentProduct.productPrice}</span>
        </div>
        <p className="text-sm">{currentProduct.productInfo}</p>
        <p className="text-[11px] opacity-70 border-b pb-2">SHIPPING, EXCHANGES AND RETURNS</p>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {["S", "M", "L", "XL"].map(size => (
            <div
              key={size}
              className={`border-2 py-2 text-center cursor-pointer ${size === current ? "bg-black text-white" : "text-black"}`}
              onClick={() => handleSwitch(size)}
            >
              {size}
            </div>
          ))}
        </div>
        <p className="text-[10px] text-gray-600 mt-2">This product has a larger fit than usual. Model is wearing L.</p>
        <button className="mt-2 border-2 border-black py-2" onClick={handleAddToCart}>ADD</button>
        <button className="bg-black text-white py-2">BUY IT NOW</button>
      </div>
    </div>
  ) : (
    <motion.div className="w-fit mx-auto mt-20" animate={{ rotate: 360 }} transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}>
      <Image src={logo} alt="preloader" width={60} height={60} />
    </motion.div>
  );
};

export default Preview;
