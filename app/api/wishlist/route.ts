import clientModel from "@/models/Clients";
import { NextResponse } from "next/server";
import React from "react";
import { currentUser } from "@clerk/nextjs/server";

function popElement(array: any[], victim: any) {
  const current = array.filter((element) => {
    return element != victim;
  });
  return current;
}

export async function POST(request: any) {
  const user = await currentUser();
  const global_user_email = user?.emailAddresses[0].emailAddress;
  console.log(global_user_email);
  try {
    const body = await request.json();
    const existingModel = await clientModel.findOne({
      email: global_user_email,
    });

    if (body.append) {
      if (!existingModel.wishlist.includes(body.identifier)) {
        existingModel.wishlist.push(body.identifier);
      }
    } else {
      existingModel.wishlist = popElement(
        existingModel.wishlist,
        body.identifier
      );
    }
    await existingModel.save();
    return new NextResponse("updated the wishlist!");
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ status: 404 }));
  }
}
