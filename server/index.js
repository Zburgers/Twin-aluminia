require("dotenv").config()
const app = require("../server/App/app");
const PORT = process.env.PORT;
const ConnectDB = require("../server/Utils/DB");
const userRouter = require("../server/Routes/userRoutes");
const admineRouter = require("../server/Routes/AdmienRoures");
const express = require("express");
const cors = require("cors");
const cookieparser = require("cookie-parser");

app.use(express.json());
app.use(cookieparser());
app.use(cors());
app.use(express.urlencoded({extends:true}));
app.use("/api/v1",userRouter);
app.use("/api/v1",admineRouter);

ConnectDB();

app.listen(`${PORT}`,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})