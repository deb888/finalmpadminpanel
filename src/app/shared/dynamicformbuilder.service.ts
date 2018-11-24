import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class DynamicformbuilderService {
  items: any[] = [];
  requiredfield: any;
  requiredfieldarr: any[];
  constructor(private formBuilder: FormBuilder) {
    this.requiredfield = {
      'custom_field': '',
      'custom_field1': ''
    }
    this.requiredfieldarr = [{
      fieldnm: 'custom_field',

    }, {
      fieldnm: 'custom_field1',
    }]
  }
  /**
   * @description create group
   */
  createItem(dt: any = ''): FormGroup {
    return this.formBuilder.group(this.getrequireditems());
  }
  /**
   * 
   * @param form need a form group
   */
  addItem(form: FormGroup): void {
    this.items.push(this.createItem());
    console.log(this.items);
  }
  manage(val: any = '') {

  }
  /**
   * 
   * @param i 
   * @param form 
   */
  removeInputField(i: number, form: FormGroup): void {
    const control = <FormArray>form.controls.items;
    control.removeAt(i);
  }
  setitems(dt: any[]) {
    this.items = dt;
    console.log(this.items);
  }
  getitems() {
    return this.items;
  }
  setrequireditems(dt: string) {
    this.requiredfield[dt] = '';
    this.requiredfieldarr.push({
      fieldnm: dt,
    })
    console.log(this.requiredfield);
  }
  getrequireditems() {
    return this.requiredfield;
  }
}
