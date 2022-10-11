import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { AllModulesService } from '../../all-modules.service';

declare const $: any;

@Component({
  selector: 'app-business-unit',
  templateUrl: './business-unit.component.html',
  styleUrls: ['./business-unit.component.css']
})
export class BusinessUnitComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public lstBusiness: any[];
  public url: any = "businessUnit";
  public tempId: any;
  public editId: any;
  public rows = [];
  public srch = [];
  public addBusinessForm: FormGroup;
  public editBusinessForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private srvModuleService: AllModulesService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.dtOptions = {
      // ... skipped ...
      pageLength: 10,
      dom: "lrtip",
    };
  
    this.LoadBusiness();
     this.addBusinessForm = this.formBuilder.group({
      Id: ["", [Validators.required]],
      businessName: ["", [Validators.required]],
      businessHead: ["", [Validators.required]],
      businessDesc: ["", [Validators.required]],
      businessStatus: ["", [Validators.required]],
      businessNoEmp: ["", [Validators.required]],
    });
  }

  LoadBusiness() {
    this.srvModuleService.get(this.url).subscribe((data) => {
      this.lstBusiness = data;
      this.dtTrigger.next();
      this.rows = this.lstBusiness;
      this.srch = [...this.rows];
    });
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

    // Add Department  Modal Api Call
    addBusiness() {
      if(this.addBusinessForm.invalid){
        this.markFormGroupTouched(this.addBusinessForm)
        return
      }
      if (this.addBusinessForm.valid) {
        let obj = {
          businessName: this.addBusinessForm.value.businessName,
          id: 0,
        };
        this.srvModuleService.add(obj, this.url).subscribe((data) => {
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
          });
        });
        this.LoadBusiness();
        $("#add_business").modal("hide");
        this.addBusinessForm.reset();
        this.toastr.success("Department added sucessfully...!", "Success");
      }
    }


    
  
}
