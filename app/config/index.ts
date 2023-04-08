import dotenv from "dotenv";
dotenv.config();

export const SERVER_URI =
  String(process.env.SERVER_URI) || "http://localhost:3000";
