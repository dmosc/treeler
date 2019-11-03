import path from 'path';
import s3 from '../../../utils/s3';
import {s3Bucket} from '../../../config';

export const s3Upload = params =>
  new Promise((resolve, reject) =>
    s3.upload(params, (err, data) => {
      // handle error
      if (err) {
        reject(err);
      }

      // success
      if (data) {
        resolve(data);
      }
    })
  );

const uploaders = {
  fileUpload: async (_, {file, folderKey, id}) => {
    try {
      const {createReadStream, filename} = await file;

      const stream = createReadStream();
      const indexOfExtension = filename.lastIndexOf('.');
      const newFilename = Date.now() + filename.substring(indexOfExtension);

      const s3Path = path.join(folderKey, id, newFilename).replace(/\\/g, '/');

      const params = {
        Bucket: s3Bucket,
        Body: stream,
        Key: s3Path,
        ACL: 'public-read'
      };

      const {Location} = await s3Upload(params);
      return Location;
    } catch (err) {
      throw new Error(err);
    }
  }
};

export default uploaders;
