import express from "express"
import * as dotenv from 'dotenv'
import colors from "colors"
import morgan from "morgan";
import mongoose from "mongoose";
import path from "path"
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
// app.use(express.static(path.join(__dirname, "./client/build")))
// connection()

// Route

app.use("/api/v1/auth", authrouter)
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);


app.get("/", (req, res) => {
  res.send("<h1>Welcome to My Website</h1>")
})

// database tests

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

mongoose.set('strictQuery', false);
app.listen(`${process.env._PORT}`, async () => {
  try {
    await mongoose.connect(process.env._MONGO_URL)
    console.log(colors.silly("Mongoose connection"))
  } catch (error) {
    console.log(colors.error("Error connecting"))
  }
  console.log(colors.info(`\n \nServer Start Now ${process.env._PORT ?? 4000}\n \n\n         🕉️  \n\n ꧁𒈞𒆜   Lord of  Shiva  🕉️  𒆜𒈞꧂ \n \n\n`))
})



// mongodb+srv://lokesh:lokeshcz@cluster0.dsoakmx.mongodb.net/?retryWrites=true&w=majority
