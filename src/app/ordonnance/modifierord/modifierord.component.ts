import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdonnanceService } from 'src/app/service/ordonnance.service';

@Component({
  selector: 'app-modifierord',
  templateUrl: './modifierord.component.html',
  styleUrls: ['./modifierord.component.css']
})
export class ModifierordComponent {
  idPatient:any=this.Route.snapshot.params['idPatient']
idOrdonance:any=this.Route.snapshot.params['id']
ordonance:any={}
  constructor(private ordservice:OrdonnanceService,private Route:ActivatedRoute){
    this.detailOrdonance()
  }

   // detail Ordonance
   detailOrdonance(){
   
    return this.ordservice.detailOrd(this.idOrdonance).subscribe(res=>{
      this.ordonance=res
      console.log(this.ordonance)
    })
  }
  msg: any=''

  ModifierOrdonance(ord:any){
    if(  ord.prescription=='' ||ord.date=='')
    {
      this.msg=' " Vérifier les champs ! "'
      return this.msg
    }
    else{
    this.ordservice.ModifierOrd(ord).subscribe(res=>{
      console.log(ord)
     window.location.href=`/consulterord/${this.idPatient}`
     this.msg='"Modifier avec succés"'
      return this.msg
    })
  }
  }
  
}
