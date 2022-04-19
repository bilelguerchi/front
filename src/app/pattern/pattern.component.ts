import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css']
})
export class PatternComponent implements OnInit {
  name = 'Dynamic Add Fields';
  values = [];
  constructor() { }

  ngOnInit(): void {
  }
  removevalue(i){
    this.values.splice(i,1);
  }
  addvalue(){
    this.values.push({value: ""});
  }

}
