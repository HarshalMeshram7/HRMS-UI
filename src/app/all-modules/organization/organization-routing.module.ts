import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationComponent } from './organization.component';
import { BusinessUnitComponent } from './business-unit/business-unit.component';
import { DemoComponent } from './demo/demo.component';


const routes: Routes = [
  {
    path: "",
    component: OrganizationComponent,
    children:[
      {
        path: 'businessUnit',
        component: BusinessUnitComponent
       },
      {
        path: 'demoitem',
        component: DemoComponent
       },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
