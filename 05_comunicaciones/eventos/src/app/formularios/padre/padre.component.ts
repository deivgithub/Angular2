import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  name: string;

  constructor() { }

  ngOnInit() {
    this.name = '';
  }

  btnEvent(pName) {
    this.name = pName;
  }
}
