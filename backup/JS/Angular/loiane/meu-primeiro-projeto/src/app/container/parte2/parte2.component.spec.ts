import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parte2Component } from './parte2.component';

describe('Parte2Component', () => {
  let component: Parte2Component;
  let fixture: ComponentFixture<Parte2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parte2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parte2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
