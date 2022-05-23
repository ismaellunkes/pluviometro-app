import { Component, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('.sidenav') sideNav ?: ElementRef;

  title = 'Pluviometro App';


  ngAfterViewInit(): void {
    M.Sidenav.init (this.sideNav?.nativeElement);
  }

}
