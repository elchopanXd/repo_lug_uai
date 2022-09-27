import { Router } from "express";
import userController from "../../Services/user";

const router = Router()
router.get("/", userController.get)
router.delete("/:id", userController.delete)
router.put("/:id", userController.edit)

export default router