import express from "express"
import * as dotenv from 'dotenv'
import colors from "colors"
import morgan from "morgan"
import connection from "./config/db.js"
import authrouter from "./routes/authRouter.js"
import cors from "cors"
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
dotenv.config()

const app = express()

// middleware
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

connection()

// Route

app.use("/api/v1/auth", authrouter)
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);


app.get("/", (req, res) => {
    res.send("<h1>Welcome to My Website</h1>")
})



// database tests

app.listen(`${process.env._PORT ?? 4000}`, () => {

    console.log(colors.info(`\n \nServer Start Now ${process.env._PORT ?? 4000}\n \n\n         🕉️  \n\n ꧁𒈞𒆜   Lord of  Shiva  🕉️  𒆜𒈞꧂ \n \n\n`))
})



// mongodb+srv://lokesh:lokeshcz@cluster0.dsoakmx.mongodb.net/?retryWrites=true&w=majority