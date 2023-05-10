import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ordonnance } from '../interfaces/ordonnance';
@Injectable({
  providedIn: 'root'
})
export class OrdonnanceService {

  constructor(private http:HttpClient) {}
  private API_AddOrd="http://localhost:5000/Ord/" 
  AddOrd(Ord:Ordonnance){
    console.log('service info'+ Ord.nompatient)
    return this.http.post(this.API_AddOrd+'AddOrd',Ord)
  } 
  GetOrdn(idPatient:any){
 
    return this.http.get(this.API_AddOrd +'Afficher/'+idPatient)

  }
  detailOrd(id:any){
    console.log('Id  :::: '+id)
 
    return this.http.get(this.API_AddOrd+'detail/'+id)

  }
  ModifierOrd(Ord:Ordonnance){
    console.log(Ord)
    return this.http.put(this.API_AddOrd+'Update',Ord)
  }
  deleteOrd(id:any){
    console.log('Id '+id)
      return this.http.delete(this.API_AddOrd+'delete/'+id)
  
  
}


}
