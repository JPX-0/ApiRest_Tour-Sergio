const express = require("express");
const cors = require("cors");
const router = require("./router/index.router");
const errorMiddleware = require("./api/middlewares/error.middleware");
const routeNotImplemented = require("./api/middlewares/notImplemented.middleware");

const PORT = process.env.PORT || 8080;
const app = express();

// configure app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// rutas
app.use("/api", router);

// NotFoundPage middleware
app.use("/*", routeNotImplemented);

// Error middleware
app.use(errorMiddleware);

//--------------------------------------------
// inicio el servidor
const connectedServer = app.listen(PORT, () => console.log(`Server is up and running on port >>> ${PORT}`));
connectedServer.on("error", error => console.log('There was an unexpected error in the server ', error));