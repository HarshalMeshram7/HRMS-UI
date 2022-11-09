import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { AllModulesService } from '../../all-modules.service';
declare const $: any;
@Component({
  selector: 'app-past-offer',
  templateUrl: './past-offer.component.html',
  styleUrls: ['./past-offer.component.css']
})
export class PastOfferComponent implements OnInit {
  [x: string]: any;
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public lstPoffer: any[];
  public url: any = "PastOffer";
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
        this.lstPoffer = data;
        this.dtTrigger.next();
        this.rows = this.lstPoffer;
        this.srch = [...this.rows];
      });
    }
    ngOnDestroy(): void {
      // Do not forget to unsubscribe the event
      this.dtTrigger.unsubscribe();
    }


}
