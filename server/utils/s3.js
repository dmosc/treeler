// Amazon S3 stuff
import AWS from 'aws-sdk';
import {AWSConfig, s3Region} from '../config';

AWS.config.update({
  ...AWSConfig,
  region: s3Region
});

// Initialize AWS S3
const s3 = new AWS.S3();

export default s3;
