import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _auth: AuthService, private _router: Router) { }
  error:string = "";
  loginForm = new FormGroup({
    email: new FormControl(null,
      [Validators.required, Validators.email]
      ),
    password: new FormControl(null,
      Validators.required)
  });

  submitLoginForm(loginForm:FormGroup) {
    this._auth.login(loginForm.value).subscribe(
      (res) => {
        if (res.message="success") {
          localStorage.setItem('userToken', res.token);
          this._auth.saveCurrentUser();
          this._router.navigate(['\home']);
        } else {
          this.error = res.message;
        }
      }
    )
  }

  ngOnInit(): void {
  }

}
