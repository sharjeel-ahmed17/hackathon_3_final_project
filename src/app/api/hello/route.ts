
import {  NextResponse } from "next/server";

export async function GET() {
    const data = [{
        id: "1",
        name: "Product 1",
        description: "This is product 1",
        price: 100
    }]
    return NextResponse.json(data);
}