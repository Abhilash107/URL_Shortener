import express from "express"
import { generateNewURL } from "../controllers/url.controller.js"
const router = express.Router()


router.post('/', generateNewURL)

export default router