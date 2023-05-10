import { Component, OnInit } from '@angular/core';
import {UserService} from'../service/user.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  msg:any=''
 
  res:any=[]
  constructor(private userservice:UserService){}
ngOnInit(): void{}
loginUser(p:any){
 console.log(p)
 
  return this.userservice.loginuser(p).subscribe(
    result=>{ 
    this.res=result
 this.msg=this.res.msg
 
 if(this.res.msg=='succes'){
  localStorage.setItem('user',JSON.stringify(this.res.user[0]))
  window.location.href='/interface'

  
 }
console.log(this.res.user[0].Role)}


  )}
  

}
