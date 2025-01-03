import productModel from "@/models/Product";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(request: any) {
  const user = await currentUser();

  try {
    const body = await request.json();
    const condition = body.every === true;
    const condition_ =
      body.id === null || body.id === undefined || !body.id || body.id === "";
    if (!condition && condition_) {
      console.log("identifier was undefined.");
      return new NextResponse("404");
    }

    const database_obj =
      body.every === true
        ? await productModel.find({}).then((data) => {
            return data;
          })
        : await productModel.findOne({ _id: body.id }).then((data) => {
            return data;
          });
    return new NextResponse(JSON.stringify(database_obj));
  } catch (error: any) {
    console.error("in api/propagation/route.ts: ", error);
    return new NextResponse("404");
  }
}
