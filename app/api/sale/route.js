
import { connectToDataBase } from "@/database";
import Sale from "@/models/sales";
import User from "@/models/user"; // Adjust the path as necessary
import { NextResponse } from "next/server";

const handler = async (req, res) => {
    await connectToDataBase();
    try {
        const request = await req.json()
        // Hash the password
        // Create a new user with the hashed password
        const sale = await Sale.insertMany(request);
        // Respond with the created user (excluding the password)
        return NextResponse.json(sale, { status: 201 });

    } catch (error) {
        console.error("Signup error:", error);
        return NextResponse.json(
            { error: "User creation failed" },
            { status: 400 }
        );
    }
};

export { handler as POST, handler as GET };

