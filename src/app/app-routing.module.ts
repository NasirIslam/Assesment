import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { LoginComponent } from './user-module/login/login.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent }

    ])

  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
