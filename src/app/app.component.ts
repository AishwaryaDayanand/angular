import { Component, OnChanges } from '@angular/core';
import {Employee} from './employee'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "learning angular"
  selected_employee = ''
  employees : Employee[] = []

  constructor(){
  this.employees = [
    {name:"Aishwarya", age:21 , emp_code:'MED1'},
    {name:"Mansa", age:21 , emp_code:'MED2'},
    {name:"Rakesh", age:35 , emp_code:'MED3'}
  ] 
  }


  changeName(name:string){
    this.selected_employee = name
    console.log(name);
  }
}

