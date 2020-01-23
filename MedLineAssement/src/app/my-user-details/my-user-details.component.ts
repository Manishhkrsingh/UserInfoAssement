import { Component, OnInit, NgModule,TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { formValue } from '../user-details_int';

@Component({
  selector: 'app-my-user-details',
  templateUrl: './my-user-details.component.html',
  styleUrls: ['./my-user-details.component.css']
})
export class MyUserDetailsComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }
  userInfo:formValue={
    firstName:"",
    lastName:"",
    ext:"",
    phone:"",
    mail:""
  };

  formSubmitted : boolean;
  
 

  ngOnInit() {
  }
  onSubmit(form: NgForm,template){
    this.formSubmitted=false;
    if(form.valid){
    this.formSubmitted=true;
    console.log(this.userInfo);
    this.openModal(template);
    }
  }

  openModal(template) {
    this.modalRef = this.modalService.show(template, {
      animated: true,
      backdrop: 'static'
    });
  }

}
