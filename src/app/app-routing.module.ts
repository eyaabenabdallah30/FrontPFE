import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutercertificatComponent } from './certificat/ajoutercertificat/ajoutercertificat.component';
import { ConsultercertificatComponent } from './certificat/consultercertificat/consultercertificat.component';
import { ConsultationaaffichComponent } from './consultation/consultationaaffich/consultationaaffich.component';
import { ConsultationajouterComponent } from './consultation/consultationajouter/consultationajouter.component';
import { ConsultationmodifierComponent } from './consultation/consultationmodifier/consultationmodifier.component';
import { DossierpatientComponent } from './dossierpatient/dossierpatient.component';
import { InterfaceComponent } from './interface/interface.component';
import { LoginComponent } from './login/login.component';
import { AjouterordComponent } from './ordonnance/ajouterord/ajouterord.component';
import { ConsulterordComponent } from './ordonnance/consulterord/consulterord.component';
import { ModifierordComponent } from './ordonnance/modifierord/modifierord.component';
import { AjouterpatientComponent } from './patient/ajouterpatient/ajouterpatient.component';
import { ConsulterpatientComponent } from './patient/consulterpatient/consulterpatient.component';
import { ModiferpatientComponent } from './patient/modiferpatient/modiferpatient.component';
import { AjouterrvComponent } from './rv/ajouterrv/ajouterrv.component';
import { ConsulterrvComponent } from './rv/consulterrv/consulterrv.component';
import { ModifierrvComponent } from './rv/modifierrv/modifierrv.component';
import { RVaujourdhuiComponent } from './rv/rvaujourdhui/rvaujourdhui.component';
import { ModifiercompteComponent } from './compteutilisateur/modifiercompte/modifiercompte.component';
import { SignupComponent } from './signup/signup.component';
import {ConsultercompteComponent} from './compteutilisateur/consultercompte/consultercompte.component';
import { ModifiercertificatComponent } from './certificat/modifiercertificat/modifiercertificat.component';
import { InterfaceadminComponent } from './compteutilisateur/interfaceadmin/interfaceadmin.component';



const routes: Routes = [
 {path: "", component:LoginComponent },
 {path:"signup",component:SignupComponent},
 {path:"interface", component :InterfaceComponent},
 {path:"ajouterrv", component : AjouterrvComponent},
 {path:"consulterrv", component : ConsulterrvComponent},
 {path:"modifierrv/:id", component :ModifierrvComponent},
 {path:"ajouterord/:id", component : AjouterordComponent },
 {path:"consulterord/:id", component :ConsulterordComponent},
 {path:"modifierord/:idPatient/:id", component :ModifierordComponent},
 {path:"consultationaaffich/:id", component :ConsultationaaffichComponent},
 {path:"consultationajouter/:id", component :ConsultationajouterComponent},
 {path:"consultationmodifier/:idPatient/:id", component :ConsultationmodifierComponent},
 {path:"ajouterpatient",component :AjouterpatientComponent},
 {path:"modiferpatient/:idPatient",component : ModiferpatientComponent},
 {path:"dossierpatient",component:DossierpatientComponent},
 {path:"consulterpatient/:id",component:ConsulterpatientComponent},
 {path:"ajoutercertificat/:id",component:AjoutercertificatComponent},
 {path:"consultercertificat/:id",component:ConsultercertificatComponent},
 {path:"modifiercertificat/:idPatient/:idCertificat",component:ModifiercertificatComponent},
 {path:"RVaujourdhui",component:RVaujourdhuiComponent},
 {path:"modifiercompte/:idUser",component:ModifiercompteComponent},
 {path:"consultercompte",component:ConsultercompteComponent},
 {path:"interfaceadmin",component:InterfaceadminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
