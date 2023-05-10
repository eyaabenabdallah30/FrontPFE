import { Component } from '@angular/core';
import { PatientService } from 'src/app/service/patient.service';
import { RdvsService } from 'src/app/service/rdvs.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-modifierrv',
  templateUrl: './modifierrv.component.html',
  styleUrls: ['./modifierrv.component.css']
})
export class ModifierrvComponent {
  resultats:any=[]
  rdv:any={}
  msg:String=''
   id:any=0
  constructor(private rdvservice:RdvsService,private patientServ:PatientService,private param:ActivatedRoute){}
  ngOnInit(){
   this.id=this.param.snapshot.params['id']
   console.log('Id Param '+this.id)
    this.detailRDV(this.id)
  }
  ModifierRDV(rdv:any){
    let rdvAdd:any={Nompatient:rdv.Nompatient,Prenompatient:rdv.Prenompatient,Contact:rdv.Contact,Date:rdv.Date,Heure:rdv.Heure}
    if(rdv.Nompatient=='' || rdv.Prenompatient=='' || rdv.Contact=='' || rdv.Date==''|| rdv.Heure=='')
    {
      this.msg='"Vérifier les champs !"'
      return this.msg
    }
    else{
        return this.rdvservice.ModifierRDV(rdv).subscribe(
          result=>{ console.log('Update effective')
        console.log(rdv)
      console.log(result)
     window.location.href="/consulterrv"
     this.msg='"Modifier avec succès"'
      return this.msg
      })
  }

  }

detailRDV(id:any){
console.log('IDD '+id)

  return this.rdvservice.detailRDV(id).subscribe(result=>{
      
    this.resultats=result
    this.rdv=this.resultats.rdv
    console.log('*********************** ')
    console.log(this.rdv)
    
  })
}
}
