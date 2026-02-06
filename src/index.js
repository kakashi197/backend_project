// require("dotenv").config({ path: "./env" });



import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
});

const app = express();

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`server is running at port : ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("MongoDb connections faiiled", err)
})














// FIRST APROCH TO CONNECT DATABSE  1



// import express from "express";
// import mongoose from "mongoose";
// const app = express();
// import { DB_NAME } from "./constants";

// ( async () => {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("Error", (error) => {
//           console.log("Error", error)
//           throw error
//        } )

//        app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//        } )


//     } catch (error) {
//         console.error("Error", error)
//     }
// })   ()