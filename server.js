import express from "express"
import * as dotenv from 'dotenv'
import colors from "colors"
import morgan from "morgan"
import connection from "./config/db.js"
import authrouter from "./routes/authRouter.js"
dotenv.config()

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

const app = express()

app.use(express.json())
app.use(morgan("dev"))

app.use("/api/v1/auth", authrouter)

connection()

app.get("/", (req, res) => {
    res.send("<h1>Hello How Are You Man</h1>")
})



// database tests

app.listen(`${process.env._PORT ?? 4000}`, () => {

    console.log(colors.info(`\n \nServer Start Now ${process.env._PORT ?? 4000}\n \n\n         🕉️  \n\n ꧁𒈞𒆜   Lord of  Shiva  🕉️  𒆜𒈞꧂ \n \n\n`))
})



// mongodb+srv://lokesh:lokeshcz@cluster0.dsoakmx.mongodb.net/?retryWrites=true&w=majority