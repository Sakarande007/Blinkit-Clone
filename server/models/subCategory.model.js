import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true 
},
  image: {
    type: String,
    default: ""
},
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
});

const SubcategoryModel = new mongoose.model('subCategory', subCategorySchema)

export default SubcategoryModel
