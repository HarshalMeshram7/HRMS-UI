import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'ngx-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.scss']
})
export class RegformComponent implements OnInit {
  statuses: NbComponentStatus[] = [ 'success'];
  previous: NbComponentStatus[] = [ 'warning'];
  submit: NbComponentStatus[] = [ 'danger'];
  

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(){
    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });
  };
  firstForm: FormGroup;
  
  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }
  


}
