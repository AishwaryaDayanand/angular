import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../../http-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  appointments : any = []
  appointment : any = {}

  constructor(
    private router : Router ,
    private http : HttpServiceService
  ) {
    // http.getUser().subscribe(data=>console.log(data))
    http.getEmployees().subscribe(data=>{console.log(data);
      this.appointments = data
      console.log(this.appointments);
    })
    
   }

  ngOnInit(): void {
  }
  about(){
    this.router.navigate(['admin/about','random msg'])  
  }
  viewAppointment(id : string){
    this.http.getOneAppointment(id).subscribe(apmt=>this.appointment = apmt)
  }
  updateAppointment(id : string){
    this.http.updateAppointment(id,{"patient_name":"aishwarya","age":21,'disease':'pcod'}).subscribe(apmt=>this.appointment = apmt)
  }
  deleteAppointment(id : string){
    this.http.deleteAppointment(id).subscribe(apmt=>console.log(apmt)
    )
  }
  ngOnchanges(){
    console.log('changed');
    
  }
  
}
