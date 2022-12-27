import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'user-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
 form: FormGroup;
 constructor(private fb: FormBuilder, private auth: AuthService){
  this.form = this.fb.group({
    'name': ['', Validators.required],
    'email': ['', Validators.required],
    'phone': ['', Validators.required],
    'password': ['', Validators.required],
  })
 }
 signup(){
  const User = this.form.value;
  delete User['confirm']
  this.auth.signup(User).subscribe(res=>{
    alert("User Registered successfully!");
  })
  
 }
}
