import { Component, OnInit } from '@angular/core';
import { GlobalformService } from '../../shared/globalform.service';
import { GloballocalstorageService } from '../../shared/globallocalstorage.service';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../shared/http.service';
import { ActivatedRoute, Router } from '@angular/router';
export interface Iuser {
  name: string,
  email?: string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Login: FormGroup
  submitted = false;
  constructor(private globalformservice: GlobalformService,
     private route: ActivatedRoute, private router: Router, 
     private httpservice: HttpService, 
     private globlalocalstorage: GloballocalstorageService,
     private formBuilder: FormBuilder) {

    this.Login = new FormGroup({
      'email': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required]),

    });
  }

  ngOnInit() {
    this.Login = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
 
  }

  get f() { return this.Login.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.Login.valid) {

      // let postobj = {
      //   'email': this.Login.value.email,
      //   'password': this.Login.value.password
      // }
      // this.httpservice.sendHttpCall(JSON.stringify(postobj), '/api/login', 'post').subscribe((res) => {
      //   this.globlalocalstorage.setlocalstorage('token', { token: res.token }).then(() => {
      //     this.router.navigate(['/dashboard']);
      //   })


      // }, (err) => {

      // })
      this.router.navigate(['/dashboard']);
    } else {
      this.globalformservice.validateAllFormFields(this.Login)
    }
  }
  getuserlist() {
    this.httpservice.sendHttpCall('', '/api/userlist', 'get').subscribe((res: Iuser[]) => {


    }, () => {

    })
  }

}
