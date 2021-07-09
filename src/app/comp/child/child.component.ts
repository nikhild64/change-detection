import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input('data') data !:number;
  constructor(private cdr:ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  detachCdr(){

    this.cdr.detach();
  }
  attachCdr(){

    this.cdr.reattach();
  }

}
