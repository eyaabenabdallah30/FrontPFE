import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-consultercompte',
  templateUrl: './consultercompte.component.html',
  styleUrls: ['./consultercompte.component.css']
})
export class ConsultercompteComponent {
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

  deleteUser(id:any){
    return this.usersev.deleteUser(id).subscribe(data=>{
      this.msg='" Delete OK "'
      window.location.href='/consultercompte'
    })
  }

  detailUser(id:any){
    this.id_user=id
    
  }
 // Fonction Logout()
 Logout(){
  
  localStorage.removeItem('user')
  window.location.href='/'

}


}
