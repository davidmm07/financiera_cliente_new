import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaRubrosComponent } from './consulta-rubros.component';

describe('ConsultaRubrosComponent', () => {
  let component: ConsultaRubrosComponent;
  let fixture: ComponentFixture<ConsultaRubrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaRubrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaRubrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
