import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rdvs } from '../interfaces/rdvs';

@Injectable({
  providedIn: 'root'
})
export class RdvsService {

  constructor(private http:HttpClient ){}
  private API_addRDV="http://localhost:5000/RDV/" 
 
 
    addRDV(rdv:Rdvs){
      console.log(rdv)
      return this.http.post(this.API_addRDV+'addRDV',rdv)
    } 
    GetRDVS(){
 
      return this.http.get(this.API_addRDV+'Afficher')
  
    }

    GetRDVSAct(){
 
      return this.http.get(this.API_addRDV+'Aujourdhui')
  
    }

    SearchRdv(date:any){
 
      return this.http.get(this.API_addRDV+'Search/'+date)
  
    }

    
    deleteRdv(id:any){
    console.log('Id '+id)
      return this.http.delete(this.API_addRDV+'delete/'+id)
  
    }

    deleteAllRdvs(){
 
      return this.http.delete(this.API_addRDV+'deleteAll')
  
    }


    detailRDV(id:any){
      console.log('Id RDV :::: '+id)
   
      return this.http.get(this.API_addRDV+'detail/'+id)
  
    }
    ModifierRDV(rdv:Rdvs){
      console.log(rdv)
      return this.http.put(this.API_addRDV+'UpdateRDV',rdv)
    }
}
