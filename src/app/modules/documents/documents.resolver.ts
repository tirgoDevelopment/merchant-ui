import { Routes } from '@angular/router';
import { DocumentsComponent } from './documents.component';

export default [
    {
        path     : '',
        component: DocumentsComponent,
        resolve  : {
        },
    },
] as Routes;
