import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'study-project';
  displaySideMenu:boolean=false;
  stylingClass:string='home-page';
  openNav(){
    console.log('hi');
    this.displaySideMenu=true;
  }
  closeNav(type:string)
{
  if(type==='home'){
    this.stylingClass='home-page';
  }
  else{
    this.stylingClass='gallery-item';
  }
  this.displaySideMenu=false;
}}
