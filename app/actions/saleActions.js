"use server"
import { connectToDataBase } from "@/database"
import Sale from "@/models/sales";

export const getSales = async () => {

    try {
        await connectToDataBase();
        const result = await Sale.find()

        //filters unwanted data
        const filteredResult = result.map(res => {
            return {
                item: res.item,
                quantity: res.quantity,
                total_amount: res.total_amount,
                sale_date: res.sale_date
            }
        })
        return filteredResult

    } catch (error) {
        console.log(error.message);
        return { error: "Something went wrong" }
    }

}