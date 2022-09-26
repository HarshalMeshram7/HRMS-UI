import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerformanceComponent } from './performance.component';
import { PerformanceReviewComponent } from './performance-review/performance-review.component';
import { PerformanceCoreComponent } from './performance-core/performance-core.component';
import { PerformanceFeedbackComponent } from './performance-feedback/performance-feedback.component';
import { PerformanceSkillsComponent } from './performance-skills/performance-skills.component';
import { PerformanceObjectiveComponent } from './performance-objective/performance-objective.component';
const routes: Routes = [
  {
    path: "",
    component: PerformanceComponent,
    children: [
      {
        path: "performancereview",
        component: PerformanceReviewComponent
      },
      {
        path: "performanceobjective",
        component: PerformanceObjectiveComponent
      },
      {
        path: "performancecore",
        component: PerformanceCoreComponent
      },
      {
        path: "performancefeedback",
        component: PerformanceFeedbackComponent
      },
      {
        path: "performanceskills",
        component: PerformanceSkillsComponent
      }
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceRoutingModule { }
