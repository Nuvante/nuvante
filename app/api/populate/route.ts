import clientModel from "@/models/Clients";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";

/**
 * API that has two functions:
 * 1. Update a client with a specific email address (for "forgot password" flow).
 *    Reference: https://clerk.com/docs/custom-flows/forgot-password
 * 2. Create a new client with given details (for custom sign-up flow).
 *    Reference: https://clerk.com/docs/custom-flows/email-password
 *
 * TODO: Avoid code repetition if possible. Consider refactoring logic.
 */

export async function POST(request: any) {
  try {
    const user = await currentUser();
    const global_user_email: string | null | undefined =
      user?.emailAddresses[0]?.emailAddress;

    const body = await request.json();

    const existingModel =
      body.email === "existing"
        ? await clientModel.findOne({ email: global_user_email })
        : await clientModel.findOne({ email: body.email });

    if (existingModel) {
      console.log("Updating existing client...");
      if (body.password !== "existing") existingModel.password = body.password;
      if (body.firstName !== "existing")
        existingModel.firstName = body.firstName;
      if (body.lastName !== "existing") existingModel.lastName = body.lastName;
      if (body.address !== "existing") existingModel.address = body.address;
      await existingModel.save();
      console.log("Saved updated data for existing user: ", body.id);
    } else {
      console.log("Creating new client...");
      const new_client = new clientModel({
        username: body.firstName,
        email: body.email,
        firstName: body.firstName,
        lastName: body.lastName,
        password: body.password,
        address: body.address,
        cart: [],
        wishlist: [],
      });
      await new_client.save();
      console.log("New client created successfully");
    }

    return new NextResponse("Success", {
      headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error("Error in API route: ", error);
    return new NextResponse("Error", {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
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
