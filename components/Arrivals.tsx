import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import Button from "./button";
import Link from "next/link";

const products = [{}];

export default function Arrivals() {
  return (
    <>
      <div className="mt-36 flex flex-col gap-6">
        <div className="flex w-full justify-between items-center">
          <Heading
            message="Newest Arrivals"
            secondaryMessage="Best Selling Products"
          ></Heading>
          <Link href='/Products'>
            <Button text="View All" width={130}></Button>
          </Link>
        </div>
        <div className="flex flex-col gap-12">
          <div className="cards flex flex-wrap justify-around sm:w-auto w-[100%] gap-y-10">
            <Card
              productName="Kaze Ga Fuku"
              productPrice={999}
              cancelledPrice={1500}
              reviews={65}
              stars={5}
              src={"./product.png"}
              status="old"
            ></Card>
            <Card
              productName="Kaze Ga Fuku"
              productPrice={999}
              cancelledPrice={1500}
              reviews={65}
              stars={5}
              src={"./product.png"}
              status="old"
            ></Card>
            <Card
              productName="Kaze Ga Fuku"
              productPrice={999}
              cancelledPrice={1500}
              reviews={65}
              stars={5}
              src={"./product.png"}
              status="old"
            ></Card>
            <Card
              productName="Kaze Ga Fuku"
              productPrice={999}
              cancelledPrice={1500}
              reviews={65}
              stars={4}
              src={"./product.png"}
              status="old"
            ></Card>
          </div>
          <Link href='/Products'>
            <Button text="View All Products" width={220}></Button>
          </Link>
        </div>
      </div>
    </>
  );
}
