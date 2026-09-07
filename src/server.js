import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import { fileURLToPath } from "url";
import dns from "dns";
import path from "path";
import sittingRoutes from './routes/sittingRoutes.js';
import messageRoutes from "./routes/messageRoutes.js";
import activityRoutes from './routes/activityRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';
import reportRoutes from './routes/reportRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js'
import investorRoutes from './routes/investorRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import entrepreneurRoute from './routes/entrepreneurRoute.js';
import projectRoutes from './routes/projectRoutes.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Routes
import entrepreneurRoutes from './routes/entrepreneurRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

// Fix DNS server settings safely
try {
  dns.setServers(["1.1.1.1", "8.8.8.8"]);
} catch (err) {
  console.warn("DNS custom servers set failed:", err.message);
}

// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5001;


// Middlewares - Updated CORS Configuration
// Allow local dev servers plus the deployed frontend (and any Vercel
// preview/branch deployments of it), instead of a single hardcoded origin.
const allowedOriginPatterns = [
  /^http:\/\/localhost:\d+$/,
  /^http:\/\/127\.0\.0\.1:\d+$/,
  /^https:\/\/moldhon-frontend(-[\w-]+)?\.vercel\.app$/,
];

app.use(cors({
  origin(origin, callback) {
    // Allow non-browser requests (curl, server-to-server, mobile apps) that send no Origin header.
    if (!origin) return callback(null, true);
    const isAllowed = allowedOriginPatterns.some((pattern) => pattern.test(origin));
    return callback(isAllowed ? null : new Error(`Not allowed by CORS: ${origin}`), isAllowed);
  },
  credentials: true, // <-- CRITICAL FIX: Allows cookies/headers to cross origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static upload files for profile photos
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Routes
app.use('/api/entrepreneurs', entrepreneurRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/users', sittingRoutes);
app.use("/api", messageRoutes);
app.use('/api', activityRoutes);
app.use('/api', notificationRoutes);
app.use('/api', reportRoutes);
app.use('/api', paymentRoutes);
app.use('/api', investorRoutes);
app.use('/api', dashboardRoutes);
app.use('/api', entrepreneurRoute);

app.use('/api', projectRoutes);
// Database connection & Server Listener

app.get('/', (req, res) => {
  res.send({ message: 'Server is running successfully!' });
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
  });