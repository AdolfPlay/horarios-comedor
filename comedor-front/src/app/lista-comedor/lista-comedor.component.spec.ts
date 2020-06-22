import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComedorComponent } from './lista-comedor.component';

describe('ListaComedorComponent', () => {
  let component: ListaComedorComponent;
  let fixture: ComponentFixture<ListaComedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaComedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaComedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
