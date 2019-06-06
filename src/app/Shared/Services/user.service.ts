import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ApiService } from './api.service';
import { User } from '../models/user.model';
import { JwtService } from './jwt.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, ResponseContentType } from '@angular/http';
import { Client } from '../models/client.model';
import { ReplaySubject } from 'rxjs/ReplaySubject';

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

  clientMasterId:number =0;

  private clientUserSubject = new BehaviorSubject<Client>(new Client());
  public clientUser = this.clientUserSubject.asObservable().distinctUntilChanged();


  clearSession()
  {
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
              console.log("+ : :::::"+this.setAuth(data))
            }
          },
       );
    }
  }

  //Login Credentials
  attemptAuth(credentials): Observable<User> {
   //alert("aaaaaa"+JSON.stringify(credentials));
    return this.apiService.post('/api/authsession', credentials)
      .map(
        data => {
          //this.user = data;
           console.log("auth",data)
          this.setAuth(data);
         // this.setdata(data.item.clientMasterId);
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

  getdata(CMId: any) {
    return this.apiService.get(`/api/v1/client/getclientmasterbyid/${CMId}`)
      .map(
        data => {
          if (data) {
            this.datacm = data
            this.setClient(this.datacm);
            return data;
          }
        })
  }

  
  setdata(CMId: any) {
    return this.apiService.get(`/api/v1/client/getclientmasterbyid/${CMId}`)
      .subscribe(
        data => {
          // data.clientData = this.clientmaster
          console.log(data)
          this.setClient(data);
          return data;
        })
  }
 //Update New Password
 updateNewPassword(randomID:String,newPassword:String,confirmPassword:String) {
   return this.apiService.post(`/api/updatenewpassword/${randomID}/${newPassword}/${confirmPassword}`);
 }
  
 //Update Profile Details
 updateProfileDetails(clientMasterID:String,data){ 
   return this.apiService.post(`/api/v1/client/updateProfileByUserAccount`, data);
 }
  uploadUserProfileImage(userclientID:any, data) {
   return this.apiService.post(`/api/v1/client/uploadImageByUserAccount?userAccountId=`+ userclientID, data);
  } 

/* ProfileP Passwrd */
  updateProfilePassword(oldPassword:String, newPassword:String) {
    return this.apiService.post(`/api/v1/client/updateProfilePasswordByUserAccount?oldPassword=${oldPassword}&newPassword=${newPassword}`, null);
  } 

//change password
    userChangepassword(random,password,changepassword) { 
      return this.apiService.post(`/api/updatenewpassword?randId=${random}&newPassword=${password}&confirmPassword=${changepassword}`);
    }
//reset password
   usermailReset(email) {     
     return this.apiService.post(`/api/resetpassword?email=${email}`);
   }

   getrandomeuserData(mode) {

    return this.apiService.get("https://api.randomuser.me/?gender=" + mode)
        .map(
            res => {
                return res;
                // this.data$.next(res);
            },
            err => {
                console.log('Error occured');
            }
        );

}

}


