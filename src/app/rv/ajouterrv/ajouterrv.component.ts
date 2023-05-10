import { Component } from '@angular/core';
import { PatientService } from 'src/app/service/patient.service';
import { RdvsService } from 'src/app/service/rdvs.service';

@Component({
  selector: 'app-ajouterrv',
  templateUrl: './ajouterrv.component.html',
  styleUrls: ['./ajouterrv.component.css']
})
export class AjouterrvComponent {
  resultats:any=[]
  patient:any={}
  patients:any=[]
  msg:String=''
 
  res:any=[]
  constructor(private rdvservice:RdvsService , private patientServ:PatientService){}
  ngOnInit(){
    this.AfficherPatients()
  }
  AddRDV(rdv:any){
    let rdvAdd:any={Nompatient:rdv.Nompatient,Prenompatient:rdv.Prenompatient,Contact:rdv.Contact,Date:rdv.Date,Heure:rdv.Heure,id_patient:rdv.id_patient}
    if(rdv.Nompatient=='' || rdv.Prenompatient=='' || rdv.Contact=='' || rdv.Date==''|| rdv.Heure=='')
    {
      this.msg='" Il faut remplir les champs ! "'
      return this.msg
    }
    else{
        return this.rdvservice.addRDV(rdvAdd).subscribe(
          result=>{ console.log('ajouter effective')
        console.log(rdvAdd)
      console.log(result)
      
      window.location.href="/consulterrv"
      this.msg='" Ajouter avec succéss " '
      return this.msg
      })
  }
 
  }
AfficherPatients(){
  return this.patientServ.GetPatients().subscribe(result=>{
      
    this.resultats=result
    this.patients=this.resultats.patients
    
  })
}

detailPatient(Idpatient:any){
  console.log(Idpatient )
  return this.patientServ.detailPatient(Idpatient).subscribe(result=>{
      
    this.resultats=result
    this.patient=this.resultats.patient
    
  })
}
} 
