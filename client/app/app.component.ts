import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
    constructor(private router: Router) {
    }

    ngOnInit() {

    }

    ngOnDestroy() {

    }
}
