import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { usersService } from 'app/services/user.service';

@Component({
  selector: 'app-tableusers',
  templateUrl: './tableusers.component.html',
  styleUrls: ['./tableusers.component.css']
})
export class TableusersComponent implements OnInit {
  public users$!:Observable<any[]>;
  public users:any ;
  public table ;
  constructor(private service:usersService) { }

  ngOnInit(): void {
    this.table=document.getElementById("table");
    this.users$=this.service.getUsers();
    this.users$.subscribe(data =>{
      this.users=data;
    })
  }
  



  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  deleteUser(id){
    if(confirm('are you sure you want to delete this project ?')){
    let user=document.getElementById(id);
     console.log(this.table.children[1].removeChild(user))

     
    console.log(id);
    this.service.deleteUser(id).subscribe(response => {
      this.users = this.users.filter(item => item.id !== id);
    });;
  }
  }


}
