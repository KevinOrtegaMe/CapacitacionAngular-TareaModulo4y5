import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticaRealizadaComponent } from './practica-realizada.component';

describe('PracticaRealizadaComponent', () => {
  let component: PracticaRealizadaComponent;
  let fixture: ComponentFixture<PracticaRealizadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticaRealizadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticaRealizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
