
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { AllModulesService } from '../../all-modules.service';

@Component({
  selector: 'app-not-initiated',
  templateUrl: './not-initiated.component.html',
  styleUrls: ['./not-initiated.component.css']
})
export class NotInitiatedComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public : any[];
  public url: any = "notInitiated";
  public tempId: any;
  public editId: any;
  public rows = [];
  public srch = [];
  public addDepartmentForm: FormGroup;
  public editDepartmentForm: FormGroup;
  lstNotInitiated: import("d:/PIXONIX/HRMS_3.0/hrms-frontend/src/assets/all-modules-data/all-modules-data").AllModulesData[];
   constructor(
    private formBuilder: FormBuilder,
    private srvModuleService: AllModulesService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.LoadDepartment();
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }




  // Get department list  Api Call
  LoadDepartment() {
    this.srvModuleService.get(this.url).subscribe((data) => {
      this.lstNotInitiated = data;
      this.dtTrigger.next();
      this.rows = this.lstNotInitiated;
      this.srch = [...this.rows];
    });
  }

}
