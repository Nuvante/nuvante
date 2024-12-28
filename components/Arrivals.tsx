import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import Button from "./button";
import Link from "next/link";

type mainProp = {
  fragment: {
    productName: string;
    productImage: string;
    productPrice: string;
    cancelledProductPrice: string;
    productStars: number;
    productReviews: string[]; //* Assuming reviews are strings
    latest: boolean;
  }[];
};

export default function Arrivals({ fragment }: mainProp) {
  //* custom comparator function for sort(a, b).
  const frag = fragment.sort((a, b) => {
    return -(a.productStars - b.productStars) !== 0
      ? -(a.productStars - b.productStars)
      : -(a.productReviews.length - b.productReviews.length);
  });

  return (
    <>
      <div className="mt-36 flex flex-col gap-6">
        <div className="flex w-full justify-between items-center">
          <Heading
            message="Newest Arrivals"
            secondaryMessage="Best Selling Products"
          ></Heading>
          <Link href="/Products">
            <Button text="View All" width={130}></Button>
          </Link>
        </div>
        <div className="flex flex-col gap-12">
          <div className="cards flex flex-wrap gap-x-5 sm:w-auto w-[100%] gap-y-10">
            {fragment
              .sort((a, b) => {
                return -(a.productStars - b.productStars) !== 0
                  ? -(a.productStars - b.productStars)
                  : -(a.productReviews.length - b.productReviews.length);
              })
              .map((product, index) => (
                <Card
                  id={product.id}
                  key={index}
                  productName={product.productName}
                  productPrice={String(product.productPrice)}
                  cancelledPrice={product.cancelledProductPrice}
                  reviews={product.productReviews.length} //* Assuming number of reviews (NaN)
                  stars={product.productStars}
                  src={product.productImages[0]}
                  status={product.latest ? "new" : "old"}
                ></Card>
              ))}
          </div>
          <Link href="/Products">
            <Button text="View All Products" width={220}></Button>
          </Link>
        </div>
      </div>
    </>
  );
}
