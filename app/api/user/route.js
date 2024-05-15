
import { connectToDataBase } from "@/database";
import User from "@/models/user"; // Adjust the path as necessary
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

const handler = async (req, res) => {
    await connectToDataBase();
    try {
        const res = await req.json()
        // Hash the password
        const hashedPassword = await bcrypt.hash(res.password, 10);
        // Create a new user with the hashed password
        const user = await User.create({
            email: res.email,
            password: hashedPassword,
            fullName: res.fullName,
        });
        // Respond with the created user (excluding the password)
        const { password, ...userWithoutPassword } = user.toObject();
        return NextResponse.json(userWithoutPassword, { status: 201 });
    } catch (error) {
        console.error("Signup error:", error);
        return NextResponse.json(
            { error: "User creation failed" },
            { status: 400 }
        );
    }
};

export { handler as POST, handler as GET };

