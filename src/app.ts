import express, { Application, NextFunction, Request, Response } from "express";
import helmet from "helmet";
import { rateLimit, RateLimitRequestHandler } from "express-rate-limit";
import categoryRouter from "./features/categories/category.router";
import authRouter from "./features/users/auth/auth.router";
import userRouter from "./features/users/user.router";
// import attachmentRouter from "./features/attachments/s3.router";
import videoRouter from "./features/videos/video.router";
import roleRouter from "./features/roles/role.router";
import attachmentRouter from "./features/attachments/s3.router";
import permissionRouter from "./features/permissions/permission.router";
import AppError from "./shared/app-error";
import errorMiddleware from "./middlewares/errors";
import { ROUTE_PREFIX } from "./shared/constants";
import i18n from "./configs/il8n/generated";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./configs/swagger";
import { s3, upload } from "./configs/s3/config";

const app: Application = express();

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(i18n.init);

app.use(express.json());

// request security
app.use(helmet());

// Limit requests from same API
const limiter: RateLimitRequestHandler = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});

app.use("/v1", limiter);

// Routing

app.use(`${ROUTE_PREFIX}/auth`, authRouter);
app.use(`${ROUTE_PREFIX}/roles`, roleRouter);
app.use(`${ROUTE_PREFIX}/permissions`, permissionRouter);
app.use(`${ROUTE_PREFIX}/categories`, categoryRouter);
app.use(`${ROUTE_PREFIX}/videos`, videoRouter);
app.use(`${ROUTE_PREFIX}/users`, userRouter);
app.use(`${ROUTE_PREFIX}/attachments`, attachmentRouter);
// Define file upload endpoint
// app.post("/v1/upload", upload.single("file"), (req: Request, res: Response) => {
//   // Get file from request
//   const { file } = req;

//   // Check if file exists
//   if (!file) {
//     return res.status(400).send("No file uploaded");
//   }

//   // Set S3 upload parameters
//   const params: AWS.S3.PutObjectRequest = {
//     Bucket: "rasid-zakera-testing", // Replace with your S3 bucket name
//     Key: file.originalname,
//     Body: file.buffer,
//   };

//   // Upload file to S3
//   s3.upload(params, (err: Error, data: AWS.S3.ManagedUpload.SendData) => {
//     if (err) {
//       console.log(err);

//       console.error("Error uploading file to S3:", err);
//       res.status(500).send("Error uploading file to S3");
//     } else {
//       console.log("File uploaded successfully:", data.Location);
//       res.send("File uploaded successfully");
//     }
//   });
// });
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  return next(new AppError(req.__("not-found"), 404));
});

app.use(errorMiddleware);

export default app;
