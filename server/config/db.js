import mongoose from "mongoose";

// async/await + try/catch: database connect karne ke liye
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("DB connection failed:", error.message);
    process.exit(1); // DB nahi juda toh server band kar do
  }
};

export default connectDB;