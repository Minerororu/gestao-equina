import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListControleColetaSemenComponent } from './list-controle-coleta-semen.component';

describe('ListControleColetaSemenComponent', () => {
  let component: ListControleColetaSemenComponent;
  let fixture: ComponentFixture<ListControleColetaSemenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListControleColetaSemenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListControleColetaSemenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
