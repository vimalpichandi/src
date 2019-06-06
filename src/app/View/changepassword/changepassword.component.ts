import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../shared/services/user.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  model: any = {};
  public timealert = environment.timelimit;
  userDetail: any;
  constructor(private userService: UserService,private toast:ToastrService) { 
  }

  passwordDetails:any={}

  ngOnInit() {
  

  this.passwordDetails = {
    oldpasswordmod:"",
    newpasswordmod:"",
    confirmPasswordmod:""  
    } 
  }
  backtohome(){
    if(this.userDetail.item.appRoles == 'company'){
      return '/admin'
    }else{
      return '/home/careplan'
    }
  }
  
  updatePassDetails:any;
  resetForm:any;
  dochangePassword(dataChangePassword,resetpasswordForm) {
    
    this.resetForm = resetpasswordForm;
    console.log("oldPassword : "+dataChangePassword.passwords.oldPassword)
    console.log("Password : "+dataChangePassword.passwords)
    this.userService
    .updateProfilePassword(dataChangePassword.passwords.oldPassword, dataChangePassword.passwords.confirmPassword)
    .subscribe(
      data => {
        this.updatePassDetails = data;  
        if(this.updatePassDetails.status=="success")
        {
          this.toast.success(this.updatePassDetails.message,  '', {timeOut: this.timealert,progressBar:true});
          this.clearChangePasswordValue();
        } else
        {
          this.toast.error(this.updatePassDetails.message,  '', {timeOut: this.timealert,progressBar:true});
          this.clearChangePasswordValue();
        }

    },err => {
      this.toast.error(this.updatePassDetails.message,  '', {timeOut: this.timealert,progressBar:true});
        this.clearChangePasswordValue();
    })
  }

  clearChangePasswordValue()
  {
    this.resetForm.resetForm();
  }

  
  ///////////// password changes

  passval: boolean = true;
	passval1: boolean = true;
	passval2: boolean = true;
	passval3: boolean = true;
	passval4: boolean = true;
	passkey: boolean = true;
	passkey1: boolean = true;
	passkey2: boolean = true;
	passkey3: boolean = true;
	passkey4: boolean = true;
	passlast: boolean = true;
	passlast1: boolean = true;
	passlast2: boolean = true;
	passlast3: boolean = true;
  passlast4: boolean = true;
  
  onKey(event: any) {
    console.log(event.target.value)
		var lowerCaseLetters = /[a-z]/g;
		var upperCaseLetters = /[A-Z]/g;
		var numbers = /[0-9]/g;
		var special = /[#$^+=!*()@%&]/g;
		if (event.target.value.match(lowerCaseLetters)) {
      this.passval = true;
     
		}
		else {
			this.passval = false
		}
		if (event.target.value.match(upperCaseLetters)) {
			this.passval1 = true
		}
		else {
			this.passval1 = false
		}
		if (event.target.value.match(numbers)) {
			this.passval2 = true
		}
		else {
			this.passval2 = false
		}
		if (event.target.value.length >= 8) {
			this.passval3 = true
		}
		else {
			this.passval3 = false
		}
		if (event.target.value.match(special)) {
			this.passval4 = true
		}
		else {
			this.passval4 = false
		}

	}
	onKey1(event: any) {
		var lowerCaseLetters = /[a-z]/g;
		var upperCaseLetters = /[A-Z]/g;
		var numbers = /[0-9]/g;
		var special = /[#$^+=!*()@%&]/g;
		if (event.target.value.match(lowerCaseLetters)) {
			this.passkey = true
		}
		else {
			this.passkey = false
		}
		if (event.target.value.match(upperCaseLetters)) {
			this.passkey1 = true
		}
		else {
			this.passkey1 = false
		}
		if (event.target.value.match(numbers)) {
			this.passkey2 = true
		}
		else {
			this.passkey2 = false
		}
		if (event.target.value.length >= 8) {
			this.passkey3 = true
		}
		else {
			this.passkey3 = false
		}
		if (event.target.value.match(special)) {
			this.passkey4 = true
		}
		else {
			this.passkey4 = false
		}


	}
	onKey2(event: any) {
		var lowerCaseLetters = /[a-z]/g;
		var upperCaseLetters = /[A-Z]/g;
		var numbers = /[0-9]/g;
		var special = /[#$^+=!*()@%&]/g;
		if (event.target.value.match(lowerCaseLetters)) {
			this.passlast = true
		}
		else {
			this.passlast = false
		}
		if (event.target.value.match(upperCaseLetters)) {
			this.passlast1 = true
		}
		else {
			this.passlast1 = false
		}
		if (event.target.value.match(numbers)) {
			this.passlast2 = true
		}
		else {
			this.passlast2 = false
		}
		if (event.target.value.length >= 8) {
			this.passlast3 = true
		}
		else {
			this.passlast3 = false
		}
		if (event.target.value.match(special)) {
			this.passlast4 = true
		}
		else {
			this.passlast4 = false
		}
	}
}