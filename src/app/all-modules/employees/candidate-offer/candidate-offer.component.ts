import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { AllModulesService } from '../../all-modules.service';
declare const $: any;
@Component({
  selector: 'app-candidate-offer',
  templateUrl: './candidate-offer.component.html',
  styleUrls: ['./candidate-offer.component.css']
})
export class CandidateOfferComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public lstOffer: any[];
  public url: any = "CandidateOffer";
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
        this.lstOffer = data;
        this.dtTrigger.next();
        this.rows = this.lstOffer;
        this.srch = [...this.rows];
      });
    }
    ngOnDestroy(): void {
      // Do not forget to unsubscribe the event
      this.dtTrigger.unsubscribe();
    }

}
