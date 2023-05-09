import express from "express"
import * as dotenv from 'dotenv'
import colors from "colors"
import morgan from "morgan"
import connection from "./config/db.js"
import authrouter from "./routes/authRouter.js"
import swaggerUi from "swagger-ui-express"
import cors from "cors"
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
// const swaggerJSDoc = require('swagger-jsdoc');
import swaggerJSDoc from "swagger-jsdoc"
// const swaggerJSDoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express');
dotenv.config()


//

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Express API for JSONPlaceholder',
        version: '1.0.0',
    },
};

const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./routes/*.js'],
};


//


const app = express()

const swaggerSpec = swaggerJSDoc(options);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// middleware
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

connection()

// Route

app.use("/api/v1/auth", authrouter)
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);


// app.get("/", (req, res) => {
//     res.send("<h1>Welcome to My Website</h1>")
// })



// database tests

app.listen(`${process.env._PORT ?? 4000}`, () => {

    console.log(colors.info(`\n \nServer Start Now ${process.env._PORT ?? 4000}\n \n\n         🕉️  \n\n ꧁𒈞𒆜   Lord of  Shiva  🕉️  𒆜𒈞꧂ \n \n\n`))
})



// mongodb+srv://lokesh:lokeshcz@cluster0.dsoakmx.mongodb.net/?retryWrites=true&w=majority