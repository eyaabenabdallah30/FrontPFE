import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdonnanceService } from 'src/app/service/ordonnance.service';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-consulterord',
  templateUrl: './consulterord.component.html',
  styleUrls: ['./consulterord.component.css']
})
export class ConsulterordComponent {
  user:any
  roleUser:string=""
  data:any=[]
  ordonances:any=[] 
  patient:any={}
  patients:any=[]
  resultats:any=[]
  idPatient:any=0
   id:any=this.Route.snapshot.params['id']
   id_Ordonance:any=0
  constructor(private ordservice:OrdonnanceService,private Route:ActivatedRoute,private patientServ:PatientService ){}
  ngOnInit(){
    let id=this.Route.snapshot.params['id']
    console.log('IDDDDDDD '+id)
    this.detailPatient(id)


    this.user=localStorage.getItem("user")
    if(this.user!=null){
      console.log('nuuuuuuuuu')
    
    this.roleUser=JSON.parse(this.user).Role
    if(this.roleUser=='Administrateur'){window.location.href='/consultercompte'}
    this.Affichage(this.id)
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


  Affichage(patient:any){
    return this.ordservice.GetOrdn(patient).subscribe(res=>{
    this.data=res
    this.ordonances=this.data.ord

    console.log(res)
    })
  }
  // detail Ordonance
  detailOrdonance(idOrdonance:any){
    this.id_Ordonance=idOrdonance
    console.log('Id Ord '+this.id_Ordonance)
    return this.ordservice.detailOrd(idOrdonance).subscribe(res=>{
      this.resultats=res
      console.log(this.resultats)
    })
  }
  msg:any=''
  Supprimer(id:any){
    console.log('*******************************\n'+ id)
    return this.ordservice.deleteOrd(id).subscribe(res=>{
      
      window.location.href=`/consulterord/${this.id}`
     
      this.msg='supprimer avec succés'
      return this.msg
    })
  }
  detailPatient(id:any){
    return this.patientServ.detailPatient(id).subscribe(result=>{
      
      this.resultats=result
      this.patient=this.resultats.patient
      this.idPatient=id
      console.log(this.patient.length)
    })
  }
 
}
