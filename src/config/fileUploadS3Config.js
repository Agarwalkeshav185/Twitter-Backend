import multers3 from 'multer-s3';
import multer from 'multer';
import aws from 'aws-sdk';

import { AWS_ACCESS_KEY, AWS_ACCESS_SECRET_KEY, AWS_REGION, BUCKET_NAME } from './serverConfig.js';

aws.config.update({
    region : AWS_REGION,
    secretAccessKey : AWS_ACCESS_SECRET_KEY,
    accessKeyId : AWS_ACCESS_KEY
});

const s3 = new aws.S3();

const upload = multer({
    storage : multers3({
        s3 : s3,
        bucket : BUCKET_NAME,
        acl : 'public-read',
        contentType: multers3.AUTO_CONTENT_TYPE,
        metadata : function (req, file, cb) {
            cb(null, { fieldName : file.fieldname});
        },
        key : function (req, file, cb){
            const cleanName = file.originalname.replace(/\s+/g, '-');
            const filename = Date.now().toString() + '-' + cleanName;
            cb(null, filename);

            // cb(null, Date.now().toString());
        }
    })
});

export default upload;
