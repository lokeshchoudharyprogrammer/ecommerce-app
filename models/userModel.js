import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
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
    address:
    {
        type: String,
        required: true,
        trim: true,

    },
    role: {
        type: Boolean,
        default: 0

    }

}, {
    timestamps: true,
    versionKey: false
})


const userModel = mongoose.model("users", userSchema)

export default userModel