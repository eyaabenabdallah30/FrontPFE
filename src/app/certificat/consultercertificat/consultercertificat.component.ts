import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CertificatService } from 'src/app/service/certificat.service';
import { PatientService } from 'src/app/service/patient.service';
@Component({
  selector: 'app-consultercertificat',
  templateUrl: './consultercertificat.component.html',
  styleUrls: ['./consultercertificat.component.css']
})
export class ConsultercertificatComponent {
  constructor(private Route:ActivatedRoute,private patientServ:PatientService,private certificatserviice:CertificatService ){}
msg:any=''
  user:any
  roleUser:string=""
  resultats:any=[]
  certificats:any=[]
  idPatient:any=0
  patient:any=[]
  idCertificat=0
  ngOnInit(){
    let id=this.Route.snapshot.params['id']
    this.idPatient=id
    console.log('IDDDDDDD '+id)
    this.detailPatient(id)

    this.user=localStorage.getItem("user")
    if(this.user!=null){
      console.log('nuuuuuuuuu')
    
    this.roleUser=JSON.parse(this.user).Role
  }
  else{
    this.Logout()
  }

  this.AfficherCertificats()
  }

  AfficherCertificats(){
    return this.certificatserviice.GetCertifcat(this.idPatient).subscribe(data=>{
      this.resultats=data
      this.certificats=this.resultats.certif
    })
  }
  // Fonction Logout()
  Logout(){
    localStorage.removeItem('user')
    window.location.href='/'
    
  }
  detailPatient(id:any){
    return this.patientServ.detailPatient(id).subscribe(result=>{
      
      this.resultats=result
      this.patient=this.resultats.patient
      this.idPatient=id
      console.log(this.patient.length)
    })
  }
  
  
 
 

  deleteCertificat(id:any){
    id=this.idCertificat
    return this.certificatserviice.deleteCertificat(id).subscribe(data=>{
      this.msg='"Supprimer avec succés  "'
      window.location.href=`/consultercertificat/${this.idPatient}`

    })
  }
  

}
