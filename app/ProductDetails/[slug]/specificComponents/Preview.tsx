"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useContext } from "react";
import { GlobalContext } from "@/context/Global";
import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";

const return_icon = "/icon-return.png";
const delivery_icon = "/icon-delivery.png";
const product_icon = "/product.png";

const domain = process.env.DOMAIN;
const logo = "/logo_l.svg";

const Preview = () => {
  const [hash, setHash] = useState<string | string[]>("");
  const { slug } = useParams(); // Destructure slug directly
  const [current, setCurrent] = useState("");
  const [productImages, setProductImages] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const id: any = hash || slug;
  const [currentProduct, setCurrentProduct] = useState({});
  const [collapsible, setCollapsible] = useState<boolean[]>(
    Array(4).fill(false)
  );

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
        const response = await axios
          .post(`/api/propagation/`, {
            id: id,
            every: false,
          })
          .then((data) => {
            var altered = data.data.productImages || [];
            altered.reverse();
            setProductImages(altered);
            setCurrentProduct(data.data);
            console.log("current product: \n", currentProduct);
          });

        setLoaded(true);
        productImages.reverse();
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

  const handleAddToCart = async (event: React.MouseEvent) => {
    event.stopPropagation();

    if (!user.isSignedIn) {
      alert("You are not signed in, please sign in first to access cart!");
      alert("Redirecting...");
      window.location.href = "/sign-in";
      return;
    }
    const id: any = hash || slug;
    try {
      const isPresent = GlobalCart.includes(id);
      await axios
        .post(`/api/cart`, {
          identifier: id,
          append: !isPresent,
        })
        .then((response: any) => {
          if (response.data === parseInt("200")) {
            const updatedCart = isPresent
              ? GlobalCart.filter((item) => item !== id)
              : [...GlobalCart, id];

            changeGlobalCart(updatedCart);
            alert("Cart updated successfully!");
          } else if (response.data === parseInt("404")) {
            alert(
              "there was an error updating the cart! Try refreshing the page!"
            );
          }
        });
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  const handleCollapsibleState = (index: any) => {
    setCollapsible((prevCollapsible) => {
      return prevCollapsible
        .slice(0, index - 1)
        .concat(prevCollapsible[index - 1] === true ? false : true)
        .concat(prevCollapsible.slice(index));
    });
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
        .post(`/api/wishlist`, {
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
    <>
      {loaded && (
        <div className="flex preview_container justify-around lg:flex-row flex-col-reverse">
          <div className="flex flex-col gap-4 lg:p-4 h-fit lg:h-[94vh] align-center justify-center lg:sticky lg:w-[34%] w-[100%] top-4">
            <div className="flex flex-col gap-4 border-black border-2 p-4 h-[fit] align-center justify-center sticky top-2">
              <div className="border-b-2 flex flex-col justify-between border-b-grey-200 cursor-pointer text-[14px] gap-3">
                <div
                  className="w-[100%] flex justify-between cursor-pointer"
                  onClick={() => {
                    handleCollapsibleState(1);
                  }}
                >
                  <div>DESCRIPTION</div>
                  <div>[+]</div>
                </div>
                <div
                  className={`duration-1000 transition-all  ${
                    collapsible[0]
                      ? "h-[100px] py-2 overflow-y-scroll"
                      : "h-0 py-0 overflow-hidden"
                  }`}
                >
                  {currentProduct.description}
                </div>
              </div>
              <div className="border-b-2 flex flex-col justify-between border-b-grey-200 cursor-pointer text-[14px] gap-3">
                <div
                  className="w-[100%] flex justify-between cursor-pointer"
                  onClick={() => {
                    handleCollapsibleState(2);
                  }}
                >
                  <div>MATERIALS</div>
                  <div>[+]</div>
                </div>
                <div
                  className={`duration-1000 transition-all overflow-y-scroll ${
                    collapsible[1]
                      ? "h-[100px] overflow-y-scroll py-2"
                      : "h-0 py-0 overflow-hidden"
                  }`}
                >
                  {currentProduct.materials}
                </div>
              </div>
              <div className="border-b-2 flex flex-col justify-between border-b-grey-200 cursor-pointer text-[14px] gap-3">
                <div
                  className="w-[100%] flex justify-between cursor-pointer"
                  onClick={() => {
                    handleCollapsibleState(3);
                  }}
                >
                  <div>PACKAGING</div>
                  <div>[+]</div>
                </div>
                <div
                  className={`duration-1000 transition-all ${
                    collapsible[2]
                      ? "h-[100px]  py-2 overflow-y-scroll"
                      : "h-0 py-0 overflow-hidden"
                  }`}
                >
                  {currentProduct.packaging}
                </div>
              </div>
              <div className="border-b-2 flex flex-col justify-between border-b-grey-200 cursor-pointer text-[14px] gap-3">
                <div
                  className="w-[100%] flex justify-between cursor-pointer"
                  onClick={() => {
                    handleCollapsibleState(4);
                  }}
                >
                  <div>SHIPPING & RETURNS</div>
                  <div>[+]</div>
                </div>
                <div
                  className={`duration-1000 transition-all  ${
                    collapsible[3]
                      ? "h-[100px] overflow-y-scroll py-2"
                      : "h-0 py-0 overflow-hidden"
                  }`}
                >
                  {currentProduct.shipping}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {productImages.map((productImage) => {
              return (
                <>
                  <img
                    src={productImage}
                    alt=""
                    className="border p-1 border-gray-500 max-w-[500px]"
                  />
                </>
              );
            })}
            <div className="lg:hidden flex-col mb-10 border-black border-2 h-fit gap-3 ml-0 lg:ml-[10px] border-b-2 lg:sticky top-4 min-w-[250px] lg:w-[23%] w-[100%] flex">
              <div className="flex flex-col gap-2 p-4">
                <h1 className="text-[14px]">{currentProduct.productName}</h1>
                <div className="flex gap-2">
                  <h1 className="text-[12px] line-through">
                    Rs. {currentProduct.cancelledProductPrice}
                  </h1>
                  <h1 className="text-[12px]">
                    Rs.{currentProduct.productPrice}
                  </h1>
                </div>
              </div>
              <div className="text-[11px] px-4">
                {currentProduct.productInfo}
              </div>
              <div className="text-[10px] opacity-70 px-4 border-b-black pb-4 border-b-2">
                SHIPPING, EXCHANGES AND RETURNS
              </div>
              <div className="grid grid-cols-2  gap-1 w-fit mx-auto mt-6">
                {["S", "M", "L", "XL"].map((size) => {
                  return (
                    <>
                      <div
                        className={`border-2 border-black ${
                          size === current
                            ? "bg-black text-white"
                            : "bg-none text-black"
                        } py-3 w-[120px] text-center cursor-pointer`}
                        onClick={() => {
                          handleSwitch(size);
                        }}
                      >
                        {size}
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="text-[9px] text-gray-900 px-4 opacity-70 pb-4">
                This product has a larger fit than usual. Model is wearing L.
              </div>

              <div className="text-[12px] text-gray-900">
                <button
                  className="w-full py-3 border-black border-2"
                  onClick={(event) => {
                    handleAddToCart(event);
                  }}
                >
                  ADD
                </button>
                <button className="w-full py-3 bg-black text-white">
                  BUY IT NOW
                </button>
              </div>
            </div>
          </div>
          <div className="hidden flex-col border-black border-2 h-fit gap-3 ml-0 lg:ml-[10px] border-b-2 lg:sticky top-4 min-w-[250px] lg:w-[23%] w-[100%] lg:flex">
            <div className="flex flex-col gap-2 p-4">
              <h1 className="text-[14px]">{currentProduct.productName}</h1>
              <div className="flex gap-2">
                <h1 className="text-[12px] line-through">
                  Rs. {currentProduct.cancelledProductPrice}
                </h1>
                <h1 className="text-[12px]">
                  Rs.{currentProduct.productPrice}
                </h1>
              </div>
            </div>
            <div className="text-[11px] px-4">{currentProduct.productInfo}</div>
            <div className="text-[10px] opacity-70 px-4 border-b-black pb-4 border-b-2">
              SHIPPING, EXCHANGES AND RETURNS
            </div>
            <div className="grid grid-cols-2  gap-1 w-fit mx-auto mt-6">
              {["S", "M", "L", "XL"].map((size) => {
                return (
                  <>
                    <div
                      className={`border-2 border-black ${
                        size === current
                          ? "bg-black text-white"
                          : "bg-none text-black"
                      } py-3 w-[120px] text-center cursor-pointer`}
                      onClick={() => {
                        handleSwitch(size);
                      }}
                    >
                      {size}
                    </div>
                  </>
                );
              })}
            </div>
            <div className="text-[9px] text-gray-900 px-4 opacity-70 pb-4">
              This product has a larger fit than usual. Model is wearing L.
            </div>

            <div className="text-[12px] text-gray-900">
              <button
                className="w-full py-3 border-black border-2"
                onClick={(event) => {
                  handleAddToCart(event);
                }}
              >
                ADD
              </button>
              <button className="w-full py-3 bg-black text-white">
                BUY IT NOW
              </button>
            </div>
          </div>
        </div>
        // <div className="flex flex-col xl:flex-row justify-center gap-4 xl:gap-8 mt-6 font-extrabold">
        //   <div className="flex xl:flex-col md:flex-row flex-col justify-between xl:h-[600px] w-full xl:w-[170px] items-center">
        //     {productImages.slice(0, 4).map((image, index) => (
        //       <div
        //         key={index}
        //         className="h-[138px] w-[170px] md:w-full bg-[#F5F5F5]"
        //       >
        //         <img
        //           className="mt-2 ml-3 h-[120px] w-[133px] object-contain"
        //           src={image}
        //           alt={`Preview ${index + 1}`}
        //         />
        //       </div>
        //     ))}
        //   </div>
        //   <div className="h-[400px] xl:h-[600px] w-full lg:ml-52 md:ml-24 xl:ml-0 md:w-[500px] bg-[#F5F5F5]">
        //     <img
        //       className="xl:ml-4 md:ml-6 md:mt-0 mt-10 xl:mt-16 h-[437px] w-[458px] object-contain"
        //       src={productImages[4] || product_icon}
        //       alt="Main Preview"
        //     />
        //   </div>
        //   <div className="h-[400px] xl:h-[600px] w-full xl:w-[400px] ml-16">
        //     <h1 className="text-2xl font-bold">Kaze GA Fuku T Shirt</h1>
        //     <div className="flex items-center mt-2">
        //       <div className="text-yellow-500">★★★★★</div>
        //       <span className="text-gray-500 ml-2">(150 Reviews)</span>
        //       <span className="text-green-600 ml-4">In Stock</span>
        //     </div>
        //     <p className="text-xl font-semibold mt-4">Rs.999</p>
        //     <p className="text-gray-600 mt-2">
        //       Nuvante’s First & Limited Edition Design for the Closed Ones
        //     </p>
        //     <div className="mt-4">
        //       {/* <p className="font-medium">Colours:</p> */}
        //     </div>
        //     <div className="mt-4">
        //       <p className="font-medium">Size:</p>
        //       <div className="flex items-center gap-2 mt-2">
        //         {["XS", "S", "M", "L", "XL"].map((size) => (
        //           <button
        //             onClick={() => {
        //               handleSwitch(size);
        //             }}
        //             key={size}
        //             className={`px-4 py-2 border rounded-md ${
        //               !(current === size)
        //                 ? "hover:bg-white text-black"
        //                 : "hover:bg-red-500 text-white"
        //             } ${
        //               current === size ? "bg-red-500 text-white" : "bg-white"
        //             }`}
        //           >
        //             {size}
        //           </button>
        //         ))}
        //       </div>
        //     </div>
        //     <div className="flex items-center justify-between mt-4">
        //       <div>
        //         <button
        //           className="px-4 py-2 border rounded-l-md"
        //           onClick={() => {
        //             handleQuantityChange(-1);
        //           }}
        //         >
        //           -
        //         </button>
        //         <button className="px-3 py-2 border-t border-b">
        //           {quantity}
        //         </button>
        //         <button
        //           className="px-3 py-2 border rounded-r-md"
        //           onClick={() => {
        //             handleQuantityChange(1);
        //           }}
        //         >
        //           +
        //         </button>
        //       </div>
        //       <div className=" w-[70%]">
        //         <button className="ml-4 px-6 py-2 bg-red-500 text-white rounded-md">
        //           Buy Now
        //         </button>
        //         <button
        //           onClick={handleWishlistPresence}
        //           className={`${
        //             GlobalWishlist.includes(String(hash)) ||
        //             GlobalWishlist.includes(String(slug))
        //               ? "bg-[#DB4444] text-white"
        //               : "bg-white text-black"
        //           } ml-4 px-4 py-2 border rounded-md text-[20px]`}
        //         >
        //           ♡
        //         </button>
        //       </div>
        //     </div>
        //     <button
        //       className={`bg-black text-white px-6 mt-3 py-3`}
        //       onClick={handleAddToCart}
        //     >
        //       {GlobalCart.includes(id) ? "Remove from cart" : "Add to cart"}
        //     </button>
        //     <div className="mt-6 border-2 border-black flex flex-col rounded-md w-fit">
        //       <div className="flex items-start gap-4 p-4">
        //         <div className="text-2xl">
        //           <Image
        //             src={delivery_icon}
        //             alt="delivery"
        //             width={50}
        //             height={50}
        //           ></Image>
        //         </div>
        //         <div>
        //           <p className="font-medium">Free Delivery</p>
        //           <p className="text-gray-600 text-sm">
        //             Enter your postal code for Delivery Availability
        //           </p>
        //         </div>
        //       </div>
        //       <div className="w-[100%] bg-black h-[2px]"></div>
        //       <div className="flex items-start gap-4 mt-4 p-4">
        //         <div className="text-2xl">
        //           <Image
        //             src={return_icon}
        //             alt="return"
        //             width={50}
        //             height={50}
        //           ></Image>
        //         </div>
        //         <div>
        //           <p className="font-medium">Return Delivery</p>
        //           <p className="text-gray-600 text-sm">
        //             Free 30 Days Delivery Returns.{" "}
        //             <span className="text-blue-500">Details</span>
        //           </p>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
      )}
      {!loaded && (
        <motion.div
          className="w-fit mx-auto mt-20"
          animate={{
            rotate: 360,
            transition: {
              duration: 1.5,
            },
          }}
        >
          <Image src={logo} alt="preloader" width={60} height={60}></Image>
        </motion.div>
      )}
    </>
  );
};

export default Preview;
