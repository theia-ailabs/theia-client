import dotenv from "dotenv";
dotenv.config();
export const SERVER_URL = String(process.env.VUE_APP_SERVER_URL);
console.log(SERVER_URL);
