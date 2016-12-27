'use strict';
import {FileUploadService} from "./file-upload.service";


export class FileUploadResource {
    fileUploadService = new FileUploadService();

    healthcheck(req, res) {
        console.log('File Upload API Healthcheck Successful');
        return res.status(200).json({message: 'File Upload API Healthcheck Successful'});
    }

    uploadFile = (req, res, next) => {
        this.fileUploadService.upload(req, res, (err) => {
            if (err) {
                console.log('Error Occured while uploading', err);
                return;
            }
            console.log(req.file);
            //res.end('Your File Uploaded');
            res.send({message: req.file.originalname + ', File has been Uploaded'});
            console.log('File is  Uploaded');
        });
    }
}