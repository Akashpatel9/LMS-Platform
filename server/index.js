import express from "express";
import { dbConnect } from "./configs/db";
import { PORT } from "./configs/config";

// Initialize Express application
const app = express();

// Middleware: Parse incoming JSON requests
app.use(express.json());

// Connect to the database
dbConnect();

// Define routes
// Root test route
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Placeholder for additional route imports
// Example:
// app.use('api/v1/', );

// Global error handler
app.use((err, req, res, next) => {
    console.error("Error:", err);
    res.status(500).json({ message: "An unexpected error occurred." });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
