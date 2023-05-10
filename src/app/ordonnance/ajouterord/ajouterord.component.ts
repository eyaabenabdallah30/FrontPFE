import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdonnanceService } from 'src/app/service/ordonnance.service';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-ajouterord',
  templateUrl: './ajouterord.component.html',
  styleUrls: ['./ajouterord.component.css']
  
})
export class AjouterordComponent {
  data:any=[]
  ordonances:any=[] 
  patient:any={}
  patients:any=[]
  resultats:any=[]
   id:any=this.Route.snapshot.params['id']
  msg: any=''
  constructor(private patientServ:PatientService,private ordservice:OrdonnanceService,private Route:ActivatedRoute){
    this.AfficherPatients()
  }
  AfficherPatients(){
    return this.patientServ.GetPatients().subscribe(result=>{
        
      this.resultats=result
      this.patients=this.resultats.patients
      
    })
  }
 
  Ajout(ord:any){
    let Addord:any={categorie:ord.categorie,prescription:ord.prescription,nompatient:ord.nompatient,prenompatient:ord.prenompatient,date:ord.date, id_patient:ord.id_patient}
    if(ord.nompatient=='' || ord.prenompatient=='' || ord.prescription=='' ||ord.date=='')
    {
      this.msg='"Il faut remplir les champs !"'
      return this.msg
    }
    else{
    return this.ordservice.AddOrd(Addord).subscribe(res=>{
      console.log('Add Ordonance')
      console.log(ord)
      window.location.href=`/consulterord/${this.id}`
      this.msg='"Ajouter avec succés"'
      return this.msg
    })
     
    }
  }
  Supprimer(id:any){
    return this.ordservice.deleteOrd(id).subscribe(res=>{
      console.log(id)
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
