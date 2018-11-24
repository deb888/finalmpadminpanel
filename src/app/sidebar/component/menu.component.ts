import { Component, OnInit } from '@angular/core';
import { menuService } from 'src/app/shared/menu.service';
import { GloballocalstorageService } from 'src/app/shared/globallocalstorage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menuInfo: Array<any> = [];
  public sidebarToggle = true;
  constructor(private _menuService: menuService,
    public _globalService: GloballocalstorageService) { }

  ngOnInit() {
    this.menuInfo = this._menuService.putSidebarJson();
    this._sidebarToggle();
    this._menuService.selectItem(this.menuInfo); /* ----->初始化判断路由isActive状态  未完成  待优化 */
    this._isSelectItem(this.menuInfo);
  }

  public _sidebarToggle() {
    // this._globalService._sidebarToggleState(true);
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

  }

  
  _isSelectItem(item) {
    for (const i in item) {
      if (item[i].children) {
        for (const index in item[i].children) {
          if (item[i].children[index].isActive || item[i].children[index].toggle === 'on') {
            item[i].toggle = 'on';
            break;
          } else {
            this._isSelectItem(item[i].children);
          }
        }
      }
    }
  }

}
