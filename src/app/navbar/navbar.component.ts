import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user:any
  roleUser:string=""
  ngOnInit(){
    this.user=localStorage.getItem("user")
    if(this.user!=null){
      console.log('nuuuuuuuuu')
    
    this.roleUser=JSON.parse(this.user).Role
  }
  else{
    this.Logout()
  }
  }

  // Fonction Logout()
  Logout(){
    localStorage.removeItem('user')
    window.location.href='/'
  }

}
