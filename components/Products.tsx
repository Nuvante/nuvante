import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import Button from "./button";
import Link from "next/link";

export default function Products() {
  const products = [
    {
      productName: "Kaze Ga Fuku",
      productPrice: 999,
      cancelledPrice: 1500,
      reviews: 65,
      stars: 5,
      src: "./product.png",
      status: "new",
    },
    {
      productName: "Kaze Ga Fuku",
      productPrice: 999,
      cancelledPrice: 1500,
      reviews: 65,
      stars: 5,
      src: "./product.png",
      status: "old",
    },
    {
      productName: "Kaze Ga Fuku",
      productPrice: 999,
      cancelledPrice: 1500,
      reviews: 65,
      stars: 5,
      src: "./product.png",
      status: "old",
    },
    {
      productName: "Kaze Ga Fuku",
      productPrice: 999,
      cancelledPrice: 1500,
      reviews: 65,
      stars: 4,
      src: "./product.png",
      status: "old",
    },
    {
      productName: "Kaze Ga Fuku",
      productPrice: 999,
      cancelledPrice: 1500,
      reviews: 65,
      stars: 5,
      src: "./product.png",
      status: "old",
    },
    {
      productName: "Kaze Ga Fuku",
      productPrice: 999,
      cancelledPrice: 1500,
      reviews: 65,
      stars: 5,
      src: "./product.png",
      status: "old",
    },
    {
      productName: "Kaze Ga Fuku",
      productPrice: 999,
      cancelledPrice: 1500,
      reviews: 65,
      stars: 5,
      src: "./product.png",
      status: "old",
    },
    {
      productName: "Kaze Ga Fuku",
      productPrice: 999,
      cancelledPrice: 1500,
      reviews: 65,
      stars: 4,
      src: "./product.png",
      status: "old",
    },
  ];

  return (
    <div className="mt-36 flex flex-col gap-6">
      <div className="flex w-full justify-between items-center">
        <Heading message="Products" secondaryMessage="Explore Our Products" />
        <Link href='/Products'>
          <Button text="View All" width={130} />
        </Link>

      </div>
      <div className="flex flex-col gap-12">
        <div className="cards flex flex-wrap justify-around gap-y-10">
          {products.map((product, index) => (
            <Card key={index} {...product} />
          ))}
        </div>
        <Link href='/Products'>
          <Button text="View All Products" width={220} />
        </Link>

      </div>
    </div>
  );
}
