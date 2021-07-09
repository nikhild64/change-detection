import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  data=1;
  constructor() { }

  ngOnInit(): void {
  }
  increaseValue(){
    this.data=this.data+1;
  }

}
