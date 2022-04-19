import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContratService } from '../services/contrat.service';

@Component({
  selector: 'app-tablecontrat',
  templateUrl: './tablecontrat.component.html',
  styleUrls: ['./tablecontrat.component.css']
})
export class TablecontratComponent implements OnInit {
  public contrats$!:Observable<any[]>;
  public contrats:any ;
  public table ;
  constructor(private service:ContratService) { }

  ngOnInit(): void {
    this.table=document.getElementById("table");
    this.contrats$=this.service.getContrats();
    this.contrats$.subscribe(data =>{
      this.contrats=data;
    });
  }

  deleteContrat(id){
    if(confirm('are you sure you want to delete this contrat?')){
    let contrat=document.getElementById(id);
    console.log(this.table.children[1].removeChild(contrat))
    
    console.log(id);
    this.service.deleteContrat(id).subscribe(response => {
      this.contrats = this.contrats.filter(item => item.id !== id);
    });;
  }
  }

}
