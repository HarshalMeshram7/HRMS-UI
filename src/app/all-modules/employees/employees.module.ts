import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { EmployeePageContentComponent } from './all-employees/employee-page-content/employee-page-content.component';
import { EmployeeListComponent } from './all-employees/employee-list/employee-list.component';
import { EmployeeProfileComponent } from './all-employees/employee-profile/employee-profile.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { LeavesAdminComponent } from './leaves-admin/leaves-admin.component';
import { LeavesEmployeeComponent } from './leaves-employee/leaves-employee.component';
import { LeaveSettingsComponent } from './leave-settings/leave-settings.component';
import { AttendanceAdminComponent } from './attendance-admin/attendance-admin.component';
import { AttendanceEmployeeComponent } from './attendance-employee/attendance-employee.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DesignationComponent } from './designation/designation.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { OvertimeComponent } from './overtime/overtime.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { SharingModule } from 'src/app/sharing/sharing.module';
import { PickListModule } from 'primeng/picklist';
import { EmployeeSeriesComponent } from './employee-series/employee-series.component';
import { CompanySetupComponent } from './company-setup/company-setup.component';
import { LegalEntitiesComponent } from './legal-entities/legal-entities.component';
import { BusinessUnitComponent } from '../organization/business-unit/business-unit.component';
import { HiringOffersComponent } from './hiring-offers/hiring-offers.component';
import { InPobationComponent } from './in-pobation/in-pobation.component';
import { EvaluationInProgressComponent } from './evaluation-in-progress/evaluation-in-progress.component';
import { CompletedProbationComponent } from './completed-probation/completed-probation.component';
import { ProbationPolicyComponent } from './probation-policy/probation-policy.component';
import { CurrentOpeningComponent } from './current-opening/current-opening.component';
import { CandidatessComponent } from './candidatess/candidatess.component';
import { ScheduleInterviewComponent } from './schedule-interview/schedule-interview.component';
import { InterviewFeedbackComponent } from './interview-feedback/interview-feedback.component';
import { CandidateOfferComponent } from './candidate-offer/candidate-offer.component';
import { PastOfferComponent } from './past-offer/past-offer.component';
import { FeedbackCategoryComponent } from './feedback-category/feedback-category.component';
// import { DetailsComponent } from './interview-feedback/details/details.component';
@NgModule({
  declarations: [EmployeesComponent, AllEmployeesComponent, EmployeePageContentComponent, EmployeeListComponent, EmployeeProfileComponent, HolidaysComponent, LeavesAdminComponent, LeavesEmployeeComponent, LeaveSettingsComponent, AttendanceAdminComponent, AttendanceEmployeeComponent, DepartmentsComponent, DesignationComponent, TimesheetComponent, OvertimeComponent, EmployeeSeriesComponent, CompanySetupComponent, LegalEntitiesComponent, BusinessUnitComponent, HiringOffersComponent, InPobationComponent, EvaluationInProgressComponent, CompletedProbationComponent, ProbationPolicyComponent, CurrentOpeningComponent, CandidatessComponent, ScheduleInterviewComponent, InterviewFeedbackComponent, CandidateOfferComponent, PastOfferComponent, FeedbackCategoryComponent,],
  imports: [
    CommonModule,
    FormsModule,
    SharingModule,
    ReactiveFormsModule,
    PickListModule,
    EmployeesRoutingModule, PickListModule,
    BsDatepickerModule.forRoot(),
    DataTablesModule
  ]
})

export class EmployeesModule { }
