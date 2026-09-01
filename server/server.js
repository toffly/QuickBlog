import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";

import dns from "node:dns";
import adminRouter from "./routes/adminRoutes.js";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();

await connectDB()

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API is working"));
app.use('/api/admin', adminRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})

export default app
