import { Component, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import 'rxjs'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  comment = new FormControl("", Validators.required);
  name = new FormControl("", Validators.required);
  email = new FormControl("", [
    Validators.required,
    Validators.pattern("[^ @]*@[^ @]*")
  ]);

  /* Observable Solution */
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "comment": this.comment,
      "name": this.name,
      "email": this.email
    });
    this.form.valueChanges
        .filter(data => this.form.valid)
        .map(data => {
          data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, '');
          return data
        })
        .map(data => {
          data.lastUpdateTS = new Date();
          return data
        })
        .subscribe( data => console.log(JSON.stringify(data)));
  }



  onSubmit() {
    console.log("Form submitted!");
  }


  ngOnInit() {
  }

}
