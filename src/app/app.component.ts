

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name : string;   //declaration
  age : number;
  title : string | number;

  constructor(){
    this.name = "Aishwarya" // initialization
    this.age = 21;
    this.title = "2qq";
    // this.handlerMethod('string',2)
  }

  handlerMethod1(var1 : string , var2 : number) :
   void {
    console.log(`handler method called:  ${var1} ${var2}`);

  }

  handlerMethod2(var1 : string , var2 : string) : 
  string[] {
    let arr : string[] = [var1,var2];
    console.log(`handler method called:  ${var1} ${var2}`);
    console.log(arr);
    return arr ; 

  }

  handlerMethod3(var1 : number , var2 : number) : {var1:number , var2 :number}{
    console.log(`handler method called:  ${var1} ${var2}`);
    let obj = {var1:var1 , var2 :var2}
    console.log(obj);
    return obj;

  }
}

