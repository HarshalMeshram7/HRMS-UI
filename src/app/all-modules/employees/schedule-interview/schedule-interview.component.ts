import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DataTableDirective } from "angular-datatables";
import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";
import { AllModulesService } from "../../all-modules.service";
declare const $: any;
@Component({
  selector: "app-schedule-interview",
  templateUrl: "./schedule-interview.component.html",
  styleUrls: ["./schedule-interview.component.css"],
})
export class ScheduleInterviewComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  public dtElement: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public lstSchedule: any[];
  public url: any = "schedules";
  public tempId: any;
  public editId: any;
  public rows = [];
  public srch = [];
  public addScheduleForm: FormGroup;
  public editScheduleForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private srvModuleService: AllModulesService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // this.dtOptions = {
    //   // ... skipped ...
    //   pageLength: 10,
    //   dom: "lrtip",
    // };
   

    this.LoadSchedule();

    this.addScheduleForm = this.formBuilder.group({
      ScheduleName: ["", [Validators.required]],
      jobTitle: ["", [Validators.required]],
      jobStatus: ["", [Validators.required]],
      intSchedule: ["", [Validators.required]],
    });

    this.editScheduleForm = this.formBuilder.group({
      ScheduleName: ["", [Validators.required]],
      jobTitle: ["", [Validators.required]],
      jobStatus: ["", [Validators.required]],
      intSchedule: ["", [Validators.required]],
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

   // Get department list  Api Call
  LoadSchedule() {
    this.srvModuleService.get(this.url).subscribe((data) => {
      this.lstSchedule = data;
      this.dtTrigger.next();
      this.rows = this.lstSchedule;
      this.srch = [...this.rows];
    });
  }

  // Add Schedule  Modal Api Call
  addSchedule() {
    console.log(this.addScheduleForm.value);
    if(this.addScheduleForm.invalid){
      this.markFormGroupTouched(this.addScheduleForm)
      return
    }
    if (this.addScheduleForm.valid) {
      let obj = {
        ScheduleName: this.addScheduleForm.value.ScheduleName,
        no: 0,
      };
      this.srvModuleService.add(obj, this.url).subscribe((data) => {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
        });
      });
      this.LoadSchedule();
      $("#add_schedule").modal("hide");
      this.addScheduleForm.reset();
      this.toastr.success("Schedule added sucessfully...!", "Success");
    }

  }

  
  editSchedule() {
    if (this.editScheduleForm.valid) {
      console.log(this.editScheduleForm.value);
      
      // let obj = {
      //   scheduleName: this.editScheduleForm.value.ScheduleName,
      //   no: this.editId,
      // };
      // this.srvModuleService.update(obj, this.url).subscribe((data1) => {
      //   this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      //     dtInstance.destroy();
      //   });
      // });
      this.LoadSchedule();
      $("#edit_schedule").modal("hide");
      this.toastr.success("Department Updated sucessfully...!", "Success");
    }
  }

  // To Get The department Edit Id And Set Values To Edit Modal Form
  edit(value) {
    // console.log(value);
    this.editId = value;
    const index = this.lstSchedule.findIndex((item) => {
      return item.no === value;
    });
    let toSetValues = this.lstSchedule[index];
    this.editScheduleForm.setValue({
      ScheduleName: toSetValues.name,
      jobTitle: toSetValues.job_title,
      jobStatus: toSetValues.status,
      intSchedule: toSetValues.date,
    });
  }
  delete(value) {
    console.log(value);
  }


  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }




 
 }



