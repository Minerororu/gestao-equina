import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLancamentoFinanceiroComponent } from './list-lancamento-financeiro.component';

describe('ListLancamentoFinanceiroComponent', () => {
  let component: ListLancamentoFinanceiroComponent;
  let fixture: ComponentFixture<ListLancamentoFinanceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLancamentoFinanceiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLancamentoFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
