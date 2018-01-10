const mongoose=require("mongoose");
const {Schema}=mongoose;
const userSchema=new Schema({
    googleId:String,
    name:String,
    gender:String
});
mongoose.model("users",userSchema);