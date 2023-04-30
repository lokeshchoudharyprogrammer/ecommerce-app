import JWT from "bcrypt"
import userModel from "../models/userModel.js"


export const MustBeSigned = (req, res, next) => {
    {
        try {
            const decoded = JWT.verify(req.headers.authorization, process.env._PRIVATE_KEY)
            return req.user = decoded
            next()
        } catch (error) {
            console.log("error")
        }
    }
}


// admin access 

export const isAdmin = async (req, res, next) => {

    try {

        const user = await userModel.findById(req.user._id)

        if (user.role !== 1) {

            return res.status(401).send({
                success: false,
                message: 'You are not allowed'

            })

        } else {
            next()
        }

    } catch (error) {

        res.send({ message: "Error" })

    }

}