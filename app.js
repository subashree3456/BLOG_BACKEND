import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

app.get('/' ,(req,res)=>{
  res.send("Server is running..... ")
  })

mongoose.connect("mongodb+srv://admin:nCwY3E7qwmGv0dlS@cluster0.iu8xqoo.mongodb.net/BlogretryWrites=true&w=majority&appName=Cluster0")
.then(() => app.listen(9000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 9000")
  )
  .catch((err) => console.log(err));

// new pwd : wUma7KRfrlToEO1H

// feb 07 -> nCwY3E7qwmGv0dlS

// nCwY3E7qwmGv0dlS

//mongodb+srv://admin:nCwY3E7qwmGv0dlS@cluster0.iu8xqoo.mongodb.net/Blog?retryWrites=true&w=majority


// mongodb+srv://admin:nCwY3E7qwmGv0dlS@cluster0.iu8xqoo.mongodb.net/BlogretryWrites=true&w=majority


// mongodb+srv://admin:nCwY3E7qwmGv0dlS@cluster0.iu8xqoo.mongodb.net/BlogretryWrites=true&w=majority


//mongodb+srv://admin:nCwY3E7qwmGv0dlS@cluster0.iu8xqoo.mongodb.net/BlogretryWrites=true&w=majority

// mongodb+srv://admin:nCwY3E7qwmGv0dlS@cluster0.iu8xqoo.mongodb.net/BlogretryWrites=true&w=majority


// mongodb+srv://admin:nCwY3E7qwmGv0dlS@cluster0.iu8xqoo.mongodb.net/BlogretryWrites=true&w=majority



// mongodb+srv://admin:nCwY3E7qwmGv0dlS@cluster0.iu8xqoo.mongodb.net/BlogretryWrites=true&w=majority

// mongodb+srv://admin:nCwY3E7qwmGv0dlS@cluster0.iu8xqoo.mongodb.net/BlogretryWrites=true&w=majority


// 

