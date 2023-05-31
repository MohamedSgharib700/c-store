import express, { Router } from "express";
import authMiddleware from "../../middlewares/auth";
// import validationMiddleware from "../../middlewares/validation";
import {
  getAllUsers,
  storeUser,
  updateUser,
  showUser,
  destroyuser,
} from "./user.controller";
// import {
//   storeValidationSchemas,
//   updateValidationSchema,
// } from "./user.validation";

const router = express.Router();

router.route("/store").post(authMiddleware, storeUser);

router.route("/all").get(authMiddleware, getAllUsers);
router.route("/update/:id").put(authMiddleware, updateUser);

router.route("/show/:id").get(authMiddleware, showUser);

router.route("/destroy/:id").delete(authMiddleware, destroyuser);

export default router;
