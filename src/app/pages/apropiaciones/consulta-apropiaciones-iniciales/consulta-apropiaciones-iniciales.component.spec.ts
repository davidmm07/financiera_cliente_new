import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaApropiacionesInicialesComponent } from './consulta-apropiaciones-iniciales.component';

describe('ConsultaApropiacionesInicialesComponent', () => {
  let component: ConsultaApropiacionesInicialesComponent;
  let fixture: ComponentFixture<ConsultaApropiacionesInicialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaApropiacionesInicialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaApropiacionesInicialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
