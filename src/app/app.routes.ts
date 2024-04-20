import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';

export const routes: Routes = [
    { path: '', redirectTo: '/students', pathMatch: 'full' }, //To redirect
    { path: 'students', component: StudentsComponent }
];
