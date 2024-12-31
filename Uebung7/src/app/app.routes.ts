import { Routes } from '@angular/router';
// neu dazu importiert
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    // neu dazu eingefügt, dabei wird der Pfad 'read' auf die TableComponent gemappt
    // und der Pfad 'creat' auf die FormComponent
    { path: 'read', component: TableComponent }, // Pfad zur Tabelle
    { path: 'create', component: FormComponent }, // Pfad zum Formular
    { path: '', component: HomeComponent } // Standard-Route
  ];