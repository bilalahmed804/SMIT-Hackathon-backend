import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import cors from "cors";
import router from "./routes/user.js";

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Server is running.....");
});

app.use("/api/users", router);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI,)
  .then(() => console.log("Mongo DB Connected"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
