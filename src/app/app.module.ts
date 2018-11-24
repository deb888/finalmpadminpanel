import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule } from './admin-auth/auth.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CommonindexModule } from './commonindex/commonindex.module';
import { PlacesModule } from './places/places.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { AppRouting } from 'src/app.router';
import { RequestInterceptorService } from './shared/request.interceptor';
import { menuService } from './shared/menu.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    LoginModule,
    HttpClientModule,
    AuthModule,
    HeaderModule,
    FooterModule,
    DashboardModule,
    CommonindexModule,
    PlacesModule,
    SidebarModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true },menuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
