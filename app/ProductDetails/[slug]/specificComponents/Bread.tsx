"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

export default function Bread() {
  const [hash, setHash] = useState("");
  const url_param: any = useParams();
  const [productName, setProductName] = useState<string>("Loading...");

  useEffect(() => {
    setHash(url_param.slug);
    (async () => {
      const response = await axios.post(
        "http://localhost:3000/api/propagation/",
        {
          id: hash === "" ? url_param.slug : hash,
          every: false,
        }
      );
      setProductName(response.data.productName);
    })();
  }, [url_param.slug, hash]);

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <BreadcrumbPage>T-Shirt</BreadcrumbPage>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{productName}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}
