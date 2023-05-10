import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InterfaceComponent } from './interface/interface.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AjouterrvComponent } from './rv/ajouterrv/ajouterrv.component';
import { ConsulterrvComponent } from './rv/consulterrv/consulterrv.component';
import { ModifierrvComponent } from './rv/modifierrv/modifierrv.component';
import { ConsultationajouterComponent } from './consultation/consultationajouter/consultationajouter.component';
import { ConsultationaaffichComponent } from './consultation/consultationaaffich/consultationaaffich.component';
import { ConsultationmodifierComponent } from './consultation/consultationmodifier/consultationmodifier.component';
import { AjouterordComponent } from './ordonnance/ajouterord/ajouterord.component';
import { ConsulterordComponent } from './ordonnance/consulterord/consulterord.component';
import { ModiferpatientComponent } from './patient/modiferpatient/modiferpatient.component';
import { AjouterpatientComponent } from './patient/ajouterpatient/ajouterpatient.component';
import { DossierpatientComponent } from './dossierpatient/dossierpatient.component';
import { ModifierordComponent } from './ordonnance/modifierord/modifierord.component';
import { NavrvComponent } from './rv/navrv/navrv.component';
import { ConsulterpatientComponent } from './patient/consulterpatient/consulterpatient.component';
import { AjoutercertificatComponent } from './certificat/ajoutercertificat/ajoutercertificat.component';
import { ConsultercertificatComponent } from './certificat/consultercertificat/consultercertificat.component';
import { NavpatientComponent } from './patient/navpatient/navpatient.component';
import { RVaujourdhuiComponent } from './rv/rvaujourdhui/rvaujourdhui.component';
import { ModifiercertificatComponent } from './certificat/modifiercertificat/modifiercertificat.component';
import { ModifiercompteComponent } from './compteutilisateur/modifiercompte/modifiercompte.component';
import { ConsultercompteComponent } from './compteutilisateur/consultercompte/consultercompte.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    InterfaceComponent,
    NavbarComponent,
    AjouterrvComponent,
    ConsulterrvComponent,
    ModifierrvComponent,
    ConsultationajouterComponent,
    ConsultationaaffichComponent,
    ConsultationmodifierComponent,
    AjouterordComponent,
    ConsulterordComponent,
    ModiferpatientComponent,
    AjouterpatientComponent,
    ModiferpatientComponent,
   DossierpatientComponent,
   NavrvComponent,
   ConsulterpatientComponent,
   AjoutercertificatComponent,
   ConsultercertificatComponent,
   AjoutercertificatComponent,
   ConsultercertificatComponent,
    ModifierordComponent,
    NavpatientComponent,
   ConsultercertificatComponent,
   AjoutercertificatComponent,
   RVaujourdhuiComponent,
   ModifiercertificatComponent,
   ModifiercompteComponent,
   ConsultercompteComponent,
  
 
 
   

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
