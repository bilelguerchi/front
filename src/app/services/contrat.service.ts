import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ContratService {

  public contrats!:Observable<any[]>;
  public apiUrl="http://localhost:4000/api/v1";


  constructor(private http:HttpClient) { }
//********(get Contrats)********//
getContrats():Observable<any[]>{
  return this.http.get<any>(this.apiUrl + '/contrats');
}



// add contrat
addContrat(data:any){
  return this.http.post('http://localhost:4000/api/v1/contrat/new', data);
}
// update contrat
updateContrat(id:number|string , data:any){
  return this.http.put(this.apiUrl + `/contrats/${id}`,data)
}
//deleted contrat
deleteContrat(id:number|string){
  return this.http.delete(`http://localhost:4000/api/v1/contrat/${id}`)
}
}
