import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewChecked {
  title:any;

  constructor(private titleService: Title) {
    this.title = this.titleService;
  }

  ngAfterViewChecked(){
    this.title.setTitle('Teste de título');
  }

  ngOnInit(){

  }
}
