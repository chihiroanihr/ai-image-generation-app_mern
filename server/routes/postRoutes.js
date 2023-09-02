import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Post from "../database/models/post.js";

/**
 * Endpoint to create and retrieve posts.
 */

dotenv.config();

const router = express.Router();

export default router;
