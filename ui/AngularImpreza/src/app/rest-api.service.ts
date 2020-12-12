import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  readonly APIUrl = 'http://127.0.0.1:8000/app/'
  readonly APILocation = 'http://127.0.0.1:8000/app/location/'

  constructor(private http: HttpClient) { }

  getLocationList():Observable<any[]>{
    return this.http.get<any[]>(this.APILocation)
  }

}
