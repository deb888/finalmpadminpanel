
import { ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './app/login/component/login.component'
import { AuthgurdService } from './app/admin-auth/authgurd.service';
import { DashboardComponent } from './app/dashboard/component/dashboard.component';
import { CommonindexComponent } from './app/commonindex/component/commonindex.component';
import { PlaceComponent } from './app/places/component/place.component';
const routes: any = [

     { path: '', redirectTo: 'login', pathMatch: 'full' },
    // {
    //     path: 'home',
    //     component: CommonIndexComponent,
    //     children: [
    //         {
    //             path: '',
    //             component: HomeComponent
    //         },


    //         {
    //             path: 'notification',
    //             component: NotificationComponent,
    //             canActivate: [LmsschoolauthgurdService],
    //         },
    //     ]
    // },
    {
        path:'login',
        component:LoginComponent,
        pathMatch:'full'
    },

    //{ path: '', redirectTo: 'admin', pathMatch: 'full' },
    {
        path: 'dashboard',
        component: CommonindexComponent,
       // canActivate: [AuthgurdService],
        children: [

            {
                path: 'places',
                component: PlaceComponent,
                //canActivate: [LmsschoolauthgurdService],
            },
           

            // {
            //     path: 'notification',
            //     component: NotificationComponent,
            //     canActivate: [LmsschoolauthgurdService],
            // },
        ]
    },
 { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, { enableTracing: false, useHash: true });
