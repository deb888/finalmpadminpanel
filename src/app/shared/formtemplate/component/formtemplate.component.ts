import { Component, OnInit, Input } from '@angular/core';
import { Iformmodel } from '../../model/formbuilder.model';
import { Validators, FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { GlobalformService } from '../../globalform.service';
@Component({
  selector: 'app-formtemplate',
  templateUrl: './formtemplate.component.html',
  styleUrls: ['./formtemplate.component.css']
})
export class FormtemplateComponent {
  @Input() formdata: Iformmodel;
  @Input() displayError: boolean;
  constructor(private globalformservice: GlobalformService) { }
}
