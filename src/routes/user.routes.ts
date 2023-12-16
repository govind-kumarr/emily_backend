import express from "express";
import {
  getUser,
  createUser,
  updateUser,
} from "../controllers/user.controllers";

const router = express.Router();

router.get("/", getUser);
router.post("/", createUser);
router.patch("/:userId", updateUser);

export default router;
