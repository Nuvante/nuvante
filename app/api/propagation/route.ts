import productModel from "@/models/Product";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  try {
    const body = await request.json();
    const database_obj =
      body.every === true
        ? await productModel.find({})
        : await productModel.findOne({ _id: body.id });
    return new NextResponse(JSON.stringify(database_obj));
  } catch (error: any) {
    console.error("in api/propagation/route.ts: ", error);
    return new NextResponse(error);
  }
}
