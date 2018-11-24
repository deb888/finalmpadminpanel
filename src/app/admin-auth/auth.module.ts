import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthgurdService } from './authgurd.service';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthgurdService, AuthService]
})
export class AuthModule { }
