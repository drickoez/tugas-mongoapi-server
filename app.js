const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const app = express();

// router
const productsRouter = require("./app/api/v1/products/router");
const productsRouterV2 = require("./app/api/v2/products/router");

const notFoundMiddleware = require("./app/middlewares/not-found");
const handleErrorMiddleware = require("./app/middlewares/handle-error");
const v1 = "/api/v1";
const v2 = "/api/v2";

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to api product",
  });
});

app.use(v1, productsRouter);
app.use(v2, productsRouterV2);

app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

module.exports = app;
