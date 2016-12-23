import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'file-uploader',
    templateUrl: 'file-uploader.component.html',
    styleUrls: ['file-uploader.component.css']
})

export class FileUploaderComponent {
    filesToUpload: Array<File>;

    constructor() {
        this.filesToUpload = [];
    }

    upload() {
        this.makeFileRequest("http://localhost:8080/api/upload", [], this.filesToUpload).then((result) => {
            console.log(result);
        }, (error) => {
            console.error(error);
        });
    }

    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>> fileInput.target.files;
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }

            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }

            xhr.open("POST", url, true);

            // To set headers the xhr should be first opened
            xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=blob');

            xhr.send(formData);
        });
    }
}
