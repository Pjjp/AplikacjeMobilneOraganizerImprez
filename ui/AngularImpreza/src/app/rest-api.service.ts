import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  // readonly APIG = 'http://127.0.0.1:8000'
  // readonly APIG = 'http://104.236.31.84:8000'
  readonly APIG = 'http://0.0.0.0:8000'
  readonly APIUrl = this.APIG+'/app/'
  readonly APILocation = this.APIG+'/app/location/'
  readonly APIGuest = this.APIG+'/app/guest/'
  readonly APIUser = this.APIG+'/app/user/'


  constructor(private http: HttpClient) { }

  getMainURL():string{
    return this.APIG
  }

  getLocationList():Observable<any[]>{
    return this.http.get<any[]>(this.APILocation);
  }

  getGuestList():Observable<any[]>{
    return this.http.get<any[]>(this.APIGuest);
  }

  getGuestById(id):Observable<any>{
    return this.http.get<any>(this.APIGuest+String(id));
  }

  getLocalById(id):Observable<any>{
    console.log(this.APILocation+String(id));
    return this.http.get<any>(this.APILocation+String(id));
  }

  addAgeSpan(val:any){
    return this.http.post(this.APIG + '/app/agespan/',val);
  }
  


}
