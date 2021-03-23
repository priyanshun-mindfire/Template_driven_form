import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  fname: string='';
  lname: string='';
  email: string='';
  Address: string='';
  mobile: number;
  password: string='';
  confirmPassword: string='';

  constructor() { }

  ngOnInit(): void {
  }

  loadValues(formValue: NgForm){
    let userDetail={
      fname:'ABC',
      lname:'XYZ',
      email:'email@mail.com',
      Address:'ARC',
      mobile: 9999999999,
      password: 'confidential',
      confirmPassword: 'confidential'
    }
    formValue.setValue(userDetail);
  }

  addCustomer(formValue: NgForm){
    console.log(formValue.value);
  }

  resetForm(formValue : NgForm){
    formValue.reset();
  }

}
