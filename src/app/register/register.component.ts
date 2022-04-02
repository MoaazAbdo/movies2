import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  error:string=""
  constructor(private _auth:AuthService, private _Router:Router) { }

  registerForm = new FormGroup({
    "first_name": new FormControl(
      null,
      [Validators.required, Validators.minLength(3), Validators.maxLength(10)]
      ),
    "last_name": new FormControl(
      null,
      [Validators.required, Validators.minLength(3), Validators.maxLength(10)]
      ),
    "email": new FormControl(
      null,
      [Validators.required, Validators.email]
      ),
    "password": new FormControl(
      null,
      [Validators.required, Validators.minLength(3), Validators.maxLength(15)]
      ),
    "age": new FormControl(
      null,
      [Validators.required, Validators.min(16), Validators.max(50)]
      )
  });

  submitRegisterform(reg_fo:any) {
    this._auth.register(reg_fo.value).subscribe(
      (response) => {
        if (response.message="success") {
          this._Router.navigate(['\login']);
        } else{
          this.error = response.errors.email.message;
        }
      }
    )
    //console.log(reg_fo.value)
  }
  ngOnInit(): void {
  }

}
