const express = require("express");
const app = express();
require("./DB/config");
require("./api/signup.api");
require("./api/login.api");

app.use(express.json());
app.use(cors());

app.use("/stReg", signupApi);
app.use("/stLogin", loginApi);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});