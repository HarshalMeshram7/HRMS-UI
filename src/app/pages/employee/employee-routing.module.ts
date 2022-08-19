import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDirectoryComponent } from './components/employee-directory/employee-directory.component';
import { LeaveComponent } from './components/leave/leave.component';
import { RegformComponent } from './components/regform/regform.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';


import { EmployeeContainerComponent } from './employee.component';

const routes: Routes = [{
  path: '',
  component: EmployeeContainerComponent,
  children: [
    {
    path: 'directory',
    component: EmployeeDirectoryComponent,
  },
  {
    path: 'regform',
    component: RegformComponent,
  },
  {
    path: 'timesheet',
    component: TimesheetComponent,
  },
  {
    path: 'leave',
    component: LeaveComponent,
  }

],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule { }

export const EmployeeRoutedComponents = [
  EmployeeContainerComponent,
];
