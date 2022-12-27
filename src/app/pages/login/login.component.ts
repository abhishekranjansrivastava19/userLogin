import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { LocalstorageServiceService } from 'src/app/service/localstorage-service.service';
// import { AuthguardService } from 'src/app/service/authguard.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

form:FormGroup
islogin = false;
authError = false;
authMessage = 'Email or Password are wrong';
 


constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private localstorageServiceService: LocalstorageServiceService,){

  this.form = this.fb.group({
    'email': ['', [Validators.required]],
    'password': ['', Validators.required],
  })
 }
 getUser(){
  this.islogin = true;
  if (this.form.invalid) return;
  this.auth.login(this.form.value, this.form.value).subscribe(
    (user) => {
      this.authError = false;
      this.localstorageServiceService.setToken(User.token);
      this.router.navigate(['/']);
    })

 }
}