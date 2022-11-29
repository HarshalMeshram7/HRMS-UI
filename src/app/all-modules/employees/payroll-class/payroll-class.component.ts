import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { AllModulesService } from '../../all-modules.service';

@Component({
  selector: 'app-payroll-class',
  templateUrl: './payroll-class.component.html',
  styleUrls: ['./payroll-class.component.css']
})
export class PayrollClassComponent implements OnInit {
  [x: string]: any;
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public lstClass: any[];
  public url: any = "payClass";
  public tempId: any;
  public editId: any;
  public rows = [];
  public srch = [];
  constructor(
    private formBuilder: FormBuilder,
    private srvModuleService: AllModulesService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.LoadDepartment(); }

    LoadDepartment() {
      this.srvModuleService.get(this.url).subscribe((data) => {
        this.lstClass = data;
        this.dtTrigger.next();
        this.rows = this.lstClass;
        this.srch = [...this.rows];
      });
    }
    ngOnDestroy(): void {
      // Do not forget to unsubscribe the event
      this.dtTrigger.unsubscribe();
    }

}
