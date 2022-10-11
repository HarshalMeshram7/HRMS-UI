import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessUnitComponent } from './business-unit/business-unit.component';
import { OrganizationRoutingModule } from './organization-routing.module';
import { DemoComponent } from './demo/demo.component';



@NgModule({
  declarations: [BusinessUnitComponent, DemoComponent],
  imports: [
    CommonModule,
    OrganizationRoutingModule
  ]
})
export class OrganizationModule { }
