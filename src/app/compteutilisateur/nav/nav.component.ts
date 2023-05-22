import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  users:any=[]
  msg:any=''
  user:any=null
  
  role:string=""
  id_user:any=0
    constructor(private usersev:UserService){
  
      this.getUsers()
      this.user=localStorage.getItem("user")
      
      this.role=JSON.parse(this.user).Role
    }
    getUsers(){
      return this.usersev.getUsers().subscribe(data=>{
        this.users=data
      })
    }
     // Fonction Logout()
 Logout(){
  
  localStorage.removeItem('user')
  window.location.href='/'

}
}
