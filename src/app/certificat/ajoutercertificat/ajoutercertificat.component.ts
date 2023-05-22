import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CertificatService } from 'src/app/service/certificat.service';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-ajoutercertificat',
  templateUrl: './ajoutercertificat.component.html',
  styleUrls: ['./ajoutercertificat.component.css']
})
export class AjoutercertificatComponent {
  msg:any=""
  patients:any=[]
    resultats:any=[]
    patient:any={}
     id=this.Route.snapshot.params['id']
  constructor(private patientServ:PatientService, private Route:ActivatedRoute,private certificatserviice:CertificatService){
    this.AfficherPatients()
  }

  AjoutCertifcat(certificat:any){
    let certificatUser:any={
      id_patient: certificat.id_patient,
  nompatient: certificat.nompatient,
  prenompatient: certificat.prenompatient,
  diagno: certificat.diagno,
  datedebut: certificat.datedebut,
  datefin: certificat.datefin
    }
    if(certificat.id_patient=='' || certificat.nompatient=='' || certificat.prenompatient=='' || certificat.datedebut==''){
      this.msg='"Il faut remplir tous les champs"'
      return this.msg
    }
    else{
   return this.certificatserviice.AddCertifcat(certificatUser).subscribe(data=>{
    console.log(data);

   window.location.href=`/consultercertificat/${this.id}`
       this.msg='"Ajouter avec succés"'
      return this.msg
   })
  }
  }
AfficherPatients(){
    return this.patientServ.GetPatients().subscribe(result=>{
        
      this.resultats=result
      this.patients=this.resultats.patients
      
    })}
    detailPatient(Idpatient:any){
      console.log(Idpatient )
      return this.patientServ.detailPatient(Idpatient).subscribe(result=>{
          
        this.resultats=result
        this.patient=this.resultats.patient
        console.log('/********************')
        console.log(this.patient)
        
      })
    
      
      }




}
