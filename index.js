const express = require("express");
const app = express();

const messRoutes = require("./routes/messRoutes");

const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/messes", messRoutes);

// Server start
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
