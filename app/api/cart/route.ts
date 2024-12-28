import clientModel from "@/models/Clients";
import { NextResponse } from "next/server";
import React from "react";
import { currentUser } from "@clerk/nextjs/server";

function popElement(array: any[], victim: any) {
  const current = array.filter((element) => element != victim);
  return current;
}

export async function POST(request: any) {
  const user = await currentUser();
  const global_user_email = user?.emailAddresses[0]?.emailAddress;
  console.log(global_user_email);

  try {
    const body = await request.json();
    const existingModel = await clientModel.findOne({
      email: global_user_email,
    });

    if (!existingModel) {
      return new NextResponse(
        JSON.stringify({ status: 404, message: "User not found" }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*", // Allow all origins; adjust as needed
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        }
      );
    }

    if (body.append) {
      if (!existingModel.cart.includes(body.identifier)) {
        existingModel.cart.push(body.identifier);
      }
    } else {
      existingModel.cart = popElement(existingModel.cart, body.identifier);
    }

    await existingModel.save();
    return new NextResponse("Updated the cart!", {
      headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
    });
  } catch (error: any) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ status: 500, error: error.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
