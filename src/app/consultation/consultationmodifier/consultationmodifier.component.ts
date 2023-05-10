import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultationService } from 'src/app/service/consultation.service';
@Component({
  selector: 'app-consultationmodifier',
  templateUrl: './consultationmodifier.component.html',
  styleUrls: ['./consultationmodifier.component.css']
})
export class ConsultationmodifierComponent {
msg: any;

constructor(private Route:ActivatedRoute,private consservice:ConsultationService){

  this.detailConsultation()
}
idPatient:any=this.Route.snapshot.params['idPatient']
idConsultation:any=this.Route.snapshot.params['id']
consultation:any={}


// detailConsultation

detailConsultation(){
  
  return this.consservice.detailCONS(this.idConsultation).subscribe(res=>{
    this.consultation=res
    console.log(this.consultation)
  })
}
 

ModifierConsultation(consult:any){
  if( consult.consultation=='' ||consult.date=='')
    {
      this.msg=' "Vérifier les champs !"'
      return this.msg
    }
    else{
  
  return this.consservice.ModifierCONS(consult).subscribe(res=>{
    console.log(consult)
    window.location.href=`/consultationaaffich/${this.idPatient}`
    this.msg='"Modifier avec succés"'
    return this.msg
  })}

}

}
