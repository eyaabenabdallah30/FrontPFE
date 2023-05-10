import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient ){}
    private API_adduser="http://localhost:5000/adduser" 
    private API_login="http://localhost:5000/login"
    loginuser(pers:User){
      console.log('email:'+pers.Email+'\n pwd:'+pers.Motdepasse)
      return this.http.post(this.API_login,pers)

    }
      adduser(pers:User){
        console.log(pers)
        return this.http.post(this.API_adduser,pers)
  } 
 
  getUsers(){
    return this.http.get("http://localhost:5000/gererCompte")
  }

   
  deleteUser(id:any){
    return this.http.delete("http://localhost:5000/deleteUser/"+id)
  }

  detailUser(id:any){
    return this.http.get("http://localhost:5000/detail/"+id)
  }

  ModifierUser(id:any,user:any){
    return this.http.put("http://localhost:5000/update/"+id,user)
  }
}
