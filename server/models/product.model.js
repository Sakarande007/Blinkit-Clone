import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    image : {
        type: String,
        default : []
    },
    category : [ {
        type : mongoose.Schema.ObjectId,
        ref : 'category'
       }
    ],
    subCategory : [
        {
            type : mongoose.Schema.objectId,
            ref : 'subCategory'
        }
    ],
    unit : {
        type : String,
        default : ""
    },
     stock : {
        type : Number,
        default : null
    },
    price : {
        type : Number,
        default : null
    },
    discount :{
        type : Number,
        default : null
    },
    discription : {
        type : String,
        default : ""
    },
    more_details : {
        type : Object,
        default : {}
    },
    public : {
        type : Boolean,
        default : true
    }

},{
    timestamps : true
})

const productModel = mongoose.model('product', productSchema)

export default productModel