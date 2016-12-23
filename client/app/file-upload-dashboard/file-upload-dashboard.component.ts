import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as moment from 'moment';

@Component({
    moduleId: module.id,
    selector: 'file-upload-dashboard',
    templateUrl: 'file-upload-dashboard.component.html',
    styleUrls: ['file-upload-dashboard.component.css']
})

export class FileUploadDashboardComponent implements OnInit {
    disableAll: boolean;
    lastLoadedTime: string;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }
}
