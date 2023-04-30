import mongoose from "mongoose";

import colors from "colors"


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
const connection = async () => {
    try {
        await mongoose.connect(process.env._MONGO_URL)
        console.log(colors.info("Mongoose connection"))
    } catch (error) {
        console.log(colors.error("Error connecting"))
    }
}


export default connection