const mongoose = require ('mongoose');

const phoneSchema = new mangoose.Schema
(
{
    Name : String,
    Description : String,
    Price : Number,
    ImgURL : String

}
);

const Phone = mongoose.model("Phone" , phoneSchema);
module.exports = Phone;