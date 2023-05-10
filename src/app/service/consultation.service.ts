import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consultation } from '../interfaces/consultation';


@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
 

  constructor(private http:HttpClient) { }
  private API_AddCONS="http://localhost:5000/CONS/" 
  AddCONS(cons:Consultation){
    console.log('service info'+ cons.nompatient)
    return this.http.post(this.API_AddCONS+'AddCONS',cons)
  } 
  GetCONS(idPatient:any){
 
    return this.http.get(this.API_AddCONS +'Afficher/'+idPatient)

  }
  


  detailCONS(id:any){
    console.log('Id  :::: '+id)
 
    return this.http.get(this.API_AddCONS+'detail/'+id)

  }
  ModifierCONS(cons:Consultation){
    console.log(cons)
    return this.http.put(this.API_AddCONS+'UpdateCONS',cons)
  }
  deleteCONS(id:any){
    console.log('Id '+id)
      return this.http.delete(this.API_AddCONS+'delete/'+id)
  
  
}
}
