import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLancamentoFinanceiroComponent } from './form-lancamento-financeiro.component';

describe('FormLancamentoFinanceiroComponent', () => {
  let component: FormLancamentoFinanceiroComponent;
  let fixture: ComponentFixture<FormLancamentoFinanceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLancamentoFinanceiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLancamentoFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
