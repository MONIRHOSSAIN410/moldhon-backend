import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import { connectDB } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import activityRoutes from './routes/activityRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const app = express();

/**
 * CORS.
 *
 * A browser sends the Origin header with no trailing slash
 * ("https://app.vercel.app"), but CLIENT_URL is often written with one
 * ("https://app.vercel.app/"). A plain string comparison then fails and every
 * request is blocked. Origins are normalised here before comparing, and any
 * Vercel preview deployment is allowed too.
 */
const normalise = (value) => String(value || '').trim().replace(/\/+$/, '');

const allowedOrigins = (process.env.CLIENT_URL || 'http://localhost:5173')
  .split(',')
  .map(normalise)
  .filter(Boolean);

const allowedPatterns = [
  /^http:\/\/localhost:\d+$/,
  /^http:\/\/127\.0\.0\.1:\d+$/,
  /^https:\/\/[a-z0-9-]+\.vercel\.app$/i,
];

app.use(
  cors({
    origin(origin, callback) {
      // No Origin header: curl, server-to-server, same-origin. Allow.
      if (!origin) return callback(null, true);
      const clean = normalise(origin);
      const ok =
        allowedOrigins.includes(clean) || allowedPatterns.some((re) => re.test(clean));
      return ok
        ? callback(null, true)
        : callback(new Error(`Not allowed by CORS: ${origin}`));
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// 5mb covers a base64 profile photo comfortably.
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true, limit: '5mb' }));
app.use(cookieParser());
if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'));

// Registered before the database gate so it answers even when Mongo is down.
app.get('/api/health', (req, res) =>
  res.json({ success: true, service: 'Muldhon API', time: new Date().toISOString() })
);

/**
 * Open the database before handling any API request.
 *
 * On Vercel there is no boot step to connect in, so the connection is
 * established (and cached) on the first request instead.
 */
app.use('/api', async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error('Database connection failed:', error.message);
    res.status(503).json({
      success: false,
      message:
        'Database unavailable. Check MONGO_URI and that your MongoDB allows connections from this server.',
    });
  }
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.get('/', (req, res) =>
  res.json({ message: 'Muldhon API is running. Try /api/health' })
);

app.use(notFound);
app.use(errorHandler);

export default app;
