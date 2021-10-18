import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVermifugacaoComponent } from './form-vermifugacao.component';

describe('FormVermifugacaoComponent', () => {
  let component: FormVermifugacaoComponent;
  let fixture: ComponentFixture<FormVermifugacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormVermifugacaoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVermifugacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
