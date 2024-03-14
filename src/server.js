import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import dotEnv from "dotenv";

dotEnv.config();
let app = express();
let PORT = process.env.PORT || 6969;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

app.listen(PORT, () => {
  console.log("Server is running PORT : " + PORT);
});
