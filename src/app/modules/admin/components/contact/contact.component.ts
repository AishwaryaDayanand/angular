import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { HttpServiceService } from '../../http-service.service';

@Component({  
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  incomingText:string = ""
  appointments : object[] = []
  constructor(private router : ActivatedRoute,
    private http : HttpServiceService) { 
    this.router.params.subscribe(data=>{
      this.incomingText = data['id']
      http.getOneUser(this.incomingText).subscribe(data=>console.log(data))
    })
  }

  name?:string;

  ngOnInit(): void {
  }
  validateName(name:string){
    if (name.length >20){
      return true ;
    }
    else{
      return false
    }
  }
  contactForm : FormGroup = new FormGroup({
    patient_name : new FormControl(''),
    age : new FormControl(""),
    disease: new FormControl("",Validators.maxLength(10))
  })

  submitContact(){
    // console.log(this.contactForm.value);
    // console.log(this.contactForm.valid);
    // console.log(this.contactForm.touched);
    // console.log(this.contactForm.dirty);
    this.http.sendAppointment(this.contactForm.value).subscribe(data=>console.log(data)
    )
  }
}
