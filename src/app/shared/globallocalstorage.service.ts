import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GloballocalstorageService {
  loggedindata: any;
  routebodydata: any;
  statemanagement: any;
  constructor() { }
  /**
   * @param description
   * @param topic set topic data
   * @param data set store data
   */
  setlocalstorage(topic, data) {
    return new Promise((resolve, reject) => {
      localStorage.setItem(topic, JSON.stringify(data));
      resolve('done');
    })

  }
  /**
   * @param description 
   * @param topic 
   */
  getlocalstoorageitem(topic) {
    return new Promise((resolve, reject) => {
      let data = localStorage.getItem(topic);
      resolve({ data: data });
    });
  }
  /**
   * 
   * @param topic 
   * @param data 
   */
  setsessionstorage(topic, data) {
    return new Promise((resolve, reject) => {
      sessionStorage.setItem(topic, JSON.stringify(data));
      resolve('done');
    })

  }
  /**
   * 
   * @param topic 
   */
  getsessionstorage(topic) {
    return new Promise((resolve, reject) => {
      let data = sessionStorage.getItem(topic);
      resolve({ data: data });
    });
  }
  /**
   * 
   * @param data 
   */
  setsenddata(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.routebodydata = data
      if (this.routebodydata) {
        resolve('done')
      } else {
        reject({ err: 'error' });
      }

    })

  }
  /**
   * 
   */
  getsenddata() {
    return new Promise((resolve, reject) => {
      if (this.routebodydata) {
        resolve({ routebodydata: this.routebodydata })
      } else {
        reject({ err: 'error' });
      }

    });
  }

  logout() {
    return new Promise((resolve, reject) => {
      localStorage.clear()
      resolve('done');
    })
  }
  getusertype() {
    return new Promise((resolve, reject) => {
      this.getlocalstoorageitem('token').then((res: any) => {
        let data = JSON.parse(res.data);
        console.log(data.userType);

        resolve(data.userType);
      }, (err: any) => {

      })
    });
  }
  getuserId() {
    return new Promise((resolve, reject) => {
      this.getlocalstoorageitem('token').then((res: any) => {
        let data = JSON.parse(res.data);
        console.log(data.userId);

        resolve(data.userId);
      }, (err: any) => {

      })
    });
  }
  getenrollmentId() {
    return new Promise((resolve, reject) => {
      this.getlocalstoorageitem('token').then((res: any) => {
        let data = JSON.parse(res.data);
        console.log(data.enrollmentId);

        resolve(data.enrollmentId);
      }, (err: any) => {

      })
    });
  }
  getstaffrole() {
    return new Promise((resolve, reject) => {
      this.getlocalstoorageitem('token').then((res: any) => {
        let data = JSON.parse(res.data);
        console.log(data.roleId);

        resolve(data.roleId);
      }, (err: any) => {

      })
    });
  }
  getaccess() {
    return new Promise((resolve, reject) => {
      this.getlocalstoorageitem('token').then((res: any) => {
        let data = JSON.parse(res.data);
        console.log(data.accessType);

        resolve(data.roleId);
      }, (err: any) => {

      })
    });
  }
  /**
   * @description for menu building
   */
  private dataSource = new Subject<DataSourceClass>();

  data$ = this.dataSource.asObservable();
/**
 * 
 * @param ev 
 * @param value 
 */
  public dataBusChanged(ev, value) {
      this.dataSource.next({
          ev: ev,
          value: value
      })
  }

}


export class DataSourceClass {
  ev: string;
  value: any
}