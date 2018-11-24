import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormtemplateComponent } from './component/formtemplate.component';
import { FieldErrorDisplayModule } from '../field-error-display/field-error-display.module';


@NgModule({
  imports: [
    CommonModule,
    FieldErrorDisplayModule
  ],
  declarations: [FormtemplateComponent],
  exports: [
    FormtemplateComponent
  ]
})
export class FormtampleteModule { }
