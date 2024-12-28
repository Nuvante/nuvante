import clientModel from "@/models/Clients";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";

function popElement(array: any[], victim: any) {
  return array.filter((element) => element !== victim);
}

export async function POST(request: any) {
  try {
    const user = await currentUser();
    const global_user_email = user?.emailAddresses[0]?.emailAddress;

    if (!global_user_email) {
      return new NextResponse(
        JSON.stringify({ error: "User email not found" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        }
      );
    }

    const body = await request.json();

    const existingModel = await clientModel.findOne({
      email: global_user_email,
    });

    if (!existingModel) {
      return new NextResponse(
        JSON.stringify({ error: "Client not found in the database" }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        }
      );
    }

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

    return new NextResponse(
      JSON.stringify({ message: "Updated the wishlist successfully!" }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  } catch (error: any) {
    console.error("Error in updating wishlist:", error);

    return new NextResponse(
      JSON.stringify({
        error: error.message || "An unexpected error occurred",
      }),
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
