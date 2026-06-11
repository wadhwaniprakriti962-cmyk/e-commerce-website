const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const foodRoutes=require("./routes/foodRoutes")
const authRoutes = require("./routes/authRoutes")

const app = express();

mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("MongoDB is connected"))
    .catch((error)=>console.log(error))

// Middleware to parse JSON
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Backend is running");
});
const cors = require("cors");

app.use(cors({
  origin: ["http://localhost:3000",
   "https://e-commerce-website-fn6502qbs-wadhwaniprakriti962-cmyks-projects.vercel.app"],
  credentials: true
}));
app.use("/api",foodRoutes)
app.use("/api", authRoutes)
// Server start
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});