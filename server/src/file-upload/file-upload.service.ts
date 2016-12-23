'use strict';

import * as multer  from "multer";
import {Configuration} from "../support/configuration";


export class FileUploadService {

    storage = multer.diskStorage({
        destination: (request, file, callback) => {
            console.log('Path to save file :', Configuration.fileUploadPath);
            callback(null, Configuration.fileUploadPath);
        },
        filename: (request, file, callback) => {
            console.log('file content:',file);
            callback(null, file.originalname)
        }
    });

    upload = multer({storage: this.storage}).single('uploads[]');
}
