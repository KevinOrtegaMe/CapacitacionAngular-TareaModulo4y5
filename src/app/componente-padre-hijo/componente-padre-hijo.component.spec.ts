import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePadreHijoComponent } from './componente-padre-hijo.component';

describe('ComponentePadreHijoComponent', () => {
  let component: ComponentePadreHijoComponent;
  let fixture: ComponentFixture<ComponentePadreHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentePadreHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePadreHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
