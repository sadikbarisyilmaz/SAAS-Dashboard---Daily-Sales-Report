"use server"
import { connectToDataBase } from "@/database"
import User from "@/models/user"


export const getUser = async () => {

    try {
        await connectToDataBase();
        const result = await User.find()
        console.log(result);
        return result

    } catch (error) {
        console.log(error.message);
        return { error: "Something went wrong" }
    }
}