import { Component } from '@angular/core';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-ajouterpatient',
  templateUrl: './ajouterpatient.component.html',
  styleUrls: ['./ajouterpatient.component.css']
})
export class AjouterpatientComponent {
  msg: string | undefined;
  
  constructor(private patientServ:PatientService){}


  AjoutPatient(patient:any){
    if(patient.nompatient=='' || patient.prenompatient=='' || patient. datenaissance=='' || patient. sexe==''|| patient.etatcivil ==''|| patient.telephone ==''|| patient.email ==''|| patient.adresse =='')
    {
      this.msg='" Il faut remplir les champs !"'
      return this.msg
    }
    else{
    
  
    return this.patientServ.AddPatient(patient).subscribe(
      result=>{ console.log('ajouter effective')
   // console.log(patient)
  console.log(result)
  
  window.location.href="/dossierpatient"
  this.msg='"Ajouter avec succés"'
    return this.msg

  }
    )
  }

}
}

