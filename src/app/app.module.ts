import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Bootstrap DataTable
import { DataTablesModule } from 'angular-datatables';
import { ToastrModule } from 'ngx-toastr';
import { EmployeesComponent } from './src/app/all-modules/employees/employees.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DataTablesModule,
    ToastrModule.forRoot(
      {
        timeOut: 1500,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
