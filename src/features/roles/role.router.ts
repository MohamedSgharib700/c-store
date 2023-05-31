import express from "express";
// import authMiddleware from "../../middlewares/auth";
// import validationMiddleware from "../../middlewares/validation";
import {
  getAllRoles,
  createRole,
  showRole,
  updateRole,
  destroyRole,
} from "./role.controller";
// import roleValidationSchema from "./role.validation";

const router = express.Router();

router
  .route("/")
  .get(getAllRoles)
  .post(createRole);

router
  .route("/:id")
  .get(showRole)
  .put(updateRole)
  .delete(destroyRole);

export default router;
