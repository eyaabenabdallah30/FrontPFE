import { Component } from '@angular/core';
import { ConsultationService } from 'src/app/service/consultation.service';
import { PatientService } from 'src/app/service/patient.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-consultationajouter',
  templateUrl: './consultationajouter.component.html',
  styleUrls: ['./consultationajouter.component.css']
})
export class ConsultationajouterComponent {
  
  resultats:any=[]
  CONS:any={}
  msg:String=''

  res:any=[]
  patient:any={}
  patients:any=[]
 
 id=0
  constructor(private consservice:ConsultationService,private patientServ:PatientService,private Route:ActivatedRoute){}
  ngOnInit(){
    this.AfficherPatients()
    this.id=this.Route.snapshot.params['id']
   
  }
  idConsultation:any=this.Route.snapshot.params['id']
  consultation:any={}
      
  
  AfficherPatients(){
    return this.patientServ.GetPatients().subscribe(result=>{
        
      this.resultats=result
      this.patients=this.resultats.patients
      
    })
  }
 
  AjouterCONS(cons:any){
    let Addcons:any={nompatient:cons.nompatient,prenompatient:cons.prenompatient,consultation:cons.consultation,date:cons.date, id_patient:cons.id_patient}
    if(cons.nompatient=='' || cons.prenompatient=='' || cons.consultation=='' ||cons.date=='')
    {
      this.msg='"Il faut remplir les champs !"'
      return this.msg
    }
    else{
        return this.consservice.AddCONS(Addcons).subscribe(
          result=>{ console.log('ajouter effective')
        console.log(Addcons)
      console.log(result)
         this.res.msg=='succes'
      window.location.href=`/consultationaaffich/${this.id}`
      this.msg='"Ajouter avec succés"'
      return this.msg
      })
  }
 
  }


  
detailPatient(Idpatient:any){
  console.log(Idpatient )
  return this.patientServ.detailPatient(Idpatient).subscribe(result=>{
      
    this.resultats=result
    this.patient=this.resultats.patient
    
  })

  
  }
  


}

