import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  formador: string;
  empresa: string;
  fecha: string;

  constructor() {
  }

  ngOnInit() {
    this.formador = 'Antonio José Camacho Fuentes';
    this.empresa = 'Indra Software Labs - Málaga';
    this.fecha = '2017';
  }

}
