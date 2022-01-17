import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'study-project';
  displaySideMenu:boolean=false;
  openNav(){
    console.log('hi');
    this.displaySideMenu=true;
  }
  closeNav()
{
  this.displaySideMenu=false;
}}
