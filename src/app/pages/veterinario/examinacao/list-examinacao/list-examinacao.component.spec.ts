import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExaminacaoComponent } from './list-examinacao.component';

describe('ListExaminacaoComponent', () => {
  let component: ListExaminacaoComponent;
  let fixture: ComponentFixture<ListExaminacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExaminacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExaminacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
