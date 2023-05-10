import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultationService } from 'src/app/service/consultation.service';
import { PatientService } from 'src/app/service/patient.service';
@Component({
  selector: 'app-consultationaaffich',
  templateUrl: './consultationaaffich.component.html',
  styleUrls: ['./consultationaaffich.component.css']
})
export class ConsultationaaffichComponent {

constructor(private Route:ActivatedRoute,private consservice:ConsultationService,private patientServ:PatientService ){}
user:any
  roleUser:string=""
  id:any=this.Route.snapshot.params['id']
  id_Consultation:any=0
  resultats:any=[]
  consultations:any=[]
  idPatient:any=0
  patient:any=[]
  ngOnInit(){
    let id=this.Route.snapshot.params['id']
    console.log('IDDDDDDD '+id)
    this.detailPatient(id)

    this.Affichage()
  
    console.log('IDDDD '+this.id)
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
//
Affichage(){
return this.consservice.GetCONS(this.id).subscribe(res=>{
  this.resultats=res
  this.consultations=this.resultats.consultaion
 
  

})
}
// detailConsultation

detailConsultation(idConsultation:any){
  this.id_Consultation=idConsultation
  return this.consservice.detailCONS(idConsultation).subscribe(res=>{
    this.resultats=res
    console.log(this.resultats)
  })
}

// detailConsultation
msg:any=''
deleteConsultation(idConsultation:any){
 
  return this.consservice.deleteCONS(idConsultation).subscribe(res=>{
    
    this.resultats=res
    console.log(this.resultats)
    window.location.href=`/consultationaaffich/${this.id}`
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
