import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http"


@Injectable()
export class UserService {

  constructor(private http:Http) { }
  baseUrl:string='api/';


}
