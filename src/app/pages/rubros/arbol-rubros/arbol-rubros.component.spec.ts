import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolRubrosComponent } from './arbol-rubros.component';

describe('ArbolRubrosComponent', () => {
  let component: ArbolRubrosComponent;
  let fixture: ComponentFixture<ArbolRubrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbolRubrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbolRubrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
