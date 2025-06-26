require("dotenv").config();
const express = require("express");
const cors = require("cors");

const homeRouter = require("./router/home");
const userRouter = require("./router/user");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/home", homeRouter);
app.use("/user", userRouter);

app.use((req, res) => {
  res.status(404).send("page not found");
});

// mongoConnect(() => {
app.listen(port);
// });
