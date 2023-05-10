import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-modifiercompte',
  templateUrl: './modifiercompte.component.html',
  styleUrls: ['./modifiercompte.component.css']
})
export class ModifiercompteComponent {
  idUser:any=this.router.snapshot.params['idUser']
  userData:any={}
  error=''
  users:any=[]
 msg:any=''
 user:any=null

role:string=""
  constructor(private router:ActivatedRoute,private usersev:UserService){ 
    this.user=localStorage.getItem("user")
    
    this.role=JSON.parse(this.user).Role

    this.detailUser(this.idUser)
  }
  detailUser(id:any){
  
    return this.usersev.detailUser(id).subscribe(data=>{
     this.userData=data
    })
  }
UpdateUser(user:any){
  if(user.Nom==''||user.Prenom==''||user.Prenom==''||user.Email==''||user.Motdepasse==''||user.Utilisateur==''||user.Role==''){
    this.error='"vérifier les champs"'
  return this.error
  }
  else{
    return this.usersev.ModifierUser(this.idUser,user).subscribe(data=>{

     this.userData=data
     this.error='"Modifier avec succés"' 
     window.location.href='/consultercompte'

    })
  }
}

  
// Fonction Logout()
Logout(){
  localStorage.removeItem('user')
  window.location.href='/'
}
}