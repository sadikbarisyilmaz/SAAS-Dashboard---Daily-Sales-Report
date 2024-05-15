"use server"
import { connectToDataBase } from "@/database"
import Sale from "@/models/sales";

export const getSales = async () => {

    try {
        await connectToDataBase();
        const result = await Sale.find()
        console.log(result);
        return result

    } catch (error) {
        console.log(error.message);
        return { error: "Something went wrong" }
    }
}