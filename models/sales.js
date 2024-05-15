import mongoose from 'mongoose';

const saleSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    total_amount: {
        type: Number,
        required: true
    },
    sale_date: {
        type: String,
        required: true,
    }

}, { timestamps: true });

const Sale = mongoose.models.Sale || mongoose.model("Sale", saleSchema);

export default Sale;