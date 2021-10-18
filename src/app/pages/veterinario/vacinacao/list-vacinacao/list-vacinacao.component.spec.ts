import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVacinacaoComponent } from './list-vacinacao.component';

describe('ListVacinacaoComponent', () => {
  let component: ListVacinacaoComponent;
  let fixture: ComponentFixture<ListVacinacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListVacinacaoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVacinacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
