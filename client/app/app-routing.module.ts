import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {FileUploadDashboardComponent} from './file-upload-dashboard/file-upload-dashboard.component';

const routes: Routes = [
    {
        path: 'file-upload-dashboard',
        component: FileUploadDashboardComponent
    },
    {
        path: '**',
        component: FileUploadDashboardComponent
    }
];

@NgModule({
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}

export const routedComponents = [
    FileUploadDashboardComponent
];
