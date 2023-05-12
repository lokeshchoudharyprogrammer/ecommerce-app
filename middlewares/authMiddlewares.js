

import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const MustBeSigned = async (req, res, next) => {
    try {
        // const decode = JWT.verify(
        //     req.headers.authorization,
        //     process.env.PRIVATE_KEY
        // );
        var decode = JWT.verify(req.headers.authorization, process.env.PRIVATE_KEY);
        req.user = decode;
        console.log(decode)
        next();
    } catch (error) {
        console.log("error");
    }
};

//admin acceess
export const isAdmin = async (req, res, next) => {
    
    try {
        const users = await userModel.findById(req.user?._id);
       
        if (users?.role !== 1) {
            return res.status(401).send({
                success: false,
                message: "UnAuthorized Access",
            });
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            error,
            message: "Error in admin middelware",
        });
    }
};