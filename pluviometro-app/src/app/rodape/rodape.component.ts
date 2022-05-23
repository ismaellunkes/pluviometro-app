import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  year: number;
  autor: string;
  about: string;

  constructor() {
    this.autor = "Ismael Lunkes Pereira";
    this.about = "Prática de conhecimentos sobre Angular."
    this.year = new Date().getFullYear();
   }

  ngOnInit(): void {
  }

}
