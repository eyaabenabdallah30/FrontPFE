import { Component } from '@angular/core';
import { RdvsService } from 'src/app/service/rdvs.service';

@Component({
  selector: 'app-rvaujourdhui',
  templateUrl: './rvaujourdhui.component.html',
  styleUrls: ['./rvaujourdhui.component.css']
})
export class RVaujourdhuiComponent {
  user:any
  roleUser:string=""
  resultats:any=[]
  rdvsAct:any=[]
  rdvs:any=[]
  msg: any=''
  idRdv:any=0
  constructor(private rdvservice:RdvsService){}
  ngOnInit(){
    this.user=localStorage.getItem("user")
    if(this.user!=null){
      console.log('nuuuuuuuuu')
    
    this.roleUser=JSON.parse(this.user).Role
  }
  else{
    this.Logout()
  }



  this.AfficherRDVActuel()
  }

  // Fonction Logout()
  Logout(){
    localStorage.removeItem('user')
    window.location.href='/'
  }


  AfficherRDVActuel(){
    return this.rdvservice.GetRDVSAct().subscribe(result=>{
        
      this.resultats=result
      this.rdvsAct=this.resultats.data
      console.log('Actttttttttttttttt ')
      console.log(this.rdvsAct)
      
    })
  }
  // delete ById
  deleteById(id:any){
    console.log('Id Tsss '+id)
    return this.rdvservice.deleteRdv(id).subscribe(result=>{
      window.location.href='/RVaujourdhui'
      this.msg='supprimer avec succés'
      return this.msg
    })
   }
   
}
