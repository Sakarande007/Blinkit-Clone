import mongoose from "mongoose";
import morgan from "morgan";

const orderSchema = new mongoose.Schema({
    userID : {
        type : mongoose.Schema.ObjectId,
        ref : 'User',
    },
    orderID : {
        type : String,
        required : [true, "Provide orderId"],
        unique : true
    },
    produtId :{
        type : mongoose.Schema.ObjectId,
        ref : "product",
    },
    product_details :{
        name : String,
        image : Array,
    },
    paymentId :{
        type : String,
        default: ""
    },
    payment_status :{
        type : String,
        default : ""
    },
    delivary_Address :{
        type : mongoose.Schema.ObjectId,
        ref : 'address'
    },
    subTotalAmt :{
        type : Number,
        default : 0
    },
    invoice_receipt :{
        type : String,
        default : ""
    }
},{
    timestamps : true
})

const OrderModel = mongoose.model('order',orderSchema)

export default OrderModel