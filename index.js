import express from "express";
import cors from "cors";
import cardRoutes from "./routes/card.routes.js";

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Base Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Card Collection API" });
});

// Mount Routes
app.use("/cards", cardRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});