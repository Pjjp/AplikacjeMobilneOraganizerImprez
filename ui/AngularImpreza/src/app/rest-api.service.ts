import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  readonly APIG = 'http://127.0.0.1:8000/'
  readonly APIUrl = 'http://127.0.0.1:8000/app/'
  readonly APILocation = 'http://127.0.0.1:8000/app/location/'
  readonly APIGuest = 'http://127.0.0.1:8000/app/guest/'

  constructor(private http: HttpClient) { }

  getLocationList():Observable<any[]>{
    return this.http.get<any[]>(this.APILocation);
  }

  getGuestList():Observable<any[]>{
    return this.http.get<any[]>(this.APIGuest);
  }

  getGuestById(id):Observable<any>{
    console.log(this.APIGuest+String(id));
    console.log(this.http.get<any>(this.APIGuest+String(id)));
    return this.http.get<any>(this.APIGuest+String(id));
  }

}
