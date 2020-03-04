const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const ProductSchema = new Schema({
  // author: ObjectId,
  name: {type:String,required: true,max:[50,'最大50文字です']},
  coverImg: String,
  price: Number,
  description: String,
  heading1: String,
  heading1Content: String,
  heading2: String,
  heading2Content: String,
  heading3: String,
  heading3Content: String
});

module.exports = mongoose.model('Product',ProductSchema)


