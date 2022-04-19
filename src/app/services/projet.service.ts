import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  public projets!:Observable<any[]>;
  public apiUrl="http://localhost:4000/api/v1";


  constructor(private http:HttpClient) { 

  }

    //get projets
getProjets():Observable<any[]>{
  return this.http.get<any>(this.apiUrl + '/projets');
}


// add projet
addProjet(data:any){
  return this.http.post('http://localhost:4000/api/v1/projet/new', data);
}
// update projet
updateProjet(id:number|string , data:any){
  return this.http.put(this.apiUrl + `/projets/${id}`,data)
}
//deleted projet
deleteProjet(id:number|string){
  return this.http.delete(`http://localhost:4000/api/v1/projet/${id}`)
}
}
