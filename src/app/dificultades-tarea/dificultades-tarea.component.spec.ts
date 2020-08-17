import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DificultadesTareaComponent } from './dificultades-tarea.component';

describe('DificultadesTareaComponent', () => {
  let component: DificultadesTareaComponent;
  let fixture: ComponentFixture<DificultadesTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DificultadesTareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DificultadesTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
