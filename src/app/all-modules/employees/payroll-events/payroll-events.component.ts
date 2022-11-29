import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { AllModulesService } from '../../all-modules.service';

@Component({
  selector: 'app-payroll-events',
  templateUrl: './payroll-events.component.html',
  styleUrls: ['./payroll-events.component.css']
})
export class PayrollEventsComponent implements OnInit {
  [x: string]: any;
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public lstEvent: any[];
  public url: any = "payrollEvents";
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
        this.lstEvent = data;
        this.dtTrigger.next();
        this.rows = this.lstEvent;
        this.srch = [...this.rows];
      });
    }
    ngOnDestroy(): void {
      // Do not forget to unsubscribe the event
      this.dtTrigger.unsubscribe();
    }
  }
