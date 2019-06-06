import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { environment } from '../../../environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import {MustMatch} from './must-match.validator';


import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userDetail:any;
  public timealert = environment.timelimit;
  constructor(private userService: UserService,private formBuilder: FormBuilder,private toast:ToastrService) { 
    
  }

  passwordDetails:any={}
  profileDetails:any={}
  registerForm: FormGroup;
  confirmPasswordFg:FormGroup;
  ngOnInit() {
   
    this.getCurrentUser();
     
    /* this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required] ,
      phone: ['', Validators.nullValidator],
      email: ['', Validators.nullValidator]
 
    }); */
 
    this.passwordDetails = {
    oldpasswordmod:"",
    newpasswordmod:"",
    confirmPasswordmod:""  
    } 
 
   this.dataimg = this.apiurl+this.userDetail.item.userimagepath;
} 
get f() { return this.registerForm.controls; }
//Ssamp:any;
getCurrentUser() {  
  this.userService.currentUser.subscribe(
    (userData) => { 
      this.userDetail = userData; 
      
      this.profileDetails.firstName=this.userDetail.item.firstName;
      this.profileDetails.lastName=this.userDetail.item.lastName;
      this.profileDetails.phone=this.userDetail.item.phone;
      this.profileDetails.email=this.userDetail.item.email;
 
      // alert(JSON.stringify(this.userDetails.hasOwnProperty("item"))); 
      //alert(JSON.stringify(this.userDetail));
    }
  )
}

public dataimg:any;
profileImageFile:any;
public imgMaxSize: any = environment.imgsize;
public apiurl: any = environment.api_url;
public imageBase64content:any;

fileUpload(event) {
  let acceptFormat = ['image/png', 'image/x-png', 'image/jpeg', 'image/jpg']
  let self = this
  let reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  this.profileImageFile = event.target;
  reader.onload = (events: any) => {
    if (!acceptFormat.includes(event.target.files[0].type)) {
      // this.toast.error(`This file is not allowed, upload png or jpg file `)
      // this.myInputVariable.nativeElement.value = "";
      //alert("This file is not allowed, upload png or jpg file")
      return;
    }
    if (event.target.files[0].size > this.imgMaxSize) {
      // this.toast.error(`Maximum file size exceed, file size should be below 1024 Kb`)
      // this.myInputVariable.nativeElement.value = "";
      //alert("Maximum file size exceed, file size should be below 1024 K")
      return;
    } else {
      // alert("Ma");

      this.dataimg = events.target.result;

      let img =  events.target.result.split(',');
      this.imageBase64content = img[1];
      
      
      }

  }
}
  updatePasswordStatus:any;
  updatePassword()
  {
    this.userService
    .updateNewPassword(this.passwordDetails.oldpassword,this.passwordDetails.newpassword,this.passwordDetails.confirmPassword)
    .subscribe(
      data => {
        this.updatePasswordStatus = data;

        this.toast.error('This file is not allowed, upload png or jpg file ',  '', {timeOut: this.timealert,progressBar:true})
       
      })
  }
  submitted:any;
  updateDetailsStatus:any;
  updateProfileDetails(profileDetailsObj)
  {
 
    this.userService
     .updateProfileDetails(this.userDetail.item.clientMasterId,profileDetailsObj)
     .subscribe(
       data => {
         this.updateDetailsStatus = data;
        if(this.updateDetailsStatus.status=="success")
        {
          this.toast.success('Successfully Updated',  '', {timeOut: this.timealert,progressBar:true})
          this.uploadProfileImage();  
          this.ngOnInit();
          this.userService.populate();
        }else
        {
          this.toast.error('Something went wrong',  '', {timeOut: this.timealert, progressBar:true})
        }
         
    },err => {
      this.toast.error('Something went wrong',  '', {timeOut: this.timealert,progressBar:true})
    }
  )

    //this.uploadProfileImage();
  }

  base64str:String;
  updateImageStatus:any;
  imageData:any ={};
  test:any;

  uploadProfileImage()  
  { 
       if(this.imageBase64content!="" && this.imageBase64content!=null)
       { 
        let imageData = {
          "base64Image" : this.imageBase64content
        }


        this.userService
        .uploadUserProfileImage(this.userDetail.item.userAccountId, imageData)
        .subscribe(
          data => {
            this.updateImageStatus = data;
          
           
           // alert(JSON.stringify(this.updateImageStatus));
        })
     }
  }
  enableEditbIcon:boolean = true;
  changeTab(evt: any) {
    /* {"activeId":"ngb-tab-0","nextId":"ngb-tab-1"} */
    if(evt.activeId=="ngb-tab-0")
      this.enableEditbIcon = false;
    else
      this.enableEditbIcon = true;
  }

  updatePassDetails:any;
  resetForm:any;
  dochangePassword(dataChangePassword,resetpasswordForm)
  {
    this.resetForm = resetpasswordForm;
    this.userService
    .updateProfilePassword(dataChangePassword.passwords.oldPassword, dataChangePassword.passwords.confirmPassword)
    .subscribe(
      data => {
        this.updatePassDetails = data;

        
        if(this.updatePassDetails.status=="success")
        {
          this.toast.success(this.updatePassDetails.message,  '', {timeOut: this.timealert,progressBar:true});
          this.clearChangePasswordValue();
        }
        else
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
  backtohome(){
    if(this.userDetail.item.appRoles == 'SOLVEDGE'){
      return '/admin/home'
    }else{
      return '/user/home'
    }
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