import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class usersService {

  public users!:Observable<any[]>;
  public apiUrl="http://localhost:4000/api/v1";


  constructor(private http:HttpClient) { 

  }

    //get users
getUsers():Observable<any[]>{
  return this.http.get<any>(this.apiUrl + '/users');
}


// add users
addUsers(data:any){
  return this.http.post('http://localhost:4000/api/v1/user/new', data);
}
// update users
updateUsers(id:number|string , data:any){
  return this.http.put(this.apiUrl + `/users/${id}`,data)
}
//deleted users
deleteUser(id:number|string){
  return this.http.delete(`http://localhost:4000/api/v1/user/${id}`)
}
}
