
import { connectToDataBase } from "@/database";
import Sale from "@/models/sales";
import { NextResponse } from "next/server";

const handler = async (req, res) => {
    await connectToDataBase();
    try {
        const request = await req.json()
        const sale = await Sale.insertMany(request);
        return NextResponse.json(sale, { status: 201 });

    } catch (error) {
        return NextResponse.json(
            { error: "Sale creation failed" },
            { status: 400 }
        );
    }
};

export { handler as POST, handler as GET };

