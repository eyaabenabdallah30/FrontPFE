import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navpatient',
  templateUrl: './navpatient.component.html',
  styleUrls: ['./navpatient.component.css']
})
export class NavpatientComponent {
  user:any
  roleUser:string=""
   id=this.Route.snapshot.params['id']
  constructor(private Route:ActivatedRoute){}
  
  ngOnInit(){
    
    this.user=localStorage.getItem("user")
    if(this.user!=null){
      console.log('nuuuuuuuuu')
    
    this.roleUser=JSON.parse(this.user).Role
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
