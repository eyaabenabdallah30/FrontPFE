import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Patient} from '../interfaces/patient'

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private API_Patient="http://localhost:5000/Patient/" 
 
  constructor(private http:HttpClient) { }
  AddPatient(p:Patient){
    console.log('Service info '+p.adresse)
    return this.http.post(this.API_Patient+'AddPatient',p)

  }

  GetPatients(){
 
    return this.http.get(this.API_Patient+'Afficher')

  }
  detailPatient(id:any){
    console.log('Id Service :::: '+id)
 
    return this.http.get(this.API_Patient+'detail/'+id)

  }

  deletePatient(id:any){
    console.log('Id Service :::: '+id)
 
    return this.http.get(this.API_Patient+'delete/'+id)

  }

  SearchPatient(param:any){
 
    return this.http.get(this.API_Patient+'search/'+param)

  }
  ModifierPatient(patient:Patient){
    console.log(patient)
    return this.http.put(this.API_Patient+'UpdatePatient',patient)
  }

}
