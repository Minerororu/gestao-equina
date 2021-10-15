import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastroProcedimentoComponent } from './form-cadastro-procedimento.component';

describe('FormCadastroProcedimentoComponent', () => {
  let component: FormCadastroProcedimentoComponent;
  let fixture: ComponentFixture<FormCadastroProcedimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCadastroProcedimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCadastroProcedimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
