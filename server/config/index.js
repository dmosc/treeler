import dotenv from 'dotenv';

dotenv.config();

const API_PORT = process.env.API_PORT;
const MONGO_DB_URI = process.env.MONGO_DB_URI;
const JWT_SECRET = process.env.JWT_SECRET;
const AWSConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
};
const s3Bucket = process.env.S3_BUCKET;
const s3Region = process.env.S3_REGION;

export {API_PORT, MONGO_DB_URI, JWT_SECRET, AWSConfig, s3Bucket, s3Region};
