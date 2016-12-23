import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import './rxjs-extensions';
import {AppRoutingModule, routedComponents} from './app-routing.module';
import {Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap';

/**
 * Application components, Any new componenets goes in here
 */
import {AppComponent} from './app.component';
import {FileUploaderComponent} from './file-uploader/file-uploader.component';
import {FileUploadDashboardComponent} from './file-upload-dashboard/file-upload-dashboard.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        Ng2BootstrapModule
    ],
    declarations: [
        AppComponent,
        routedComponents,
        FileUploaderComponent,
        FileUploadDashboardComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
