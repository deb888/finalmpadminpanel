import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './component/sidebar.component';
import { ShareModule } from '../shared/share/share.module';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './component/menu.component';
import { ContentTopComponent } from './component/content-top.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    RouterModule
  ],
  declarations: [SidebarComponent, MenuComponent,ContentTopComponent],
  exports:[SidebarComponent,MenuComponent,ContentTopComponent]
})
export class SidebarModule { }
