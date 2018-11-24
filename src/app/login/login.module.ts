import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login.component';
import { ShareModule } from '../shared/share/share.module';
import { FieldErrorDisplayModule } from '../shared/field-error-display/field-error-display.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    FieldErrorDisplayModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [LoginComponent],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
