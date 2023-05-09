import express from "express";
import { forgotPasswordController, getAllOrdersController, getOrdersController, loginController, orderStatusController, registerController, testController, updateProfileController } from "../controllers/authController.js";
import { MustBeSigned, isAdmin } from "../middlewares/authMiddlewares.js";

const authrouter = express.Router()

authrouter.post("/register", registerController)



authrouter.post("/login", loginController)

authrouter.post("/forget-password", forgotPasswordController)


authrouter.get("/test", MustBeSigned, isAdmin, testController)


authrouter.get("/user-auth", MustBeSigned, (req, res) => {
    res.status(200).send({ ok: true })
})




//protected Admin route auth
authrouter.get("/admin-auth", MustBeSigned, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
});


authrouter.put("/profile", MustBeSigned, updateProfileController);

//orders
authrouter.get("/orders", MustBeSigned, getOrdersController);

//all orders
authrouter.get("/all-orders", MustBeSigned, isAdmin, getAllOrdersController);

// order status update
authrouter.put(
    "/order-status/:orderId",
    MustBeSigned,
    isAdmin,
    orderStatusController
);


export default authrouter