import { Component } from '@angular/core';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-dossierpatient',
  templateUrl: './dossierpatient.component.html',
  styleUrls: ['./dossierpatient.component.css']
})
export class DossierpatientComponent {
  resultats:any=[]
  patients:any=[]
  msg:String=''
  idPatient:any=0
  constructor(private patientServ:PatientService){}
  user:any
  roleUser:string=""
  ngOnInit(){
    this.AfficherPatients()

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
  
  AfficherPatients(){
    return this.patientServ.GetPatients().subscribe(result=>{
      
      this.resultats=result
      this.patients=this.resultats.patients
      console.log(this.patients.length)
    })
  }

  SearchPatientS(param:any){
    console.log('Search '+param)
    return this.patientServ.SearchPatient(param).subscribe(result=>{
      this.resultats=result
      this.patients=this.resultats.patients
      console.log(this.resultats.patients.length+':::: nb')
    

    })
    
  }

  deleteDossier(id:any){
   
    return this.patientServ.deletePatient(id).subscribe(result=>{
     window.location.href='/dossierpatient'
     this.msg='supprimer avec succés'
     return this.msg
    }
    )}

}

