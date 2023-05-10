import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Certificat } from '../interfaces/certificat';

@Injectable({
  providedIn: 'root'
})
export class CertificatService {

  constructor(private http:HttpClient) {}
  private API_AddCertifcat="http://localhost:5000/Certif/" 
  AddCertifcat(certif:Certificat){
    console.log('service info'+ certif.nompatient)
    return this.http.post(this.API_AddCertifcat+'AddCertif',certif)
  } 
  GetCertifcat(idPatient:any){
 
    return this.http.get(this.API_AddCertifcat +'Afficher/'+idPatient)

  }
  detailCertificat(id:any){
    console.log('Id  :::: '+id)
 
    return this.http.get(this.API_AddCertifcat+'detail/'+id)

  }
  ModifierCertificat(certif:Certificat){
    console.log(certif)
    return this.http.put(this.API_AddCertifcat+'UpdateCertif',certif)
  }
  deleteCertificat(id:any){
    console.log('Id '+id)
      return this.http.delete(this.API_AddCertifcat+'delete/'+id)
  
  
}

}
