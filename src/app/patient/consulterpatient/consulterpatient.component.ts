import { Component } from '@angular/core';
import { PatientService } from 'src/app/service/patient.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-consulterpatient',
  templateUrl: './consulterpatient.component.html',
  styleUrls: ['./consulterpatient.component.css']
})
export class ConsulterpatientComponent {
  user:any
  roleUser:string=""
  idPatient:any=0
  constructor(private patientServ:PatientService,private Route:ActivatedRoute){}
  ngOnInit(){

/***** */
let id=this.Route.snapshot.params['id']
console.log('IDDDDDDD '+id)
this.detailPatient(id)
/******* */

    this.user=localStorage.getItem("user")
    if(this.user!=null){
      console.log('nuuuuuuuuu')
    
    this.roleUser=JSON.parse(this.user).Role
    if(this.roleUser=='Administrateur'){window.location.href='/consultercompte'}
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

  resultats:any=[]
  patient:any=[]


  detailPatient(id:any){
    return this.patientServ.detailPatient(id).subscribe(result=>{
      
      this.resultats=result
      this.patient=this.resultats.patient
      this.idPatient=id
      console.log(this.patient.length)
    })
  }

  deletePatient(id:any){
    return this.patientServ.deletePatient(id).subscribe(result=>{
      window.location.href='/dossierpatient'
    })
  }
}
