import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'advanced-file-uploader',
    templateUrl: 'advanced-file-uploader.component.html',
    styleUrls: ['advanced-file-uploader.component.css']
})

export class AdvancedFileUploaderComponent {
    filesToUpload: Array<File>;

    constructor() {
        this.filesToUpload = [];
    }

    upload() {
        /*this.makeFileRequest("http://localhost:8080/api/upload", [], this.filesToUpload).then((result) => {
            console.log(result);
        }, (error) => {
            console.error(error);
        });*/
    }

    fileChangeEvent() {

    }

}
