import express from "express";

import { isAdmin, MustBeSigned } from "../middlewares/authMiddlewares.js";
import {

    categoryControlller,
    createCategoryController,
    deleteCategoryCOntroller,
    singleCategoryController,
    updateCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

//routes
// create category
router.post(
    "/create-category",
    MustBeSigned,
    isAdmin,
    createCategoryController
);

//update category
router.put(
    "/update-category/:id",
    MustBeSigned,
    isAdmin,
    updateCategoryController
);

//getALl category
router.get("/get-category", categoryControlller);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
    "/delete-category/:id",
    MustBeSigned,
    isAdmin,
    deleteCategoryCOntroller
);

export default router;