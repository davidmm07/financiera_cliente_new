import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroApropiacionesInicialesComponent } from './registro-apropiaciones-iniciales.component';

describe('RegistroApropiacionesInicialesComponent', () => {
  let component: RegistroApropiacionesInicialesComponent;
  let fixture: ComponentFixture<RegistroApropiacionesInicialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroApropiacionesInicialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroApropiacionesInicialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
