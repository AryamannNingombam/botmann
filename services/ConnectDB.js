require('dotenv').config({
    path: __dirname + '/.env'
});
const mongoose = require('mongoose');

const ConnectDB = async () => {
    console.log("connecting to db...")

    try {
        await mongoose
            .connect(
                process.env.MONGO_DB_URI, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                }
            )
        console.log("connected!");
    } catch (err) {

        console.log("ERROR!");
        console.log(err);
    }



}

module.exports = ConnectDB;