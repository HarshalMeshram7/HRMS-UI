import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-performance-skills',
  templateUrl: './performance-skills.component.html',
  styleUrls: ['./performance-skills.component.css']
})
export class PerformanceSkillsComponent implements OnInit {

  public invoiceForm: FormGroup;
  constructor(private _fb: FormBuilder) {}
  ngOnInit() {
    this.invoiceForm = this._fb.group({
      Rows: this._fb.array([this.initRows()])
    });
  }

  get formArr() {
    return this.invoiceForm.get("Rows") as FormArray;
  }

  initRows() {
    return this._fb.group({
      name: [""]
    });
  }

  addNewRow() {
    this.formArr.push(this.initRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }
}
