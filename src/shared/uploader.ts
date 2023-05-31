import catchAsync from "../shared/catch-async";
import { s3 } from "../configs/s3/config";

const uploader = catchAsync(async (file: any) => {
  //   const { file } = req;
  // Check if file exists
  //   if (!file) {
  //     return res.status(400).send("No file uploaded");
  //   }

  // Set S3 upload parameters
  const fileName = `${Date.now()}.${file.originalname}`;
  const params: AWS.S3.PutObjectRequest = {
    Bucket: "rasid-zakera-testing", // Replace with your S3 bucket name
    Key: fileName,
    Body: file.buffer,
  };

  // Upload file to S3
  s3.upload(params, (err: Error, data: AWS.S3.ManagedUpload.SendData) => {
    if (err) {
      console.log(err);

      console.error("Error uploading file to S3:", err);
      //   res.status(500).send("Error uploading file to S3");
    } else {
      console.log("File uploaded successfully:", data.Location);
      //   res.send("File uploaded successfully");
    }
  });
  return fileName;
});

export default uploader;
