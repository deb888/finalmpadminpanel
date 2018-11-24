import { Injectable } from '@angular/core';
import { GloballocalstorageService } from '../shared/globallocalstorage.service';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  token: string;
  private _credentials: any | null;
  constructor(public globalstorage: GloballocalstorageService, private router: Router) {

  }
  /**
   * @description weither user logedin or not
   */
  isAuthenticated() {
    let obj: any = JSON.parse(localStorage.getItem('token'));
    this._credentials = obj.token
    if (this._credentials) {
      return true;
    } else {
      return false;
    }

  }
  /**
   * @description LOgout
   */
  logout() {
    this.cleartoken().then((succ) => {
      this.router.navigate(['/admin/login']);
    })
  }
  /**
   * @description Promise structure
   */
  cleartoken(): Promise<any> {
    return new Promise((resolve, reject) => {
      localStorage.removeItem('token');
      resolve('Done');
    })
  }
}
