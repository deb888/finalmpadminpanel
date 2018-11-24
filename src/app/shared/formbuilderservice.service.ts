import { Injectable } from '@angular/core';
import { Iformmodel } from './model/formbuilder.model';
import { FormArray, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class FormbuilderserviceService {
  formdata: Iformmodel[] = [];
  customform: FormGroup;
  constructor() {
    this.formdata = [

      {
        control: 'poname',
        label: 'Po Name',
        defaultValue: '',
        type: 'text',
        disable: true,
        validationrequired: true
      },
      {
        control: 'bankname',
        label: 'Bank Name',
        defaultValue: '',
        type: 'text',
        disable: false,
        validationrequired: true
      }

    ]

  }

  createformgroup() {
    this.customform = this.createformcontrole();
  }



  createformcontrole() {
    let group: any = {};
    this.formdata = this.getformdata();
    this.formdata.forEach(arg => {
      group[arg.control] = arg.validationrequired ? new FormControl(arg.value || '', Validators.required)
        : new FormControl(arg.value || '');
    });
    return new FormGroup(group);

  }
  /**
   * 
   * @param data set formdata from anywhere of the worl of lms
   */
  setformdata(data: Iformmodel[]) {
    this.formdata = data;
  }
  /**
   * @description get form data only
   */
  getformdata() {
    return this.formdata;
  }
  /**
   * get formgroup data form anywhere of the o
   */
  getformgroup() {
    return this.customform;

  }
}
