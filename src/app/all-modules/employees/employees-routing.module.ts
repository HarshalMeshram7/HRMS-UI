import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';
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
import { DetailsComponent } from './details/details.component';
import { CandidateOfferComponent } from './candidate-offer/candidate-offer.component';
import { PastOfferComponent } from './past-offer/past-offer.component';
import { FeedbackCategoryComponent } from './feedback-category/feedback-category.component';
import { SummaryComponent } from './summary/summary.component';
import { NotInitiatedComponent } from './not-initiated/not-initiated.component';
import { SkippedComponent } from './skipped/skipped.component';
import { CancelledComponent } from './cancelled/cancelled.component';
import { PayscheduleComponent } from './payschedule/payschedule.component';
import { PayrollEventsComponent } from './payroll-events/payroll-events.component';
import { PayrollClassComponent } from './payroll-class/payroll-class.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
    children: [
      {
        path: 'employeepage',
        component: EmployeePageContentComponent
      },
      {
        path: 'employeelist',
        component: EmployeeListComponent
      },
      {
        path: 'employeeprofile',
        component: EmployeeProfileComponent
      },
      {
        path: 'holidays',
        component: HolidaysComponent
      },
      {
        path: 'adminleaves',
        component: LeavesAdminComponent
      },
      {
        path: 'employeeleaves',
        component: LeavesEmployeeComponent
      },
      {
        path: 'leavesettings',
        component: LeaveSettingsComponent
      },
      {
        path: 'attendanceadmin',
        component: AttendanceAdminComponent
      },
      {
        path: 'attendanceemployee',
        component: AttendanceEmployeeComponent
      },
      {
        path: 'departments',
        component: DepartmentsComponent
      },
      {
        path: 'designation',
        component: DesignationComponent
      },
      {
        path: 'timesheet',
        component: TimesheetComponent
      },
      {
        path: 'overtime',
        component: OvertimeComponent
      },
     {
      path: 'series',
      component: EmployeeSeriesComponent
     },
     {
      path: 'company-setup',
      component: CompanySetupComponent
     },
     {
      path: 'legal-entities',
      component: LegalEntitiesComponent
     },
     {
      path: 'businessUnit',
      component: BusinessUnitComponent
     },
     {
      path: 'Hiring-offers',
      component: HiringOffersComponent
     },
     {
      path: 'inPobation',
      component: InPobationComponent
     },
     {
      path: 'inEvaluation',
      component: EvaluationInProgressComponent
     },
     {
      path: 'completedProbation',
      component: CompletedProbationComponent
     },
     {
      path: 'porbation-policy',
      component: ProbationPolicyComponent
     },
     {
      path: 'current-opening',
      component: CurrentOpeningComponent
     },
    {
      path: 'candidatess',
      component: CandidatessComponent
    },
    {
      path: 'schedule-interview',
      component: ScheduleInterviewComponent
    },
    {
      path: 'interview-feedback',
      component: InterviewFeedbackComponent
    },
    {
      path: 'details',
      component: DetailsComponent
    },
    {
      path: 'offers',
      component: CandidateOfferComponent
    },
    {
      path: 'pastOffers',
      component: PastOfferComponent
    },
    {
      path: 'feedbackCategory',
      component: FeedbackCategoryComponent
    },
    {
      path: 'summary',
      component: SummaryComponent
    },
    {
      path: 'notInitaited',
      component: NotInitiatedComponent
    },
    {
      path: 'skipped',
      component: SkippedComponent
    },
    {
      path: 'cancel',
      component: CancelledComponent
    },
    {
      path: 'payschedule',
      component: PayscheduleComponent
    },
    {
      path: 'payroll-events',
      component: PayrollEventsComponent
    },
    {
      path: 'payroll-class',
      component: PayrollClassComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
