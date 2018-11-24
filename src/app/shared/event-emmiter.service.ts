import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmmiterService {
  public profilePicEmitter: EventEmitter<any> = new EventEmitter()
  constructor() { }
  setemmit(dt: any) {
    this.profilePicEmitter.emit(dt);
  }

}
