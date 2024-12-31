import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// neu dazu importiert 
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { routes } from './app.routes'; // Import der separaten Routen-Datei

@NgModule({
  declarations: [AppComponent, FormComponent, TableComponent,], // neu dazu eingefügt
  imports: [
    CommonModule, RouterModule.forRoot(routes), // Routing hinzugefügt
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
