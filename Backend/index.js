import express from "express";
import cors from "cors";

import signupApi from "./api/signup.api.js";
import loginApi from "./api/login.api.js";

import "./DB/config.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/stReg", signupApi);
app.use("/stLogin", loginApi);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});