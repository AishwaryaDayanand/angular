import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http : HttpClient ) {}
  url :string = "https://jsonplaceholder.typicode.com/posts"


  getUser(){
    return this.http.get(this.url)
  }
  getOneUser(id:string){
    return this.http.get(`${this.url}/${id}`)
  }

  getEmployees(){
    return this.http.get("http://127.0.0.1:8000/api/")
  }
  sendAppointment(data:any){
    return this.http.post<any>('http://127.0.0.1:8000/api/',data)
  }

  getOneAppointment(id : string){
    return this.http.get(`http://127.0.0.1:8000/api/appointment/${id}`)
  }
  deleteAppointment(id:string){
    return this.http.delete(`http://127.0.0.1:8000/api/appointment/${id}`)
  }
  updateAppointment(id:string,data:any){
    return this.http.put(`http://127.0.0.1:8000/api/appointment/${id}`,data)
  }
}
