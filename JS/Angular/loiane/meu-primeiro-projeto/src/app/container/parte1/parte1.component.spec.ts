import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parte1Component } from './parte1.component';

describe('Parte1Component', () => {
  let component: Parte1Component;
  let fixture: ComponentFixture<Parte1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parte1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parte1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
