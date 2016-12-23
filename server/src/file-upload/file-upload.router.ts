'use strict';
import {FileUploadResource} from "./file-upload.resource";


export class FileUploadRouter {
    app: any;
    fileUploadResource = new FileUploadResource();

    init = (app) => {
        this.app = app;
        this.addRoutes();
    };

    addRoutes = () => {
        this.app.route('/api/upload')
            .head(this.fileUploadResource.healthcheck)
            .post(this.fileUploadResource.uploadFile);
    };
}





