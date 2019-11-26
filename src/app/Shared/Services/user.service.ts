import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, ResponseContentType } from '@angular/http';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Client } from '../models/client.model';
import { User } from '../models/user.model';
@Injectable()
export class UserService {
  user: User;
  forgetpassword: boolean;
  profileTitle: string;

  constructor(private apiService: ApiService, private jwtService: JwtService, private http: Http) { }

  public currentUserSubject = new BehaviorSubject<User>(new User());
  public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  userId: number = 0;

  private clientUserSubject = new BehaviorSubject<Client>(new Client());
  public clientUser = this.clientUserSubject.asObservable().distinctUntilChanged();


  clearSession() {
    this.jwtService.destroyToken();
    this.jwtService.destroygetUserAccountId();
    this.currentUserSubject.next(new User());
    this.isAuthenticatedSubject.next(false);
  }

  populate() {
    if (this.jwtService.getToken()) {
      this.apiService.post('/api/getsession', window.localStorage['jwtToken'])
        .subscribe(
          data => {
            if (data.item) {
              //this.user = data;
              this.setAuth(data);
         //     console.log("Getsession :", this.setAuth(data))
            }
          },
        );
    }
  }

  //Login Credentials
  attemptAuth(credentials): Observable<User> {
    return this.apiService.post('/api/authsession', credentials)
      .map(
        data => {
          //this.user = data;
       //   console.log("Login authsession :", data)
          this.setAuth(data);
        //  console.log("Set data :", this.setdata(data.item.clientMasterId));
          return data;
        }

      );
  }

  //Set Authentication
  setAuth(user: User) {

    this.jwtService.saveToken(user.item.token);
    this.jwtService.saveUserAccountId(user.item.userId);

    // Set current user data into observable
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  setClient(client: Client) {
    // Set current user data into observable
    this.clientUserSubject.next(client);
  }
  datacm: any;

  getdata(userId: any) {
    return this.apiService.get(`/api/v1/client/getuserbyid/${userId}`)
      .map(
        data => {
          if (data) {
            this.datacm = data
            this.setClient(this.datacm);
            return data;
          }
        })
  }


  setdata(userId: any) {
    return this.apiService.get(`/api/v1/client/getuserbyid/${userId}`)
      .subscribe(
        data => {
          // data.clientData = this.clientmaster
          console.log(data)
          this.setClient(data);
          return data;
        })
  }






}