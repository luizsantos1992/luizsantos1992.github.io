import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ContainerModule } from './container/container.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Parte1Component } from './parte1/parte1.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    Parte1Component,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    ContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
