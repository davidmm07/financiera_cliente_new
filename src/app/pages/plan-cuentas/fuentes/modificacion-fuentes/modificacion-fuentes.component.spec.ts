import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionFuentesComponent } from './modificacion-fuentes.component';

describe('ModificacionFuentesComponent', () => {
  let component: ModificacionFuentesComponent;
  let fixture: ComponentFixture<ModificacionFuentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificacionFuentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificacionFuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
