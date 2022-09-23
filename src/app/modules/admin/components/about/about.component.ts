import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about_msg : string = ''
  constructor(private router : Router,
    private activated_route : ActivatedRoute) {
      this.activated_route.params.subscribe(data =>{
        this.about_msg = data['msg']
      })
     }

  ngOnInit(): void {
  }
  sendText(msg:string){
   this.router.navigate(['admin/contact','1'])
  }
  

}
