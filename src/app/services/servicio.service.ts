import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }

  getCorredores(){
    return this.http.get('http://ergast.com/api/f1/drivers.json');
  }
}
