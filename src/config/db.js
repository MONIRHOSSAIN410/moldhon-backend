import mongoose from 'mongoose';

/**
 * Serverless-safe connection.
 *
 * On Vercel every request may hit a cold or warm lambda. Without caching,
 * each invocation opens a new connection pool and MongoDB quickly starts
 * refusing connections. The cached promise is reused for the life of the
 * container. Locally this behaves like a normal single connection.
 */
let cached = global._muldhonMongoose;
if (!cached) cached = global._muldhonMongoose = { conn: null, promise: null };

export const connectDB = async () => {
  if (cached.conn) return cached.conn;

  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/muldhon';

  if (!cached.promise) {
    mongoose.set('strictQuery', true);
    cached.promise = mongoose
      .connect(uri, {
        serverSelectionTimeoutMS: 10000,
        maxPoolSize: 10,
      })
      .then((conn) => {
        console.log(
          `\x1b[32m✔ MongoDB connected:\x1b[0m ${conn.connection.host}/${conn.connection.name}`
        );
        return conn;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    // Don't cache a failed attempt — let the next request retry.
    cached.promise = null;
    // Previously this called process.exit(1), which kills a serverless
    // function instead of returning a readable error to the client.
    throw error;
  }

  return cached.conn;
};

export default connectDB;
