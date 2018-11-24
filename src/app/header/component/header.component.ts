import { Component, OnInit } from '@angular/core';
import { GloballocalstorageService } from 'src/app/shared/globallocalstorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  avatarImgSrc: string = 'assets/images/avatar.png';
  userName: string = 'Hi , User';
  userPost: string = '';


  sidebarToggle: boolean = true;
  tip = { ring: true, email: true };

  constructor(private _globalService: GloballocalstorageService) { }

  public _sidebarToggle() {
    /* this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
      this.sidebarToggle = sidebarToggle;
    }, error => {
      console.log('Error: ' + error);
    }); */

    this._globalService.data$.subscribe(data => {
      if (data.ev === 'sidebarToggle') {
        this.sidebarToggle = data.value;
      }
    }, error => {
      console.log('Error: ' + error);
    });
    this._globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);


    //this._globalService._sidebarToggleState(!this.sidebarToggle);
  }
  ngOnInit() {

  }
}
