import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';

const jwt = new JwtHelperService();

class DecodedToken {
  exp: number;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly APIG = 'http://0.0.0.0:8000'
  readonly APIAPP = 'http://0.0.0.0:8000/app'
  readonly APIUser = this.APIG+'/app/user/'

  private decodedToken;

  constructor(private http: HttpClient) {
    this.decodedToken = JSON.parse(localStorage.getItem('auth_meta')) || new DecodedToken();
}


  postUser(val:any): Observable<any>{
    return this.http.post(this.APIUser, val);
  }

  public login(userData: any): Observable<any> {
    const URI = this.APIAPP + '/token/';
    return this.http.post(URI, userData).pipe(map(token => {
      console.log(token['access'])
      return this.saveToken(token['access']);
    }));
  }

  private saveToken(token: any): any {
    this.decodedToken = jwt.decodeToken(token);
    localStorage.setItem('auth_tkn', token);
    localStorage.setItem('auth_meta', JSON.stringify(this.decodedToken));
    return token;
  }

  public logout(): void {
    localStorage.removeItem('auth_tkn');
    localStorage.removeItem('auth_meta');

    this.decodedToken = new DecodedToken();
  }

  public isAuthenticated(): boolean {
    return moment().isBefore(moment.unix(this.decodedToken.exp));
  }

  public getUsername(): string {
    return this.decodedToken.username;
  }

  // <ng-container *ngIf="auth.isAuthenticated()">
        
  // </ng-container>


}
