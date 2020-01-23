import { Component, OnInit, NgModule,TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-my-user-details',
  templateUrl: './my-user-details.component.html',
  styleUrls: ['./my-user-details.component.css']
})
export class MyUserDetailsComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }
  userdetails:any;
 

  ngOnInit() {
  }
  onSubmit(form: NgForm,template){
    if(form.valid){
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
