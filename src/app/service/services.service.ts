import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { reto26array } from '../models/usuarios';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }
  getReto26All():Observable<reto26array>{
    let apiUser = environment.rutareto26 + 'users/';
    return this.http.get<reto26array>(apiUser);
  }
}
