import { Component, OnInit, Input } from '@angular/core';
import { GloballocalstorageService } from 'src/app/shared/globallocalstorage.service';
export let MENU_ITEM = [
  
   {
      path: 'places',
      title: 'Places',
      icon: 'map-marker'
  },
  {
      path: 'icon',
      title: 'Categories',
      icon: 'list-alt'
  },
  {
      path: 'profile',
      title: 'Backend User',
      icon: 'circle-o'
  },
  {
      path: 'ui',
      title: 'Review',
      icon: 'star-o',
      // children: [
      //     {
      //         path: 'grid',
      //         title: 'Bootstrap Grid'
      //     },
      //     {
      //         path: 'buttons',
      //         title: 'Buttons'
      //     },
      //     {
      //         path: 'notification',
      //         title: 'Notification'
      //     },
      //     {
      //         path: 'tabs',
      //         title: 'Tabs'
      //     },
      //     {
      //         path: 'file-tree',
      //         title: 'File Tree'
      //     },
      //     {
      //         path: 'modals',
      //         title: 'Modals'
      //     },
      //     {
      //         path: 'progress-bar',
      //         title: 'ProgressBar'
      //     },
      //     /*  {
      //          path: 'loading',
      //          title: 'Loading'
      //      }, */
      // ]
  },
  {
      path: 'form',
      title: 'Slider Image',
      icon: 'image',
      // children: [
      //     {
      //         path: 'form-inputs',
      //         title: 'Form Inputs'
      //     },
      //     {
      //         path: 'form-layouts',
      //         title: 'Form Layouts'
      //     },
      //     {
      //         path: 'file-upload',
      //         title: 'File Upload'
      //     },
      //     {
      //         path: 'ng2-select',
      //         title: 'Ng2-Select'
      //     }
      // ]
  },
  {
      path: 'charts',
      title: 'Posts',
      icon: 'list',
      // children: [
      //     {
      //         path: 'echarts',
      //         title: 'Echarts'
      //     }
      // ]
  },
  {
      path: 'table',
      title: 'Notification',
      icon: 'bell',
      // children: [
      //     {
      //         path: 'basic-tables',
      //         title: 'Basic Tables'
      //     },
      //     {
      //         path: 'data-table',
      //         title: 'Data Table'
      //     }
      // ]
  },
  {
      path: 'menu-levels',
      title: 'LogOut',
      icon: 'sign-out',
      // children: [
      //     {
      //         path: 'levels1',
      //         title: 'Menu Level1',
      //         children: [
      //             {
      //                 path: 'levels1-1',
      //                 title: 'Menu Level1-1'
      //             }
      //         ]
      //     },
      //     {
      //         path: 'levels2',
      //         title: 'Menu Level2'
      //     }
      // ]
  },
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    @Input() menuInfo: any;
  public sidebarToggle = true;
  constructor(private _globalService:GloballocalstorageService ) {

    this.menuInfo=this.getmenudata();
    console.log(this.menuInfo);
   }

  private isToggleOn(item) {
    item.toggle === 'on' ? item.toggle = 'off' : item.toggle = 'on';
  }
/**
 * 
 * @param item 
 */
  private _selectItem(item) {
    //this._globalService._isActived(item);
    this._globalService.dataBusChanged('isActived', item);
  }
  ngOnInit(){
   
    
  }
  /**
   * @description get menu data
   */
  getmenudata(){
    return MENU_ITEM
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

  /* 初始化 判断当前路由状态信息 首次加载菜单状态 */
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
