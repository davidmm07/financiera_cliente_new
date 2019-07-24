import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionModificacionesComponent } from './gestion-modificaciones.component';

describe('GestionModificacionesComponent', () => {
  let component: GestionModificacionesComponent;
  let fixture: ComponentFixture<GestionModificacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionModificacionesComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionModificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
