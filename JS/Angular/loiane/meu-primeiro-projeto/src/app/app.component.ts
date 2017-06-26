import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewChecked {
  constructor(private titleService: Title) {
    }

  ngAfterViewChecked(){
    this.titleService.setTitle('Teste de título');
  }

  ngOnInit(){

  }
}
