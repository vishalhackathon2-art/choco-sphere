import cors from "cors";
import express from "express";
import { env } from "./config/env.js";
import { errorHandler, notFoundHandler } from "./middleware/error.middleware.js";
import apiRoutes from "./routes/index.js";

const app = express();

const allowedOrigins = [
  ...(env.frontendUrl || "http://localhost:5173").split(","),
  "http://127.0.0.1:58017",
  "https://frontend-livid-six-34.vercel.app",
];
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, curl, etc.)
      if (!origin) return callback(null, true);
      // Check if origin is allowed or matches a pattern
      const isAllowed = allowedOrigins.some(allowed => {
        if (allowed === origin) return true;
        // Support wildcard patterns like https://*.vercel.app
        if (allowed.includes("*")) {
          const pattern = allowed.replace("*", "[^]+");
          const regex = new RegExp(`^${pattern}$`);
          return regex.test(origin);
        }
        return false;
      });
      if (isAllowed) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  })
);
app.options("*", cors());
app.use(express.json({ limit: "1mb" }));

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "API is healthy",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api", apiRoutes);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
