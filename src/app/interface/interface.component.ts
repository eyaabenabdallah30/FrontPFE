import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent {
  user:any=null
  role:string=""
 
  ngOnInit(){
    this.user=localStorage.getItem("user")
    
    this.role=JSON.parse(this.user).Role
    if(this.role=='Administrateur'){window.location.href='/interfaceadmin'}
    
    if(this.user!=null){
      console.log('nuuuuuuuuu')
    
    this.role=JSON.parse(this.user).Role
  }
  else{
    this.Logout()
  }
  }

  // Fonction Logout()
  Logout(){
    localStorage.removeItem('user')
    window.location.href='/'
  }

  }

  

