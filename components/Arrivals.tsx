import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import Button from "./button";
import Link from "next/link";

type mainProp = {
  fragment: {
    id: any;
    productName: string;
    productImages: string;
    productPrice: string;
    cancelledProductPrice: string;
    latest: boolean;
  }[];
};

export default function Arrivals({ fragment }: mainProp) {
  //* custom comparator function for sort(a, b).
  //* used it later in the code. at 42.
  return (
    <>
      <div className="mt-28 md:mt-0 xl:mt-0 lg:mt-0 flex flex-col gap-14">
        <div className="flex w-full justify-between items-center 2xl:mb-7 xl:mb-3">
          <Heading
            message="Newest Arrivals"
            secondaryMessage="Nuvante's Atelier"
          ></Heading>
          {/* <Link href="/Products">
            <Button text="View All" width={130}></Button>
          </Link> */}
        </div>
        <div className="flex flex-col gap-12 w-fit mx-auto">
          <div className="cards flex flex-wrap sm:gap-x-6 2xl:gap-x-16 gap-x-4 sm:w-auto sm:justify-center justify-center w-[100%] gap-y-16">
            {fragment.map((product, index) => (
              <Card
                id={product.id}
                key={index}
                productName={product.productName}
                productPrice={Number(product.productPrice)}
                cancelledPrice={Number(product.cancelledProductPrice)}
                src={product.productImages[0]}
                status={product.latest ? "new" : "old"}
              ></Card>
            ))}
          </div>
          <Link href="/Products" className="mx-auto w-fit">
            <Button text="View All Products" width={220}></Button>
          </Link>
        </div>
      </div>
    </>
  );
}
