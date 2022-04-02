import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  islogin:boolean = false;

  constructor(private _auth:AuthService) { 
    this._auth.currentUser.subscribe(()=> {
      if (this._auth.currentUser.getValue() != null) {
        this.islogin= true;
      } else {
        this.islogin = false;
      }  
    });
    
  }

  isLogout() {
    this._auth.logout();
  }
  


  ngOnInit(): void {
  }

}
