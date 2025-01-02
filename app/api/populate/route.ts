import clientModel from "@/models/Clients";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";

/**
 * * API that has two functions
 * * (i) update a given client with a specific email address provided by @nextjs/clerk, mostly used in the "forgot password" flow.
 * * read: https://clerk.com/docs/custom-flows/forgot-password
 * * (ii) create a new client with the given details, mostly preferred ultimately in the custom sign-up flow
 * * read: https://clerk.com/docs/custom-flows/email-password
 *
 * TODO: don't repeat code if possible, "existing" ? maybe migrate to boolean values. (some custom logic gates, doesn't matter, f*ck it.)
 *
 */
export async function POST(request: any) {
  const user = await currentUser();
  // ! currently in production
  // TODO: in development, adjust the types. (any is not so great)
  const global_user_email: any | null | undefined =
    user?.emailAddresses[0].emailAddress;

  try {
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
      console.log("saving the data for an existing user.... ", body.id);
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
    }
    return new NextResponse("success");
  } catch (error) {
    console.error("Error in API route: ", error);
    return new NextResponse("error");
  }
}
