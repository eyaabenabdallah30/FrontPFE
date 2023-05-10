import {Component , OnInit} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{FormGroup,FormBuilder } from "@angular/forms";
import { Route, Router } from '@angular/router';
import {UserService} from'../service/user.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit{
 msg: string | undefined;
 

constructor(private userservice:UserService){}
ngOnInit(): void{}

saveUser(p:any){
  if( p.Nom =='' || p.Prenom =='' || p.Email =='' || p.Motdepasse ==''|| p.Utilisateur ==''|| p.Role =='')
  {
    this.msg='"Il faut remplir les champs !"'
      return this.msg
  }
  else{
  return this.userservice.adduser(p).subscribe(
    result=>{ console.log('ajouter effective')
  console.log(p)
console.log(result)
window.location.href="/"
this.msg=' "Ajouter avec succés" '
      return this.msg

})
}
} 
}