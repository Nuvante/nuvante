import React from "react";
import Stars from "./Stars";

type propType = {
  src: string;
  productName: string;
  productPrice: number;
  cancelledPrice: number;
  reviews: number;
  stars: number;
  status: string;
};

export default function Card({
  src,
  productName,
  productPrice,
  cancelledPrice,
  reviews,
  stars,
  status,
}: propType) {
  return (
    <div className="card sm:w-auto w-[100%] relative flex flex-col gap-4 cursor-pointer group">
      <div className="card-body flex sm:justify-center justify-center relative bg-[#F5F5F5] sm:w-fit w-[100%]  p-6 rounded-lg">
        <img src={src} alt={productName} className="rounded-md" />
        {status === "new" && (
          <h1 className="absolute top-1 left-1 rounded-lg bg-[#00FF66] px-3 py-1 text-white text-sm font-bold">
            NEW
          </h1>
        )}
        <img
          src="/heart.svg"
          alt="Favorite"
          className="absolute bg-white rounded-[50%] top-2 right-2 w-7 h-7 opacity-70 hover:opacity-100 transition-opacity"
        />
        <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white w-[90%] py-2 px-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Add to Cart
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
