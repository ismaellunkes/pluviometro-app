import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements AfterViewInit{

  @ViewChild('mobile') sideNav ?: ElementRef;

  title = 'Pluviometro App';


  ngAfterViewInit(): void {
    let $sideNav = $('#mobile-demo');
    M.Sidenav.init (this.sideNav?.nativeElement);
  }
}
