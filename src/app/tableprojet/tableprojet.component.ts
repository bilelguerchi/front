import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators ,FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-tableprojet',
  templateUrl: './tableprojet.component.html',
  styleUrls: ['./tableprojet.component.css']
})
export class TableprojetComponent implements OnInit {
 public projets$!:Observable<any[]>;
 public projets:any ;
 public table ;
 public basicForm:FormGroup;
 ref: string;
 id:string;
 date_deb :string;
 date_fin :string;
 detail:string;
 client :string;
 intutil :string;

  constructor(private service:ProjetService , private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.basicForm = this.formbuilder.group({
      ref:[null,Validators.required],
      id:[null ,Validators.required],
      date_deb :[null ,Validators.required],
      date_fin :[null ,Validators.required],
      detail:[null ,Validators.required],
      client:[null ,Validators.required],
      intutil:[null ,Validators.required],
 });

    this.table=document.getElementById("table");
    this.projets$=this.service.getProjets();
    this.projets$.subscribe(data =>{
      this.projets=data;
    });
  }

  deleteProjet(id){
    if(confirm('are you sure you want to delete this project ?')){
    let projet=document.getElementById(id);
    console.log(this.table.children[1].removeChild(projet))
    
    console.log(id);
    this.service.deleteProjet(id).subscribe(response => {
      this.projets = this.projets.filter(item => item.id !== id);
    });;
  }
  }


  onSubmit(): void {
    console.log('m te5demch');
    let data ={
      ref:this.basicForm.value.ref,
     //nom:this.basicForm.value.nom,
     id: this.basicForm.value.id,
     date_deb : this.basicForm.value.date_deb,
     date_fin : this.basicForm.value.date_fin,
     detail : this.basicForm.value.detail,
     client : this.basicForm.value.client,
     intutil : this.basicForm.value.intutil,
      }
    this.service.addProjet(data).subscribe(response =>{
      console.log(response);
    })
  }

get f(){
    return this.basicForm.controls;
  }
}
