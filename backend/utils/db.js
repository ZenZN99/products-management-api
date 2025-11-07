import mongoose from "mongoose";
export async function connectDB() {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("Database Connection");
  } catch (error) {
    console.log("Database Fail", error);
  }
}
