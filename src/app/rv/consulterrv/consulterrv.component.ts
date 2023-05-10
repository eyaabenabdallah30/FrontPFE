import { Component } from '@angular/core';
import { RdvsService } from 'src/app/service/rdvs.service';

@Component({
  selector: 'app-consulterrv',
  templateUrl: './consulterrv.component.html',
  styleUrls: ['./consulterrv.component.css']
})
export class ConsulterrvComponent {
  user:any
  roleUser:string=""
  resultats:any=[]
  rdvs:any=[]
  idRdv:any=0
  msg: any=''
  constructor(private rdvservice:RdvsService){}
  ngOnInit(){
    /**** */
    this.user=localStorage.getItem("user")
    if(this.user!=null){
      console.log('nuuuuuuuuu')
    
    this.roleUser=JSON.parse(this.user).Role
    if(this.roleUser=='Administrateur'){window.location.href='/consultercompte'}
  }
  else{
    this.Logout()
  }
  /*********** */
  // Afficher RDVS
   this.AfficheRDVS()
  }

  // Fonction Logout()
  Logout(){
    localStorage.removeItem('user')
    window.location.href='/'
  }

  AfficheRDVS(){
    return this.rdvservice.GetRDVS().subscribe(result=>{
      this.resultats=result
      this.rdvs=this.resultats.data
    })
  }

  SearchRDVS(search:any){
    console.log('Search '+search)
    return this.rdvservice.SearchRdv(search).subscribe(result=>{
      this.resultats=result
      this.rdvs=this.resultats.data
    })
    
  }

  // delete ById
   deleteById(id:any){
    console.log('Id Tsss '+id)
    return this.rdvservice.deleteRdv(id).subscribe(result=>{
      window.location.href='/consulterrv'
      this.msg='supprimer avec succés'
      return this.msg
    })
   }

  // delete All

  deleteAll(){
    return this.rdvservice.deleteAllRdvs().subscribe(result=>{
      window.location.href='/consulterrv'
      this.msg='supprimer avec succés'
      return this.msg
    })
   }
}
