import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListControleReproducaoComponent } from './list-controle-reproducao.component';

describe('ListControleReproducaoComponent', () => {
  let component: ListControleReproducaoComponent;
  let fixture: ComponentFixture<ListControleReproducaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListControleReproducaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListControleReproducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
