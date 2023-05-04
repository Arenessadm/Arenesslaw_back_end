import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { config } from "dotenv";
import { database } from "./config/database.js";
import { userRouter } from "./routes/userRouts.js";
import { excelRoute } from "./routes/excelRoute.js";
import { noticeRouter } from "./routes/noticeRoute.js";
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import path from 'path'
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())


config({
    path: "./config/config.env"
})
database()

app.use("/user", userRouter)
app.use("/excel", excelRoute)
app.use("/notice", noticeRouter)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send("vighnharth shree ganesha deva")
})

const port = process.env.port
app.listen(port, () => {
    console.log(`server running at port ${port}`)
})