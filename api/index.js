import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import path from "path";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
    process.exit(1);
  });

const __dirname = path.resolve();

const app = express();

// app.use(helmet.crossOriginOpenerPolicy({ policy: "same-origin-allow-popups" }));
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      defaultSrc: ["'self'"],
      frameSrc: ["'self'", "https://blogapp-93649.firebaseapp.com"],
      "script-src": ["'self'", "'unsafe-inline'", "https://apis.google.com"],
      connectSrc: [
        "'self'",
        "https://identitytoolkit.googleapis.com",
        "https://firebasestorage.googleapis.com",
      ],
      "img-src": ["'self'", "https: data:"],
    },
  })
);

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' 'unsafe-inline' https://apis.google.com; frame-src 'self' https://*.firebaseapp.com https://*.google.com;"
  );
  next();
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
