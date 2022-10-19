import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Employee} from '../employee'


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  
  @Input() emp_data : Employee[] = []
  @Input() selected : string = ''
  @Output() sendName =  new EventEmitter<string>()
  
  constructor() { }
 
  ngOnChanges():void{
    console.log('changes done child');
  }
  ngOnInit(): void {
  }
  btnClicked(data:string){
    this.sendName.emit(data)
  }

}