import { NgModule } from '@angular/core';
import { NbAccordionModule, NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbListModule, NbRadioModule, NbRouteTabsetModule, NbSelectModule, NbStepperModule, NbTabsetModule, NbTreeGridModule, NbUserModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { EmployeeDirectoryComponent } from './components/employee-directory/employee-directory.component';
import { RegformComponent } from './components/regform/regform.component';
import { EmployeeRoutedComponents, EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeContainerComponent } from './employee.component';
import  { FormsModule, FormsModule as ngFormsModule, ReactiveFormsModule} from '@angular/forms';
import { LayoutRoutingModule } from '../layout/layout-routing.module';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TablesRoutingModule } from '../tables/tables-routing.module';

const components = [
  EmployeeContainerComponent,
  EmployeeDirectoryComponent,
  RegformComponent,
  TimesheetComponent
];

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    EmployeeRoutingModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    NbInputModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    LayoutRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,

  ],
  declarations: [...EmployeeRoutedComponents, ...components, TimesheetComponent],
})
export class EmployeeModule {}
