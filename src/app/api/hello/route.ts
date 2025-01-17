import { NextResponse } from "next/server";

export async function GET(request: Request) {

  try {
    return NextResponse.json({"name": "sharjeel"})
  } catch (error) {
    console.log(error);
    
    
  }
}