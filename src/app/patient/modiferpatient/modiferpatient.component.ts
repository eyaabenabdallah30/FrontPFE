import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/service/patient.service';
@Component({
  selector: 'app-modiferpatient',
  templateUrl: './modiferpatient.component.html',
  styleUrls: ['./modiferpatient.component.css']
})
export class ModiferpatientComponent {
idPatient:any=0
data:any={}
patient:any={}
msg: string | undefined;
  constructor(private Route:ActivatedRoute,private patientServ:PatientService){

   this.idPatient=Route.snapshot.params['idPatient']
   this.detailPatient()

}


detailPatient(){
  return this.patientServ.detailPatient(this.idPatient).subscribe(data=>{
    this.data=data
    this.patient=this.data.patient
    console.log(this.patient.nompatient)
  })
}


UpdatePatient(patient:any){
  if(patient.nompatient=='' || patient.prenompatient=='' || patient. datenaissance=='' || patient. sexe==''|| patient.etatcivil ==''|| patient.telephone ==''|| patient.email ==''|| patient.adresse =='')
    {
      this.msg='"vérifier les champs"'
      return this.msg
    }
    else{
  return this.patientServ.ModifierPatient(patient).subscribe(data=>{
    console.log(patient)
    window.location.href=`/consulterpatient/${this.idPatient}`
    this.msg='"Modifier avec succés"'
    return this.msg

  })}
}

}
