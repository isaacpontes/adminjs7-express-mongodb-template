import express from "express";
import mongoose from "mongoose";
import postRoutes from "./routes/post-routes.js"
import admin, { adminRouter } from "./admin/index.js";

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/adminjs_blog')
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

// Setup Express application
const app = express();
app.use(express.json());

// API endpoints
app.use('/api/posts', postRoutes);
// AdminJS endpoints
app.use(admin.options.rootPath, adminRouter)

// Start
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Started successfully!\nAccess AdminJS on http://localhost:${PORT}${admin.options.rootPath}`))