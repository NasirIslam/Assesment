import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserModule } from './user-module/user.module';
import { AppRoutingModule } from './app-routing.module';
import { AlertModule } from 'ngx-bootstrap';
import { UserService } from './core/user.service';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MasterModule } from './master/master.module';
import {ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    UserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    FlexLayoutModule,
    MasterModule,
    ReactiveFormsModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
