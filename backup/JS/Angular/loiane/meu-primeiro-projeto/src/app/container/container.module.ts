import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parte1Component } from './parte1/parte1.component';
import { Parte2Component } from './parte2/parte2.component';
import { ContainerComponent } from './container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Parte1Component, Parte2Component, ContainerComponent],
  exports: [ContainerComponent]
})
export class ContainerModule { }
