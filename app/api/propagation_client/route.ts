import clientModel from "@/models/Clients";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";

export async function GET() {
  const user = await currentUser();
  const global_user_email = user?.emailAddresses[0].emailAddress;
  try {
    const database_obj = await clientModel
      .findOne({ email: global_user_email })
      .lean();
    return new NextResponse(JSON.stringify(database_obj));
  } catch (error: any) {
    console.error("in api/propagation/route.ts: ", error);
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
