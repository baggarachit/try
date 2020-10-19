import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

import { Form } from '../form123';
import { FormService } from '../form.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  data: Form;
  msg: any;
  constructor(private formService: FormService) { }
  empForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    feedback: new FormControl(''),
    comment: new FormControl(''),
  });

  onSubmit(){
    this.formService.postConfig(this.empForm.value).subscribe(res => {console.log(res);this.msg='Form Successfully Submitted'}, error => {console.log(error);this.msg=JSON.stringify(error.error)});
  }
  ngOnInit() {
    this.getdata();
  }
  getdata(): void {
    this.formService.getConfig()
    .subscribe(data => this.empForm.patchValue(data));
  }
}
