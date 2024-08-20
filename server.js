import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/food.route.js";
import userRouter from "./routes/user.route.js";
import cartRouter from "./routes/cart.route.js";

// app config

const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());
// db connection
connectDB();

app.get("/", (req, res) => {
  res.send("API running");
});

// bypass all routes and API endpoint
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart",cartRouter)

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
