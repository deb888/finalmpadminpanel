import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Headers, Http, Response } from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { AppUrlsConst } from '../../../src/app.config';
import { GloballocalstorageService } from './globallocalstorage.service';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private globallocal: GloballocalstorageService) {
    //this.getrefreshtoken();

  }
  
  
  /**
   * 
   * @param data 
   * @param url 
   * @param method 
   * @param opt 
   */
  sendHttpCall(data: any = '', url: any, method: any, opt: HttpHeaders = null) {
    switch (method) {
      case "post":
        return this.http.post<any>(AppUrlsConst.LMS_SCHOOL_APP_URL + url, (data), { headers: opt });
      case "get":
        return this.http.get<any>(AppUrlsConst.LMS_SCHOOL_APP_URL + url);
      case "put":
        return this.http.put<any>(AppUrlsConst.LMS_SCHOOL_APP_URL + url, (data));
      case "delete":
        return this.http.delete<any>(AppUrlsConst.LMS_SCHOOL_APP_URL + url);
      default:
        confirm("Add Method");
    }
  }
  
}
