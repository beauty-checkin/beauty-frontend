import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { LocalStorageModule } from 'angular-2-local-storage';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { NavigationComponent } from './main/navigation/navigation.component';
import { AdminIndexComponent } from './admin/admin-index/admin-index.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    MainComponent,
    DashboardComponent,
    NavigationComponent,
    AdminIndexComponent
  ],
  imports: [
    LocalStorageModule.withConfig({
      prefix: 'beauty-storage',
      storageType: 'localStorage'
    }),
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path : 'admin',
        component : AdminComponent,
        children : [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: '',
                component: AdminIndexComponent
            }
        ]
      },
      {
        path : '',
        component : MainComponent,
        children : [{
          path: '',
          component: DashboardComponent
        }]
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
