import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CertificatService } from 'src/app/service/certificat.service';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-modifiercertificat',
  templateUrl: './modifiercertificat.component.html',
  styleUrls: ['./modifiercertificat.component.css']
})
export class ModifiercertificatComponent {
  msg: any;

  idPatient= this.Route.snapshot.params['idPatient']
  idCertificat= this.Route.snapshot.params['idCertificat']
  certificat:any={}
  constructor(private Route:ActivatedRoute,private patientServ:PatientService,private certificatserviice:CertificatService ){
   this.detailCertificat()
  }

detailCertificat(){
  return this.certificatserviice.detailCertificat(this.idCertificat).subscribe(data=>{
      this.certificat=data
      console.log('/*******')
      console.log(this.certificat)
  })
}

ModifierCertificat(certif:any){
  if( certif.diagno=='' ||certif.datedebut==''||certif.datefin=='')
    {
      this.msg=' "Vérifier les champs !"'
      return this.msg
    }
    else{
      return this.certificatserviice.ModifierCertificat(certif).subscribe(res=>{
        console.log(certif)
       window.location.href=`/consultercertificat/${this.idPatient}`

        this.msg=' "Modifier avec succés "'
      return this.msg
      })}
}

}

