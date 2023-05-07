import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,

        trim: true

    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,


    },
    phone: {
        type: Number,
        required: true,
        trim: true,
        unique: true

    },
    address: {
        type: {},
        required: true,
        trim: true,

    },
    role: {
        type: Number,
        default: 0

    },
   
    answer: {
        type: String,
        required: true
    }

}, {
    timestamps: true,
    versionKey: false
})


const userModel = mongoose.model("users", userSchema)

export default userModel